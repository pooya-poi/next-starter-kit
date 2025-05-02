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

export default function ToggleTheme() {
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
        <DropdownMenuTrigger asChild>
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
        <DropdownMenuContent className="min-w-32 mt-3">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <SunIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>تم روشن</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <MoonIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>تم تیره</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <MonitorIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>تم سیستم</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
