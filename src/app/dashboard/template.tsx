'use client';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import type { ReadonlyChildrenFC } from '@/types/components';
import { ChevronLeftIcon } from 'lucide-react';
import { useState } from 'react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import Link from 'next/link';
// import { HomeIcon, SettingsGearIcon } from '@/components/animated-icon/icon';
import * as Icons from '@/components/animated-icon/index';

const sidebarItems = [
  { id: 1, name: 'خانه', icon: <Icons.Home /> },
  { id: 2, name: 'تنظیمات', icon: <Icons.Airplane /> },
  { id: 3, name: 'پروفایل', icon: '' },
  { id: 4, name: 'درباره ما', icon: '' },
];

const DashboardTemplate: ReadonlyChildrenFC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  return (
    <>
      <div dir="rtl" className="m-auto flex max-w-[1920px] flex-col gap-4 p-5">
        <div className="flex gap-4">
          <m.aside
            initial={{ width: '350px' }}
            animate={{ width: isExpanded ? '350px' : '150px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative hidden h-[80vh] w-72 justify-between gap-y-20 rounded-lg bg-white px-5 py-5 md:flex md:flex-col"
          >
            <div className="self-center">
              <Image width={100} height={50} alt="logo" src={'next.svg'} />
            </div>
            <div className="flex h-3/4 flex-col gap-y-8 bg-cyan-300">
              {sidebarItems.map(item => (
                <Link
                  href="#"
                  key={item.id}
                  className="flex items-center rounded-md bg-slate-400 px-2 py-2"
                >
                  {item.icon}
                  {item.name}
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
          <div className="flex w-full flex-col">
            <header className="flex h-16 items-center rounded-lg bg-white px-4">
              <ToggleTheme
                iconSize={10}
                className="md:flex"
                size={'lg'}
                variant={'default'}
                rounded={'twoxl'}
              />

              <ToggleScreen
                className="md:flex"
                size={'lg'}
                variant={'default'}
                rounded={'twoxl'}
              />
            </header>
            <main className="mt-16 h-[80vh] rounded-lg bg-white">
              {children}
            </main>
          </div>
        </div>
        {/* <footer className="h-10 rounded-lg bg-white">footer 2025</footer> */}
      </div>
    </>
  );
};

export default DashboardTemplate;
