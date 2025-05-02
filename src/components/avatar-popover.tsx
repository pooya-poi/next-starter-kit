import {
  BoltIcon,
  BookOpenIcon,
  CircleUserRoundIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Setting } from '@pooya-poi/vectonents';

const AvatarPopover: React.FC = () => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="focus-visible:ring-ring/40 rounded-xl"
        >
          <CircleUserRoundIcon size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 ml-3 max-w-64">
        <DropdownMenuLabel className="flex items-start gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/50752011?s=40&v=4"
            alt="Avatar"
            width={32}
            height={32}
            className="shrink-0 rounded-full"
          />
          <div className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-sm font-medium">
              پویا قربانی
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              pooya585@gmail.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Setting variants="outlined" />
            <span>تنظیمات</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Setting variants="outlined" />
            <span>پیام ها</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Setting variants="outlined" />
            <span>تنظیمات</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>تنظیمات</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPenIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>تنظیمات</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-destructive">
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>خروج از حساب</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

AvatarPopover.displayName = 'pageComponents';
export default AvatarPopover;
