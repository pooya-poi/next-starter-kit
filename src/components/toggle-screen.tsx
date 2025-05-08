'use client';
import { Minimize } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { ExpandIcon } from './animated-icon/expand';
import { Button } from './ui/button';

/**
 * Define the styles and variants for the toggle screen button using `class-variance-authority`.
 */
const toggleScreenVariants = cva(
  'group size-11 bg-background dark:bg-forground',
  {
    variants: {
      variant: {
        default:
          'border-none shadow-none hover:text-white hover:bg-gray-300 dark:data-[state=on]:bg-slate-900 hover:data-[state=on]:bg-gray-300 dark:hover:data-[state=on]:bg-slate-300 dark:group-hover:text-slate-900 data-[state=on]:bg-background',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        twoxl: 'rounded-2xl',
        full: 'rounded-full',
      },
      size: {
        default: 'size-9',
        sm: 'size-9 ',
        lg: 'size-12',
        icon: 'size-9',
      },
    },
  }
);

/**
 * `ToggleScreenProps` defines the props for the `ToggleScreen` component.
 */
interface ToggleScreenProps extends VariantProps<typeof toggleScreenVariants> {
  className?: string;
}

/**
 * `ToggleScreen` is a component that renders a fullscreen toggle button. It toggles between
 * fullscreen and normal modes, and displays different icons based on the fullscreen state.
 *
 * @param {ToggleScreenProps} props - The props for the toggle screen button.
 * @returns {JSX.Element} The rendered toggle screen component.
 */
const ToggleScreen = ({ className }: ToggleScreenProps) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  /**
   * Toggles the fullscreen state of the document.
   * If not in fullscreen, it requests fullscreen mode. If in fullscreen, it exits.
   */
  const toggleFullScreen = (): void => {
    if (typeof window !== 'undefined') {
      if (!document.fullscreenElement) {
        document.documentElement
          .requestFullscreen()
          .then(() => setIsFullScreen(true))
          .catch(error => console.error('Failed to enter fullscreen:', error));
      } else {
        document
          .exitFullscreen()
          .then(() => setIsFullScreen(false))
          .catch(error => console.error('Failed to exit fullscreen:', error));
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`rounded-xl ${className}`}
      onClick={toggleFullScreen}
    >
      {isFullScreen ? (
        <Minimize
          size={16}
          strokeWidth={2}
          className="size-6 text-black group-hover:text-slate-900 dark:text-white dark:group-hover:text-slate-900"
          aria-hidden="true"
        />
      ) : (
        <ExpandIcon className="size-6 text-black dark:text-white dark:group-hover:text-slate-900" />
      )}
    </Button>
  );
};

export default ToggleScreen;
