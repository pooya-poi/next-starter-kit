'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Sidebar } from 'lucide-react';

const toggleSidebarVariants = cva(
  //   'border-none shadow-none hover:text-white hover:bg-gray-300 dark:data-[state=on]:bg-slate-900 hover:data-[state=on]:bg-gray-300 dark:hover:data-[state=on]:bg-slate-300 dark:group-hover:text-slate-900 data-[state=on]:bg-background',
  ' flex justify-center items-center  md:hidden bg-background dark:bg-forground group size-11 transition-all ',
  {
    variants: {
      variant: {
        default:
          'shadow-none hover:text-white hover:bg-gray-300 dark:data:bg-slate-900 hover:data:bg-gray-300 dark:hover:data:bg-slate-300 dark:group-hover:text-slate-900 data:bg-background',
      },
      size: {
        default: 'size-9',
        sm: 'size-9 ',
        lg: 'size-12',
        icon: 'size-9',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
    },
  }
);

interface ToggleSidebarProps
  extends VariantProps<typeof toggleSidebarVariants> {
  openSidebar: () => void;
  className?: string;
  iconSize?: number;
}

const ToggleSidebar: React.FC<ToggleSidebarProps> = ({
  openSidebar,
  variant,
  size,
  rounded,
  iconSize = 18,
}) => {
  return (
    <button
      className={cn(toggleSidebarVariants({ variant, size, rounded }))}
      onClick={openSidebar}
    >
      <Sidebar
        className="absolute shrink-0 scale-100 opacity-100 drop-shadow-lg transition-all group-hover:text-slate-900 dark:text-white group-hover:dark:text-slate-900"
        size={iconSize}
      />
    </button>
  );
};

ToggleSidebar.displayName = 'pageUi';
export default ToggleSidebar;
