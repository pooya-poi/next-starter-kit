import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import LogoutIcon from './svg-icon/logout-icon';

const AvatarPopover: React.FC = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Avatar className="rounded-xl">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/50752011?s=40&v=4"
          alt="Kelly King"
        />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
    </PopoverTrigger>
    <PopoverContent className="mx-1 mt-3 w-44 p-1 md:mx-3">
      <div
        dir="auto"
        className="flex items-baseline justify-between gap-4 px-3 py-2"
      >
        <div className="text-sm font-semibold">سلام پویا 👋</div>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="-mx-1 my-1 h-px bg-border"
      ></div>
      <div className="flex flex-col items-end">
        <Link
          className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
          href="#"
        >
          پروفایل
        </Link>
        <Link
          className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
          href="#"
        >
          پیام‌ها
        </Link>
        <Link
          className="w-full rounded-lg px-2 py-3 text-right text-slate-800 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800"
          href="#"
        >
          راهنما
        </Link>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="-mx-1 my-1 h-px bg-border"
      ></div>
      <div className="flex justify-end">
        <Button className="" rounded="lg" variant={'destructive'} size={'sm'}>
          خروج
          <LogoutIcon variants="outline" className="size-6" />
        </Button>
      </div>
    </PopoverContent>
  </Popover>
);

AvatarPopover.displayName = 'pageComponents';
export default AvatarPopover;
