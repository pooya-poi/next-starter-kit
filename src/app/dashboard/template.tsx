'use client';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import MobileSidebar from '@/components/MobileSidebar';
import type { ReadonlyChildrenFC } from '@/types/components';
import { ChevronLeftIcon } from 'lucide-react';
import { useState } from 'react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '@/components/animated-icon/index';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import ToggleSidebar from '@/components/toggle-sidebar';

const sidebarItems = [
  { id: 1, name: 'داشبورد', icon: <Icons.Home /> },
  { id: 2, name: 'محصولات', icon: <Icons.Airplane className='hover:bg-yellow-400'/> },
  { id: 3, name: 'دسته‌بندی', icon: <Icons.Cart className="hover:bg-red-400"/> },
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

  return (
    <>
      <div dir="rtl" className="m-auto flex max-w-[1920px] flex-col gap-4 p-5">
        <div className="flex gap-4">
          {/* Desktop sidebar */}
          <m.aside
            initial={{ width: '300px' }}
            animate={{ width: isExpanded ? '300px' : '100px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative hidden h-[90vh] w-72 justify-between gap-y-20 rounded-lg bg-white px-5 py-5 md:flex md:flex-col"
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
            <header className="flex h-16 items-center rounded-lg bg-white px-4">
              <div className="flex gap-x-2">
                <ToggleSidebar
                  openSidebar={openSidebar}
                  size={'lg'}
                  rounded={'2xl'}
                  variant={'default'}
                />
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
            </header>
            <main className="mt-16 rounded-lg bg-white p-6">
              {/* {children} */}

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(Icons).map(([iconName, IconComponent]) => (
                  <span key={iconName} className="flex items-center gap-2">
                    {/* <IconComponent className='hover:bg-yellow-300' /> */}
                    <IconComponent className='asd'/>
                    {iconName}
                  </span>
                ))}
              </div>
              </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
