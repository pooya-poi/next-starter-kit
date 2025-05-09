import { GalleryVerticalEnd } from 'lucide-react';

import { LoginForm } from '@/components/login-form';
import Link from 'next/link';
import ToggleTheme from '@/components/toggle-theme';

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </Link>
          <ToggleTheme/>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-primary relative hidden lg:block">
        <img
        //   src="/placeholder.svg"
        //   src="/login-image.svg"
          src="/login.png"
          alt="Image"
        //   width={60}
        //   height={50}
        //   className="absolute h-full w-full m-auto  inset-0   "
        //   className="absolute h-full w-full m-auto  inset-0   "
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
