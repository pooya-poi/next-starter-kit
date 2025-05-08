'use client';

import { useState } from 'react';
import { useNotificationStore } from '@/stores/notifications-store';

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

type Notification = {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  unread: boolean;
};
interface NotificationsProps {
  initNotifications: Notification[];
}

export default function Notification({
  initNotifications,
}: NotificationsProps) {
  const [notifications, setNotifications] = useState(initNotifications);
  const unreadCount = notifications.filter(msg => msg.unread).length;
  const markAllNotificationsAsRead = useNotificationStore(
    state => state.markAllAsRead
  );
  const markNotificationAsRead = useNotificationStore(
    state => state.markNotificationAsRead
  );

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        unread: false,
      }))
    );
    markAllNotificationsAsRead();
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
    markNotificationAsRead();
  };

  return (
    <div>
      <div
        dir="auto"
        className="flex items-baseline justify-end gap-4 px-3 py-2"
      >
        {/* <div className="text-sm font-semibold">اعلانات</div> */}
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
        <div className="max-h-96 overflow-auto">
          {notifications.map(notification => (
            <div
              dir="auto"
              key={notification.id}
              className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors dark:hover:bg-slate-800"
            >
              <div className="relative flex items-start pe-3">
                <div className="flex-1 space-y-1">
                  <button
                    className="text-foreground/80 text-right after:absolute after:inset-0"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <span className="text-foreground font-medium hover:underline">
                      {notification.user}
                    </span>
                    {notification.action}
                    <span className="text-foreground font-medium hover:underline">
                      {notification.target}
                    </span>
                    .
                  </button>
                  <div className="text-muted-foreground text-xs">
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
    </div>
  );
}
