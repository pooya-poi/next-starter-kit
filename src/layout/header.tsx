'use client';

import { useState } from 'react';
import AvatarPopover from '@/components/avatar-popover';
import NotificationAndMessages from '@/components/notificationAndMessages';
import { SidebarTriggerMobile } from '@/components/sidebar';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import { Input } from '@/components/ui/input';
import { Magnifier } from '@pooya-poi/vectonents';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', yAxis => {
    const previous = scrollY.getPrevious() as number;
    console.log('yAxis', yAxis, 'previous', previous);

    if (yAxis > previous && yAxis > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: '-55px' },
        visible: { y: -0 },
      }}
      whileHover="visible"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      className="bg-background/80 sticky top-2 z-50 flex h-fit justify-between gap-x-4 rounded-xl border px-5 py-3 backdrop-blur-sm dark:border"
    >
      <SidebarTriggerMobile variant="outline" />
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
    </motion.header>
  );
};

Header.displayName = 'HeaderLayout';
export default Header;
