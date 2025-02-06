'use client';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import MobileSidebar from '@/components/MobileSidebar';
import type { ReadonlyChildrenFC } from '@/types/components';
import { Bell, ChevronLeftIcon, MessageSquareMore, Search } from 'lucide-react';
import { useEffect, useState, useId } from 'react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '@/components/animated-icon/index';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import ToggleSidebar from '@/components/toggle-sidebar';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { usePathname } from 'next/navigation';

const sidebarItems = [
  {
    id: 1,
    name: 'داشبورد',
    icon: <Icons.Home className="size-10" />,
    path: '/dashboard',
  },
  {
    id: 2,
    name: 'آیکون‌ها',
    icon: <Icons.Airplane className="size-10" />,
    path: '/dashboard/icons',
  },
  {
    id: 3,
    name: 'دسته‌بندی',
    icon: <Icons.Cart className="size-10" />,
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
  const { isOpen, openSidebar, closeSidebar } = useMobileSidebar();
  const [offset, setOffset] = useState(0);
  const id = useId();
  const pathname = usePathname();
  const currentRoute = pathname;
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);
  console.log('offset', offset);

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
        className="container m-auto flex max-w-[1920px] flex-col gap-3 p-2 md:p-5"
      >
        <div className="flex gap-x-4">
          {/* Desktop sidebar */}
          <m.aside
            initial={{ width: '300px' }}
            animate={{ width: isExpanded ? '300px' : '90px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="sticky top-5 hidden h-[95vh] w-72 justify-between gap-y-20 rounded-lg bg-white px-5 py-5 dark:bg-slate-800 md:flex md:flex-col"
          >
            <div className="self-center">
              <Image width={100} height={50} alt="logo" src="/next.svg" />
            </div>
            {/* <div className="flex h-3/4 flex-col gap-y-8 overflow-y-auto"> */}
            {/* <div className="flex h-3/4 flex-col gap-y-8 scrollable-y-content"> */}
            <div className="scrollbar-fix flex h-3/4 flex-col gap-y-8 overflow-y-auto pr-3">
              {sidebarItems.map(item => (
                <Link
                  href={item.path}
                  key={item.id}
                  // className={ `flex items-center rounded-[14]  pr-1 py-1 text-white bg-slate-800`}
                  className={`flex items-center rounded-lg ${!isExpanded ? 'w-10' : ''} ${currentRoute === item.path ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' : 'hover:bg-slate-200'}`}
                >
                  {item.icon}
                  {isExpanded && item.name}
                </Link>
              ))}
            </div>
            <div className="bg-cyan-300">cta</div>
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

          {/* Mobile Sidebar */}
          <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />

          <div className="flex w-full flex-col gap-y-3">
            <header
              onScroll={() => console.log('header is scrolling')}
              className={` ${offset > 120 ? 'sticky top-5 shadow-2xl transition-all ease-in-out' : ''} flex h-16 items-center justify-between rounded-lg bg-white/70 px-4 backdrop-blur-sm dark:bg-slate-800/80`}
            >
              {/* rightside */}
              <div>
                {/* search */}
                <div className="relative">
                  <Input
                    id={id}
                    className="peer pr-8"
                    placeholder="جستجو"
                    type="search"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pe-3 pr-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Search size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>
              {/* leftside */}
              <div className="flex items-center gap-x-10">
                {/* toggles */}
                <div className="flex flex-row-reverse gap-x-4">
                  <ToggleTheme
                    iconSize={10}
                    className="md:flex"
                    size={'lg'}
                    variant={'default'}
                    rounded={'2xl'}
                  />
                  <ToggleScreen
                    className="md:flex"
                    size={'lg'}
                    variant={'default'}
                    rounded={'twoxl'}
                  />
                </div>
                {/* notifs */}
                <div className="flex gap-x-4">
                  <button>
                    <Icons.MessageCircleMore className="size-12 rounded-2xl bg-background p-2" />
                  </button>
                  <button className="relative">
                    <Icons.Bell className="size-12 rounded-2xl bg-background p-2" />
                    <Badge className="absolute -top-2 left-full flex max-w-8 -translate-x-6 items-center rounded-full border-background px-2">
                      55
                    </Badge>
                  </button>
                </div>
                {/* avatar */}
                <Avatar>
                  <AvatarImage
                    src="https://avatar.iran.liara.run/public/24"
                    alt="Kelly King"
                  />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
              </div>

              <ToggleSidebar
                openSidebar={openSidebar}
                size={'lg'}
                rounded={'2xl'}
                variant={'default'}
              />
            </header>
            {/* BreadCrumb */}
            <nav className="px-5 font-extrabold">
              <ul className="flex gap-2">
                <li>
                  <Link href="/dashboard" className="text-blue-600">
                    خانه
                  </Link>
                </li>
                {breadcrumbItems.map((item, index) => (
                  <li key={item.path} className="flex items-center">
                    <ChevronLeftIcon size={16} className="mx-2" />
                    {index === breadcrumbItems.length - 1 ? (
                      <span>{item.name}</span>
                    ) : (
                      <Link href={item.path} className="text-blue-600">
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
            <footer className="flex justify-between rounded-lg bg-white px-5 py-2 text-xs font-light text-gray-500 dark:bg-slate-800">
              <p>حقوق این سایت متعلق به شرکت فلان می‌باشد.</p>
              <span className="flex flex-row-reverse items-center gap-x-4">
                <Link href="/instagram" className="">
                  <Icons.Instagram className="!p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
                </Link>
                <Link href="/instagram" className="">
                  <Icons.Facebook className="!p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
                </Link>
                <Link href="/instagram" className="">
                  <Icons.Instagram className="!p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
                </Link>
                <Link href="/instagram" className="">
                  <Icons.Telegram className="!p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
                </Link>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
