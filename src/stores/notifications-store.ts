import { create } from 'zustand';

type NotificationStore = {
  unread: number;
  setUnread: (count: number) => void;
  markAllAsRead: () => void;
  markNotificationAsRead: () => void;
};

export const useNotificationStore = create<NotificationStore>(set => ({
  unread: 0,
  setUnread: (count: number) => set({ unread: count }),
  markAllAsRead: () => set({ unread: 0 }),
  markNotificationAsRead: () => {
    set(state => ({ unread: state.unread - 1 }));
  },
}));
