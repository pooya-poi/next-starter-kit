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
        <Button
          size="icon"
          variant="outline"
          className="relative rounded-xl"
          aria-label="Open notifications"
        >
          <ChatIcon variants="outline" className="size-8 p-1" />
          {unreadCount > 0 && (
            // <Badge className="absolute -top-0.5 left-full flex size-1 -translate-x-1/2 items-center justify-center rounded-full p-1 text-center text-xs font-light">
            //   {/* {unreadCount > 99 ? '99+' : unreadCount} */}
            // </Badge>

            <span className="absolute -top-0.5 left-full flex size-2 -translate-x-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
          </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-3 ml-3 w-80 p-1">
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
          className="bg-border -mx-1 my-1 h-px"
        ></div>
        <div className="max-h-96 overflow-auto">
          {notifications.map(notification => (
            <div
              dir="auto"
              key={notification.id}
              className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors dark:hover:bg-slate-800"
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
                    className="text-foreground/80 text-right after:absolute after:inset-0"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <span className="text-foreground text-right font-medium hover:underline">
                      {notification.user}:
                    </span>
                    {notification.action}.
                  </button>
                  <div className="text-muted-foreground text-xs">
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
