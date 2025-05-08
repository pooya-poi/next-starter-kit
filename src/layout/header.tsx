'use client';

import AvatarPopover from '@/components/avatar-popover';

import NotificationAndMessages from '@/components/notificationAndMessages';
import { SidebarTriggerMobile } from '@/components/sidebar';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import { Input } from '@/components/ui/input';

import { Magnifier } from '@pooya-poi/vectonents';

const Header: React.FC = () => {
  return (
    <header className="bg-background flex h-fit justify-between gap-x-4 rounded-xl px-5 py-3 shadow">
      <SidebarTriggerMobile variant={'outline'} className="" />
      <div className="relative">
        <Input
          className="peer w-full rounded-lg border-0 border-b bg-transparent px-2 ps-9 shadow-none outline-0 focus-visible:ring-0"
          placeholder="جستجو"
          type="search"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Magnifier variants="outlined" size={16} aria-hidden="true" />
        </div>
      </div>
      <div className="flex gap-x-5">
        <div className="flex gap-x-2">
          <ToggleTheme className="hidden md:flex" />
          <ToggleScreen className="hidden md:flex" />
        </div>
        <div className="flex gap-x-2">
          <NotificationAndMessages />
        </div>
        <AvatarPopover />
      </div>
    </header>
  );
};

Header.displayName = 'HeaderLayout';
export default Header;
