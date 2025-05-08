'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import BellIcon from './svg-icon/bell-icon';
import { DirectionAwareTabs } from './ui/direction-aware-tabs';
import { Bell, Chat } from '@pooya-poi/vectonents';
import Message from './message';
import Notification from './notification';

import { useMessageStore } from '@/stores/messages-store';
import { useNotificationStore } from '@/stores/notifications-store';

import { useEffect } from 'react';

const initialMessages = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 3,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 4,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 5,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 6,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
  {
    id: 7,
    image: 'https://avatars.githubusercontent.com/u/50752011?s=40&v=4',
    user: 'پویا',
    action: 'این یک متن تستی برای کامپوننت پیام میباشد',
    timestamp: '15 دقیقه قبل',
    unread: true,
  },
];
const initialNotifications = [
  {
    id: 1,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 2,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 3,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 4,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 5,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 6,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 7,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین برای کاربران جدید',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 8,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
  {
    id: 9,
    user: 'جان دوو',
    action: 'درخواست بررسی',
    target: 'شماره خطا #55 درخواست لاگین',
    timestamp: '15 دقیقه‌پیش',
    unread: true,
  },
];

// function Dot({ className }: { className?: string }) {
//   return (
//     <svg
//       width="6"
//       height="6"
//       fill="currentColor"
//       viewBox="0 0 6 6"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       aria-hidden="true"
//     >
//       <circle cx="3" cy="3" r="3" />
//     </svg>
//   );
// }

export default function NotificationAndMessages() {
  const unreadMessagesLength = initialMessages.filter(m => m.unread).length;
  const unreadMessagesCount = useMessageStore(state => state.unread);
  const setUnreadMessagesCount = useMessageStore(state => state.setUnread);

  const unreadNotificationsLength = initialNotifications.filter(
    m => m.unread
  ).length;
  const unreadNotificationsCount = useNotificationStore(state => state.unread);
  const setUnreadNotificationsCount = useNotificationStore(
    state => state.setUnread
  );

  useEffect(() => {
    setUnreadMessagesCount(unreadMessagesLength);
    setUnreadNotificationsCount(unreadNotificationsLength);
  }, []);

  const tabs = [
    {
      id: 0,
      label: 'پیام ها',
      icon: (
        <div className="relative">
          <Chat variants="filled-1" />
          {unreadMessagesCount > 0 && (
            <span className="absolute top-1/2 -right-3 flex size-2 -translate-y-1/2">
              <span className="bg-background absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-background relative inline-flex size-2 rounded-full"></span>
            </span>
          )}
        </div>
      ),
      content: (
        <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-black/10 p-4">
          {unreadMessagesCount < 1 ? (
            <span>پیامی وجود ندارد</span>
          ) : (
            <Message initMessages={initialMessages} />
          )}
        </div>
      ),
    },
    {
      id: 1,
      label: 'اعلانات',
      icon: (
        <div className="relative">
          <Bell />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-1/2 -right-3 flex size-2 -translate-y-1/2">
              <span className="bg-background absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-background relative inline-flex size-2 rounded-full"></span>
            </span>
          )}
        </div>
      ),
      content: (
        <div className="flex w-full flex-col items-center gap-3 rounded-lg border border-black/10 p-4">
          {unreadNotificationsCount < 1 ? (
            <span>اعلانی وجود ندارد</span>
          ) : (
            <Notification initNotifications={initialNotifications} />
          )}
        </div>
      ),
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="relative rounded-xl"
          aria-label="Open notifications"
        >
          <BellIcon variants="outline" className="size-8 p-1" />
          {(unreadMessagesCount > 0 || unreadNotificationsCount > 0) && (
            <span className="absolute top-1 -right-1 flex size-2 -translate-y-1/2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-primary relative inline-flex size-2 rounded-full"></span>
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mx-5 mt-3 ml-3 w-96 p-1">
        <DirectionAwareTabs className="w-full justify-around" tabs={tabs} />
      </PopoverContent>
    </Popover>
  );
}
