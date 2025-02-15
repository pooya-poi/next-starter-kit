'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { useState } from 'react';
import ChatIcon from './svg-icon/chat-icon';

const initialNotifications = [
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

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export default function Message() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button size="icon" variant="outline" className="relative" aria-label="Open notifications"> */}

        <button className="relative rounded-2xl bg-background p-2">
          <ChatIcon variants="outline" className="size-8 p-1" />
          {unreadCount > 0 && (
            // <Badge className="absolute rounded-full -top-2 left-full min-w-5 -translate-x-1/2 px-1">
            <Badge className="absolute -top-1 left-full flex size-1 -translate-x-1/2 items-center justify-center rounded-full p-2.5 text-center text-xs font-light">
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-80 p-1">
        <div
          dir="auto"
          className="flex items-baseline justify-between gap-4 px-3 py-2"
        >
          <div className="text-sm font-semibold">پیام‌ها</div>
          {unreadCount > 0 && (
            <button
              className="text-xs font-medium hover:underline"
              onClick={handleMarkAllAsRead}
            >
              خواندن همه
            </button>
          )}
        </div>
        <div
          role="separator"
          aria-orientation="horizontal"
          className="-mx-1 my-1 h-px bg-border"
        ></div>
        <div className="max-h-96 overflow-auto">
          {notifications.map(notification => (
            <div
              dir="auto"
              key={notification.id}
              className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent dark:hover:bg-slate-800"
            >
              <div dir="rtl" className="relative flex items-start gap-3 pe-3">
                <img
                  className="size-9 rounded-md border border-slate-300 dark:border-white/10"
                  src={notification.image}
                  width={32}
                  height={32}
                  alt={notification.user}
                />
                <div dir="rtl" className="flex-1 space-y-1">
                  <button
                    className="text-right text-foreground/80 after:absolute after:inset-0"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <span className="text-right font-medium text-foreground hover:underline">
                      {notification.user}:
                    </span>
                    {notification.action}.
                  </button>
                  <div className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </div>
                </div>
                {notification.unread && (
                  <div className="absolute end-0 self-center">
                    <Dot />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
