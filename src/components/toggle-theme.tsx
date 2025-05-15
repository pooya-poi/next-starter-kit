'use client';

import { useEffect, useState } from 'react';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

interface ToggleThemeProps {
  className?: string;
  contentClassName?: string;
}

export default function ToggleTheme({ className,contentClassName }: ToggleThemeProps) {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const systemPreference = theme;
  const displayTheme = theme === 'system' ? systemPreference : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger className={className} asChild>
          <Button size="icon" variant="outline" className="rounded-xl">
            {displayTheme === 'light' && (
              <SunIcon size={16} aria-hidden="true" />
            )}
            {displayTheme === 'dark' && (
              <MoonIcon size={16} aria-hidden="true" />
            )}
            {displayTheme === 'system' && (
              <MonitorIcon size={16} aria-hidden="true" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`mt-3 min-w-28 ${contentClassName}`}>
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <SunIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>روز</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <MoonIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>شب</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <MonitorIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>سیستم</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
