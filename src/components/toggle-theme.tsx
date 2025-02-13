'use client';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from 'next-themes';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import SunIcon from './svg-icon/sun-icon';
import MoonIcon from './svg-icon/moon-icon';

/**
 * Variants for the ToggleTheme component styles using class-variance-authority.
 */
const toggleThemeVariants = cva('group bg-background dark:bg-forground', {
  variants: {
    variant: {
      default:
        'border-none shadow-none hover:text-white hover:bg-gray-300 dark:data-[state=on]:bg-slate-900 hover:data-[state=on]:bg-gray-300 dark:hover:data-[state=on]:bg-slate-300 dark:group-hover:text-slate-900 data-[state=on]:bg-background',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    },
    size: {
      default: 'size-9',
      sm: 'size-9 ',
      lg: 'size-12',
      icon: 'size-9',
    },
  },
});

/**
 * Props for the ToggleTheme component.
 */
interface ToggleThemeProps extends VariantProps<typeof toggleThemeVariants> {
  className?: string;
}

/**
 * ToggleTheme component for switching between light and dark themes.
 *
 * @param {ToggleThemeProps} props - Props for customizing the appearance and behavior of the toggle.
 * @returns {JSX.Element} The ToggleTheme component.
 */
const ToggleTheme = ({
  className,
  variant,
  size,
  rounded,
}: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      type="button"
      variant="outline"
      className={cn(toggleThemeVariants({ variant, rounded, size, className }))}
      onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
    >
      <MoonIcon
      variants='fill'
        aria-hidden="true"
        className="group-data-[state=on]:text-white-900/80 size-6 shrink-0 scale-0 opacity-0 transition-all group-hover:text-slate-900 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
      />
      <SunIcon variants='outline' className="absolute size-6 shrink-0 scale-100 opacity-100 drop-shadow-lg transition-all group-hover:text-slate-900 group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0 dark:text-white group-hover:dark:text-slate-900" />
    </Toggle>
  );
};

export default ToggleTheme;
