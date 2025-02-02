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

const sidebarItems = [
  { id: 1, name: 'داشبورد', icon: <Icons.Home /> },
  {
    id: 2,
    name: 'محصولات',
    icon: <Icons.Airplane className="hover:bg-yellow-400" />,
  },
  {
    id: 3,
    name: 'دسته‌بندی',
    icon: <Icons.Cart className="hover:bg-red-400" />,
  },
  { id: 4, name: 'موجودی', icon: '' },
  { id: 5, name: 'سفارشات', icon: '' },
  { id: 6, name: 'خریدها', icon: '' },
  { id: 7, name: 'ویژگی‌ها', icon: '' },
  { id: 8, name: 'فاکتورها', icon: '' },
  { id: 9, name: 'تنظیمات', icon: '' },
  { id: 10, name: 'پروفایل', icon: '' },
  { id: 11, name: 'نقش‌ها', icon: '' },
  { id: 12, name: 'دسترسی‌ها', icon: '' },
  { id: 13, name: 'مشتریان', icon: '' },
  { id: 14, name: 'فروشندگان', icon: '' },
  { id: 15, name: 'کوپن‌ها', icon: '' },
];

const DashboardTemplate: ReadonlyChildrenFC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const { isOpen, openSidebar, closeSidebar } = useMobileSidebar();
  const [offset, setOffset] = useState(0);
  const id = useId();
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);
  console.log('offset', offset);

  return (
    <>
      <div
        dir="rtl"
        className="m-auto flex max-w-[1920px] flex-col gap-4 p-2 md:p-5"
      >
        <div className="flex gap-4">
          {/* Desktop sidebar */}
          <m.aside
            initial={{ width: '300px' }}
            animate={{ width: isExpanded ? '300px' : '100px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="sticky top-5 hidden h-[90vh] w-72 justify-between gap-y-20 rounded-lg bg-white px-5 py-5 md:flex md:flex-col"
          >
            <div className="self-center">
              <Image width={100} height={50} alt="logo" src={'next.svg'} />
            </div>
            <div className="flex h-3/4 flex-col gap-y-8 overflow-y-auto">
              {sidebarItems.map(item => (
                <Link
                  href="#"
                  key={item.id}
                  className="flex items-center rounded-md bg-slate-800 px-2 text-white"
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
              className="absolute -left-4 top-20 rounded-full border-4 border-background bg-white"
            >
              <ChevronLeftIcon size={28} />
            </m.button>
          </m.aside>

          {/* Mobile Sidebar */}
          <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />

          <div className="flex w-full flex-col">
            <header
              onScroll={() => console.log('header is scrolling')}
              className="sticky top-1 flex h-16 items-center justify-between rounded-lg bg-white/70 px-4 backdrop-blur-sm dark:bg-slate-800/80"
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
                  <button className="rounded-2xl bg-background p-1">
                    <Icons.MessageCircleMore className="size-9" />
                  </button>
                  <button className="relative rounded-2xl bg-background p-1">
                    <Icons.Bell className="size-9" />
                    <Badge className="absolute -top-2 left-full flex  max-w-8 px-2 -translate-x-6 items-center rounded-full border-background">
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
            <div className="my-5 px-5 font-extrabold">
              خانه/ داشبورد / ....../ بریدکرامب
            </div>
            <main className="rounded-lg bg-white p-6">
              {/* {children} */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(Icons).map(([iconName, IconComponent]) => (
                  <span
                    key={iconName}
                    className="flex items-center gap-2 text-black"
                  >
                    <IconComponent className="hover:bg-yellow-300" />
                    {iconName}
                  </span>
                ))}
              </div>
              {/* <Icons.SquareCheckBig/> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
