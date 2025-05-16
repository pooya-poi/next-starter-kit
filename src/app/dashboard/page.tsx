'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
} from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Person, TwoPerson } from '@pooya-poi/vectonents';
import { BanknoteIcon } from 'lucide-react';
import { SectionCards } from '@/components/section-cards';
import { cva } from 'class-variance-authority';
// import { Icons } from "@/components/ui/icons"

const chartData = [
  { month: 'فروردین', desktop: 186, tablet: 50, mobile: 80 },
  { month: 'اردیبهشت', desktop: 305, tablet: 100, mobile: 200 },
  { month: 'خرداد', desktop: 237, tablet: 80, mobile: 120 },
  { month: 'تیر', desktop: 73, tablet: 199, mobile: 190 },
  { month: 'مرداد', desktop: 209, tablet: 150, mobile: 130 },
  { month: 'شهریور', desktop: 214, tablet: 40, mobile: 140 },
];
const pieChartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chart-1)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-chart-2)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-chart-3)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-chart-4)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-chart-5)' },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-chart-4)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--color-chart-1)',
  },
  tablet: {
    label: 'Tablet',
    color: 'var(--color-chart-2)',
  },
} satisfies ChartConfig;

const pieChartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const tableData = [
  {
    id: '1',
    name: 'Alex Thompson',
    username: '@alexthompson',
    image:
      'https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-02_upqrxi.jpg',
    email: 'alex.t@company.com',
    location: 'San Francisco, US',
    status: 'فعال',
    balance: '$1,250.00',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    username: '@sarahchen',
    image:
      'https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-01_ij9v7j.jpg',
    email: 'sarah.c@company.com',
    location: 'Singapore',
    status: 'غیرفعال',
    balance: '$600.00',
  },
  {
    id: '4',
    name: 'Maria Garcia',
    username: '@mariagarcia',
    image:
      'https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-03_dkeufx.jpg',
    email: 'm.garcia@company.com',
    location: 'Madrid, Spain',
    status: 'فعال',
    balance: '$0.00',
  },
  {
    id: '5',
    name: 'David Kim',
    username: '@davidkim',
    image:
      'https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-05_cmz0mg.jpg',
    email: 'd.kim@company.com',
    location: 'Seoul, KR',
    status: 'غیرفعال',
    balance: '-$1,000.00',
  },
];

const tableBadge = cva('', {
  variants: {
    status: {
      active: 'bg-emerald-300 text-black',
      inActive: 'bg-amber-500 text-black',
    },
  },
  // defaultVariants: {
  //   status: 'active',
  // },
});

export default function Page() {
  return (
    <div className="flex flex-col p-4 md:p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">داشبورد</h1>
          <p className="text-muted-foreground text-sm">خوش آمدید!</p>
        </div>
      </div>

      {/* Stats Cards */}

      <SectionCards />

      {/* Charts Section */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <Card className="bg-background/70 col-span-1">
          <CardHeader>
            <CardTitle>نمای کلی فروش</CardTitle>
            <CardDescription>درآمد 6 ماه گذشته</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // tickFormatter={value => value.slice(0, 4)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                {/* <Bar dataKey="desktop" fill="var(--color-desktop)" radius={10}  /> */}
                {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={10} /> */}

                <Bar dataKey="desktop" fill="var(--color-chart-4)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-chart-1)" radius={4} />
                <Bar
                  dataKey="tablet"
                  maxBarSize={10}
                  activeBar={true}
                  fill="var(--color-chart-2)"
                  radius={50}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-background/70 col-span-1">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New vs returning users</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <LineChart accessibilityLayer data={chartData}> ></LineChart> */}
            <ChartContainer
              config={chartConfig}
              // className="min-h-[200px] w-full"
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={true} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  // tickFormatter={value => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      className="var(--font-vazir)"
                      hideLabel
                    />
                  }
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-chart-4)"
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-chart-4)',
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
                <Line
                  dataKey="mobile"
                  type="natural"
                  stroke="var(--color-chart-2)"
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-chart-2)',
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
                <Line
                  dataKey="tablet"
                  type="natural"
                  stroke="var(--color-chart-5)"
                  strokeWidth={2}
                  dot={{
                    fill: 'var(--color-chart-5)',
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Top Products */}
      <div className="mb-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-background/70 md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>فعالیت های اخیر</CardTitle>
            <CardDescription>آخرین فعالیت ها و تراکنش ها</CardDescription>
          </CardHeader>
          <CardContent>
            <Table dir="" className="">
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-right">نام</TableHead>
                  <TableHead className="text-right">ایمیل</TableHead>
                  <TableHead className="text-right">موقعیت</TableHead>
                  <TableHead className="text-right">وضعیت</TableHead>
                  <TableHead className="text-right">موجودی</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="rowre flex items-center gap-3">
                        <img
                          className="rounded-full"
                          src={item.image}
                          width={40}
                          height={40}
                          alt={item.name}
                        />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <span className="text-muted-foreground mt-0.5 text-xs">
                            {item.username}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>
                      <Badge
                        className={tableBadge({
                          status:
                            item.status === 'فعال' ? 'active' : 'inActive',
                          // status: (item.status === 'فعال') ? 'active' : 'inActive',
                        })}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="">{item.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">View all transactions</Button>
          </CardFooter>
        </Card>

        <Card className="bg-background/70">
          <CardHeader>
            <CardTitle>مرورگر ها</CardTitle>
            <CardDescription>براساس بازدید کاربران</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={pieChartConfig}
              className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                />
                <Pie data={pieChartData} dataKey="visitors">
                  <LabelList
                    dataKey="browser"
                    className="fill-background"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: keyof typeof pieChartConfig) =>
                      pieChartConfig[value]?.label
                    }
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
