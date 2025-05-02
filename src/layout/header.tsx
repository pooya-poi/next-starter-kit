'use client';

import AvatarPopover from '@/components/avatar-popover';
import Message from '@/components/message';
import Notification from '@/components/notification';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import { Input } from '@/components/ui/input';
import { Magnifier } from '@pooya-poi/vectonents';

const Header: React.FC = () => {
  return (
    <header className="bg-background flex h-fit justify-between rounded-xl px-5 py-3 shadow">
      <div className="relative">
        <Input
          className="peer bg-transparent rounded-none border-0 border-b ps-9 shadow-none outline-0 focus-visible:ring-0"
          placeholder="جستجو"
          type="search"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Magnifier variants="outlined" size={16} aria-hidden="true" />
        </div>
      </div>

      <div className="flex gap-x-5">
        <div className="flex gap-x-2">
          <ToggleTheme />
          <ToggleScreen />
        </div>
        <div className="flex gap-x-2">
          <Message />
          <Notification />
        </div>
        <AvatarPopover />
      </div>
    </header>
  );
};

Header.displayName = 'HeaderLayout';
export default Header;
