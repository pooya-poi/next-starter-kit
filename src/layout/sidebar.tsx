'use client';
import Image from 'next/image';
import * as m from 'motion/react-m';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, HomeIcon } from 'lucide-react';
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

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const pathname = usePathname();
  const currentRoute = pathname;
  return (
    <motion.aside
      initial={{ width: '220px' }}
      animate={{ width: isExpanded ? '220px' : '90px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="bg-background sticky top-3 hidden h-[95vh] w-72 justify-between gap-y-20 rounded-lg px-2 py-5 md:flex-col lg:flex"
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
        </Link>
      </div>
      <motion.button
        initial={{ rotate: isExpanded ? '180deg' : '0deg' }}
        animate={{ rotate: isExpanded ? '180deg' : '0deg' }}
        transition={{ type: 'Tween', stiffness: 100, damping: 50 }}
        onClick={() => setIsExpanded(prev => !prev)}
        className="border-muted bg-background absolute top-20 -left-4 rounded-full border-4"
      >
        <ChevronLeftIcon size={20} />
      </motion.button>
    </motion.aside>
  );
}
