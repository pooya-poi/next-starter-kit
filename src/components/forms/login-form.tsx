import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useId } from 'react';
import { Github } from '@pooya-poi/vectonents';
import GoogleColorfull from '@/components/svg-icon/google-colorfull';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const id = useId();
  return (
    <form
      action={'/dashboard'}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-lg font-bold">ورود به حساب کاربری</h1>
      </div>
      <div className="grid gap-6">
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>ایمیل</Label>
          <Input
            id={id}
            placeholder=""
            type="email"
            required
            className="rounded-lg"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">رمز عبور</Label>
          <Input id="password" type="password" required />
          <a
            href="#"
            className="ml-auto text-xs underline-offset-4 hover:underline"
          >
            رمز عبور را فراموش کرده‌اید؟
          </a>
        </div>
        <Button type="submit" className="w-full">
          ورود
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-muted text-muted-foreground relative z-10 px-2">
            یا ورود با
          </span>
        </div>
        <div className="flex justify-center gap-x-10">
          <Button
            variant="outline"
            className="text-xs"
            size={'lg'}
            rounded="xl"
          >
            <GoogleColorfull />
            ورود با گوگل
          </Button>
          <Button
            variant="outline"
            className="text-xs"
            size={'lg'}
            rounded="xl"
          >
            <Github />
            ورود با گیتهاب
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        حساب کاربری ندارید؟{' '}
        <a href="#" className="underline underline-offset-4">
          ثبت نام کنید
        </a>
      </div>
    </form>
  );
}
