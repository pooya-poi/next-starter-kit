'use client';

import { useState } from 'react';
import { useMessageStore } from '@/stores/messages-store';

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
type Message = {
  id: number;
  image: string;
  user: string;
  action: string;
  timestamp: string;
  unread: boolean;
};

interface MessagesProps {
  initMessages: Message[];
}

export default function Message({ initMessages }: MessagesProps) {
  const [messages, setMessages] = useState(initMessages);
  const unreadCount = messages.filter(msg => msg.unread).length;
  const markAllMessagesAsRead = useMessageStore(state => state.markAllAsRead);
  const markMessageAsRead = useMessageStore(state => state.markMessageAsRead);

  const handleMarkAllAsRead = () => {
    setMessages(
      messages.map(message => ({
        ...message,
        unread: false,
      }))
    );
    markAllMessagesAsRead();
  };

  const handleMessageClick = (id: number) => {
    setMessages(
      messages.map(message =>
        message.id === id ? { ...message, unread: false } : message
      )
    );
    markMessageAsRead();
  };

  return (
    <div>
      <div
        dir="auto"
        className="flex justify-end items-baseline gap-4 px-3 py-2"
      >
        {/* <div className="text-sm font-semibold">پیام‌ها</div> */}
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
        {messages.map(message => (
          <div
            dir="auto"
            key={message.id}
            className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors dark:hover:bg-slate-800"
          >
            <div dir="rtl" className="relative flex items-start gap-3 pe-3">
              <img
                className="size-9 rounded-md border border-slate-300 dark:border-white/10"
                src={message.image}
                width={32}
                height={32}
                alt={`تصویر ${message.user}`}
              />
              <div dir="rtl" className="flex-1 space-y-1">
                <button
                  className="text-foreground/80 text-right after:absolute after:inset-0"
                  onClick={() => handleMessageClick(message.id)}
                >
                  <span className="text-foreground text-right font-medium hover:underline">
                    {message.user}:
                  </span>
                  {message.action}.
                </button>
                <div className="text-muted-foreground text-xs">
                  {message.timestamp}
                </div>
              </div>
              {message.unread && (
                <div className="absolute end-0 self-center">
                  <Dot />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
