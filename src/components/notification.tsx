'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import BellIcon from './svg-icon/bell-icon';

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

export default function Notification() {
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
          <BellIcon variants="outline" className="size-8 p-1" />
          {unreadCount > 0 && (
            // <Badge className="absolute rounded-full -top-2 left-full min-w-5 -translate-x-1/2 px-1">
            <Badge className="absolute -top-1 left-full flex size-1 -translate-x-1/2 items-center justify-center rounded-full p-2.5 text-center text-xs font-light">
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="mx-5 mt-2 w-96 p-1">
        <div
          dir="auto"
          className="flex items-baseline justify-between gap-4 px-3 py-2"
        >
          <div className="text-sm font-semibold">اعلانات</div>
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
          <div className="max-h-96 overflow-auto">
            {notifications.map(notification => (
              <div
                dir="auto"
                key={notification.id}
                className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent dark:hover:bg-slate-800"
              >
                <div className="relative flex items-start pe-3">
                  <div className="flex-1 space-y-1">
                    <button
                      className="text-right text-foreground/80 after:absolute after:inset-0"
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <span className="font-medium text-foreground hover:underline">
                        {notification.user}
                      </span>{' '}
                      {notification.action}{' '}
                      <span className="font-medium text-foreground hover:underline">
                        {notification.target}
                      </span>
                      .
                    </button>
                    <div className="text-xs text-muted-foreground">
                      {notification.timestamp}
                    </div>
                  </div>
                  {notification.unread && (
                    <div className="absolute end-0 self-center">
                      <span className="sr-only">Unread</span>
                      <Dot />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
