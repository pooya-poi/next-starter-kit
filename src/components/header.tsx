import { Badge, Search } from 'lucide-react';
import { Input } from './ui/input';
import ToggleTheme from './toggle-theme';
import ToggleScreen from './toggle-screen';
import ChatIcon from './svg-icon/chat-icon';
import BellIcon from './svg-icon/bell-icon';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import ToggleSidebar from './toggle-sidebar';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { useEffect, useId, useState } from 'react';
import * as m from 'motion/react-m';
import MobileSidebar from './MobileSidebar';
import Notification from './notification';
import Message from './message';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import Link from 'next/link';

const Header: React.FC = () => {
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
    <div>
      <m.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onScroll={() => console.log('header is scrolling')}
        className={` ${offset > 120 ? 'sticky top-1 shadow-2xl transition-all duration-1000 ease-in-out' : ''} flex h-16 items-center justify-between rounded-lg bg-white/70 px-4 backdrop-blur-sm dark:bg-slate-800/80`}
      >
        {/* rightside */}
        <div>
          {/* search */}
          <div className="relative">
            <Input
              id={id}
              className="peer rounded-xl border-none pr-8 focus:ring-0 focus-visible:ring-0"
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
          <div className="hidden flex-row-reverse gap-x-4 md:flex">
            <ToggleTheme size={'lg'} variant={'default'} rounded={'2xl'} />
            <ToggleScreen
              className="md:flex"
              size={'lg'}
              variant={'default'}
              rounded={'twoxl'}
            />
          </div>
          {/* notifs */}
          <div className="flex gap-x-4">
            <Message />
            <Notification />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://avatar.iran.liara.run/public/24"
                  alt="Kelly King"
                />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="mx-1 mt-3 w-44 p-1 md:mx-3">
              <div
                dir="auto"
                className="flex items-baseline justify-between gap-4 px-3 py-2"
              >
                <div className="text-sm font-semibold">سلام پویا 👋</div>
              </div>
              <div
                role="separator"
                aria-orientation="horizontal"
                className="-mx-1 my-1 h-px bg-border"
              ></div>
              <div className="flex flex-col items-end">
                <Link
                  className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
                  href="#"
                >
                  پروفایل
                </Link>
                <Link
                  className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
                  href="#"
                >
                  پیام‌ها
                </Link>
                <Link
                  className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
                  href="#"
                >
                  راهنما
                </Link>
              </div>
              <div
                role="separator"
                aria-orientation="horizontal"
                className="-mx-1 my-1 h-px bg-border"
              ></div>
              <div className="flex justify-end">
                <Button className="rounded-lg" variant={'destructive'}>
                  خروج
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <ToggleSidebar
          openSidebar={openSidebar}
          size={'lg'}
          rounded={'2xl'}
          variant={'default'}
        />
      </m.header>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

Header.displayName = 'pageComponents';
export default Header;
