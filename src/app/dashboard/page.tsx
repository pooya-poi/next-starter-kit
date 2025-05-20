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

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';

import { SectionCards } from '@/components/section-cards';
import { cva } from 'class-variance-authority';

import ApexBar from '@/components/charts/apex-bar';
import ApexLine from '@/components/charts/apex-line';
import ApexPolarArea from '@/components/charts/apex-polar-area';
import ApexDonutChart from '@/components/charts/apex-donut';

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
});

export default function Page() {
  return (
    <div className="flex flex-col md:p-6">
      {/* Stats Cards */}

      <SectionCards />

      {/* Charts Section */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <ApexBar
          options={{
            xaxis: {
              categories: [
                'فروردین',
                'اردیبهشت',
                'خرداد',
                'تیر',
                'مرداد',
                'شهریور',
              ],
            },
            legend: {
              position: 'bottom',
            },
          }}
          title="نمای کلی فروش"
          description="درآمد 6 ماه گذشته"
          series={[
            {
              name: 'دسکتاپ',
              data: [44, 55, 57, 56, 61, 90],
            },
            {
              name: 'موبایل',
              data: [44, 55, 57, 56, 61, 80],
            },
          ]}
        />

        <ApexLine
          type="area"
          options={{
            xaxis: {
              categories: [
                'فروردین',
                'اردیبهشت',
                'خرداد',
                'تیر',
                'مرداد',
                'شهریور',
              ],
            },
            legend: {
              position: 'bottom',
            },
          }}
          title="نمای کلی فروش"
          description="درآمد 6 ماه گذشته"
          series={[
            {
              name: 'دسکتاپ',
              data: [34, 50, 27, 6, 41, 10],
            },
            {
              name: 'موبایل',
              data: [44, 55, 57, 56, 31, 30],
            },
          ]}
        />
      </div>

      {/* Recent Activity & Top Products */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        <ApexDonutChart
          height={'300px'}
          title="فروش بر اساس دسته‌بندی"
          description="میزان فروش در دسته‌های مختلف"
          series={[45000000, 30000000, 20000000, 15000000]}
        />
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ApexPolarArea
          series={[21, 35, 42, 17, 29]}
          title="نمودار فروش فصلی"
          description="میزان فروش در ماه‌های مختلف"
        />
      </div>
    </div>
  );
}
