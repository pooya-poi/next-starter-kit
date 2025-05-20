import {
  Banknote,
  ShoppingBagIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  User,
  UserCheck,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cva } from 'class-variance-authority';
import Clock from './clock';

type MetricData = {
  id: 'revenue' | 'customers' | 'accounts' | 'orders'| 'buyRate'| 'profit';
  title: string;
  value: string;
  change: string;
  trend?: 'up' | 'down';
  description: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
};

const metricsData: MetricData[] = [
  {
    id: 'revenue',
    title: 'درآمد کل',
    value: '۱,۲۵۰ دلار',
    change: '+۱۲.۵٪',
    trend: 'up',
    description: 'روند صعودی این ماه',
    subtext: 'بازدیدکنندگان در ۶ ماه گذشته',
    icon: Banknote,
  },
  {
    id: 'customers',
    title: 'مشتریان جدید',
    value: '۱,۲۳۴',
    change: '-۲۰٪',
    trend: 'down',
    description: 'کاهش ۲۰٪ در این دوره',
    subtext: 'نیاز به توجه در جذب مشتری',
    icon: User,
  },
  {
    id: 'accounts',
    title: 'حساب‌های فعال',
    value: '۴۵,۶۷۸',
    change: '+۱۲.۵٪',
    trend: 'up',
    description: 'حفظ قوی کاربران',
    subtext: 'فراتر از اهداف تعامل',
    icon: UserCheck,
  },
  {
    id: 'orders',
    title: 'سفارشات',
    value: '۴.۵٪',
    change: '+۴.۵٪',
    trend: 'up',
    description: 'عملکرد پایدار',
    subtext: 'مطابق با پیش‌بینی‌های رشد',
    icon: ShoppingBagIcon,
  },
  {
    id: 'buyRate',
    title: 'نرخ خرید',
    value: '۴.۵٪',
    change: '+۴.۵٪',
    trend: 'up',
    description: 'عملکرد پایدار',
    subtext: 'مطابق با پیش‌بینی‌های رشد',
    icon: ShoppingBagIcon,
  },
  {
    id: 'profit',
    title: 'سود',
    value: '۴.۵٪',
    change: '+۴.۵٪',
    trend: 'up',
    description: 'عملکرد پایدار',
    subtext: 'مطابق با پیش‌بینی‌های رشد',
    icon: ShoppingBagIcon,
  },
];

const cardVariant = cva(
  '@container/card py-2 dark:border shadow-none border bg-background/70 ',
  {
    variants: {
      gradient: {
        revenue: '',
        customers: '',
        accounts: '',
        orders: '',
        buyRate: '',
        profit: '',
       
      },
    },
  }
);
const badgeVariant = cva(
  'flex flex-row-reverse gap-1 text-sm border-0 bg-muted dark:bg-background h-fit py-1',
  {
    variants: {
      trend: {
        up: 'text-success',
        down: 'text-destructive ',
      },
    },
  }
);
const cardIconVariant = cva('p-2 flex justify-center items-center rounded-xl', {
  variants: {
    gradient: {
      revenue: 'bg-gradient-to-r from-indigo-400 to-cyan-400 text-white',
      customers: 'bg-gradient-to-r from-red-400 to-pink-500 text-white',
      accounts: 'bg-gradient-to-br from-teal-400 to-green-500 text-white',
      orders: 'bg-gradient-to-br from-blue-400 to-purple-700 text-white',
      buyRate: 'bg-gradient-to-br from-blue-400 to-purple-700 text-white',
      profit: 'bg-gradient-to-br from-blue-400 to-purple-700 text-white',
    },
  },
});

export function SectionCards() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/* item 1 */}

      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-2 xl:row-span-2">
        <div className="bg-background/70 border flex h-full w-full flex-row items-center justify-between rounded-xl p-4">
          <div className="flex flex-col items-start">
            <span className="text-foreground flex flex-col text-xl font-bold">
              <span>سلام پویا👋</span>
              <span className='font-light text-sm'>خوش آمدید</span>
            </span>
            <img
              src="person.svg"
              alt="Person"
              className="mt-2 w-40 object-contain"
            />
          </div>
          <div>
            <Clock
              type="both"
              showNumbers={true}
              showDate={true}
              datePosition="bottom"
            />
          </div>
        </div>
      </div>

      {metricsData.map(metric => (
        <div key={metric.id} className="md:col-span-2 lg:col-span-1">
          <Card
            key={metric.id}
            className={cardVariant({
              gradient: metric.id,
            })}
          >
            <CardHeader className="relative">
              <div className="flex justify-between">
                <CardDescription className="flex items-center gap-x-2 font-semibold">
                  <div
                    className={cardIconVariant({
                      gradient: metric.id,
                    })}
                  >
                    <metric.icon className="size-8" />
                  </div>
                  {metric.title}
                </CardDescription>
                <Badge
                  variant="outline"
                  dir="ltr"
                  className={badgeVariant({
                    trend: metric.trend,
                  })}
                >
                  {metric.trend === 'up' ? (
                    <TrendingUpIcon className="size-3" />
                  ) : (
                    <TrendingDownIcon className="size-3" />
                  )}

                  {metric.change}
                </Badge>
              </div>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {metric.value}
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {metric.description}
                {metric.trend === 'up' ? (
                  <TrendingUpIcon className="size-3" />
                ) : (
                  <TrendingDownIcon className="size-3" />
                )}
              </div>
              {/* <div className="">{metric.subtext}</div> */}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
