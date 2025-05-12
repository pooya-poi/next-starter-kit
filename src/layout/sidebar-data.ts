import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import { Home, Person, Grid } from '@pooya-poi/vectonents';

export const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      categoryLabel: 'منو',
      subItems: [
        {
          title: 'داشبورد',
          url: '/dashboard',
          iconName: Grid,
          // iconVariants: 'filled-3',
          activeIconVariant: 'filled-3',
          notActiveIconVariant: 'outlined-3',
        },
      ],
    },
    {
      categoryLabel: 'منو ها',
      subItems: [
        {
          title: 'کاربران',
          url: '#',
          iconName: Person,
          // iconVariants: 'outlined',
          activeIconVariant: 'filled',
          notActiveIconVariant: 'outlined',
          isActive: true,
          items: [
            {
              title: 'پروفایل',
              url: '/dashboard/profile',
            },
            {
              title: 'کاربران',
              url: '/dashboard/users',
            },
            {
              title: 'Settings',
              url: '#',
            },
          ],
        },
        {
          title: 'Playground2',
          url: '#',
          iconName:SquareTerminal,
          // isActive: true,
          items: [
            {
              title: 'پروفایل',
              url: '#',
            },
            {
              title: 'Starred',
              url: '#',
            },
            {
              title: 'Settings',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      categoryLabel: 'کامپوننت ها',
      subItems: [
        {
          title: 'عمومی',
          url: '#',
          iconName: SquareTerminal,
          isActive: true,
          items: [
            {
              title: 'دکمه',
              url: '#',
            },
            {
              title: 'شبکه',
              url: '#',
            },
            {
              title: 'تایپوگرافی',
              url: '#',
            },
          ],
        },
        {
          title: 'Playground2',
          url: '#',
          iconName: SquareTerminal,
          isActive: true,
          items: [
            {
              title: 'پروفایل',
              url: '#',
            },
            {
              title: 'Starred',
              url: '#',
            },
            {
              title: 'Settings',
              url: '#',
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};
