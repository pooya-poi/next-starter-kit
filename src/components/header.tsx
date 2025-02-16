import { Search } from 'lucide-react';
import { Input } from './ui/input';
import ToggleTheme from './toggle-theme';
import ToggleScreen from './toggle-screen';
import ToggleSidebar from './toggle-sidebar';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { useEffect, useId, useState } from 'react';
import * as m from 'motion/react-m';
import MobileSidebar from './MobileSidebar';
import Notification from './notification';
import Message from './message';
import AvatarPopover from './avatar-popover';
import SearchInput from './search-input';

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
        {/* <div> */}
          {/* search */}
          <SearchInput className=' hidden lg:block'/>
        {/* </div> */}
        {/* leftside */}
        <div className="flex items-center gap-x-10">
          {/* toggles */}
          <div className="flex flex-row-reverse gap-x-4 ">
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

          <AvatarPopover />
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
