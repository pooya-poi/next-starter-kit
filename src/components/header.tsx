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
            <button className="rounded-2xl bg-background p-2">
              <ChatIcon className="size-8 p-1" />
            </button>
            {/* <button className="relative rounded-2xl bg-background p-2">
              <BellIcon variants='fill' className="size-8 p-1" />
              <Badge className="absolute -top-2 left-full flex max-w-8 -translate-x-6 items-center rounded-full border-background px-2">
                55
              </Badge>
            </button> */}

          <Notification/>


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
      </m.header>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

Header.displayName = 'pageComponents';
export default Header;
