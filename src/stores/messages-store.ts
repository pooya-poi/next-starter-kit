import { create } from 'zustand';

type MessageStore = {
  unread: number;
  setUnread: (count: number) => void;
  markAllAsRead: () => void;
  markMessageAsRead: () => void;
};

export const useMessageStore = create<MessageStore>(set => ({
  unread: 0,
  setUnread: (count: number) => set({ unread: count }),
  markAllAsRead: () => set({ unread: 0 }),
  markMessageAsRead: () => {
    set(state => ({ unread: state.unread - 1 }));
  },
}));
