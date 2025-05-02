'use client';

import type { ReadonlyChildrenFC } from '@/types/components';
import { ChevronLeftIcon } from 'lucide-react';
import { useState } from 'react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomeIcon from '@/components/svg-icon/home-icon';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Github } from '@/components/animated-icon';

const sidebarItems = [
  {
    id: 1,
    name: 'داشبورد',
    icon: <HomeIcon className="size-7" />,
    path: '/dashboard',
  },
  {
    id: 2,
    name: 'آیکون‌ها',
    // icon: <Icons.Airplane className="size-10" />,
    path: '/dashboard/icons',
  },
  {
    id: 3,
    name: 'دسته‌بندی',
    // icon: <Icons.Cart className="size-10" />,
    path: '',
  },
  { id: 4, name: 'موجودی', icon: '', path: '' },
  { id: 5, name: 'سفارشات', icon: '', path: '' },
  { id: 6, name: 'خریدها', icon: '', path: '' },
  { id: 7, name: 'ویژگی‌ها', icon: '', path: '' },
  { id: 8, name: 'فاکتورها', icon: '', path: '' },
  { id: 9, name: 'تنظیمات', icon: '', path: '' },
  { id: 10, name: 'پروفایل', icon: '', path: '' },
  { id: 11, name: 'نقش‌ها', icon: '', path: '' },
  { id: 12, name: 'دسترسی‌ها', icon: '', path: '' },
  { id: 13, name: 'مشتریان', icon: '', path: '' },
  { id: 14, name: 'فروشندگان', icon: '', path: '' },
  { id: 15, name: 'کوپن‌ها', icon: '', path: '' },
];

const DashboardTemplate: ReadonlyChildrenFC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const pathname = usePathname();
  const currentRoute = pathname;

  const breadcrumbs: { [key: string]: string } = {
    '/dashboard': 'داشبورد',
    '/dashboard/icons': 'آیکون‌ها',
    '/dashboard/category': 'دسته‌بندی',
    '/dashboard/inventory': 'موجودی',
    '/dashboard/orders': 'سفارشات',
  };
  const breadcrumbItems = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;
      return {
        name: breadcrumbs[path as keyof typeof breadcrumbs] || segment,
        path,
      };
    });

  return (
    <>
      <div
        dir="rtl"
        className="container m-auto flex max-w-[1920px] flex-col gap-3 p-1 md:p-3"
      >
        <div className="flex gap-x-4">
          {/* Desktop sidebar */}
          <m.aside
            initial={{ width: '260px' }}
            animate={{ width: isExpanded ? '260px' : '90px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="sticky top-3 hidden h-[95vh] w-72 justify-between gap-y-20 rounded-lg bg-white px-2 py-5 dark:bg-slate-800 lg:flex md:flex-col "
          >
            <div className="self-center">
              <Image width={100} height={50} alt="logo" src="/next.svg" />
            </div>
            <div
              className={`scrollbar-fix flex h-3/4 flex-col gap-y-8 overflow-y-auto ${isExpanded ? '' : 'items-center'} `}
            >
              {sidebarItems.map(item => (
                <Link
                  href={item.path}
                  key={item.id}
                  className={`flex items-center transition-colors ${!isExpanded ? 'size-12 justify-center rounded-xl p-2' : 'rounded-xl px-4 py-2'} ${currentRoute === item.path ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' : 'hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                >
                  {item.icon}
                  {isExpanded && item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Link
                target="_blank"
                className="flex items-center"
                href="https://github.com/pooya-poi/next-starter-kit/"
              >
                <Github className="size-6" />
              </Link>{' '}
            </div>
            <m.button
              initial={{ rotate: isExpanded ? '180deg' : '0deg' }}
              animate={{ rotate: isExpanded ? '180deg' : '0deg' }}
              transition={{ type: 'Tween', stiffness: 300, damping: 50 }}
              onClick={() => setIsExpanded(prev => !prev)}
              className="absolute -left-4 top-20 rounded-full border-4 border-background bg-white dark:bg-slate-800"
            >
              <ChevronLeftIcon size={20} />
            </m.button>
          </m.aside>

          <div className="flex w-full flex-col gap-y-3">
            <Header />
            {/* BreadCrumb */}
            <nav className="px-5 font-normal">
              <ul className="flex gap-1 text-xs">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-blue-500 hover:underline dark:text-blue-300"
                  >
                    خانه
                  </Link>
                </li>
                {breadcrumbItems.map((item, index) => (
                  <li key={item.path} className="flex items-center">
                    <ChevronLeftIcon size={12} className="mx-1" />
                    {index === breadcrumbItems.length - 1 ? (
                      <span>{item.name}</span>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-blue-500 hover:underline dark:text-blue-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <main className="rounded-lg bg-white p-6 dark:bg-slate-800">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
