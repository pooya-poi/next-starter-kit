import { GalleryVerticalEnd } from 'lucide-react';

import SignupForm from '@/components/forms/signup-form';
import Link from 'next/link';
import ToggleTheme from '@/components/toggle-theme';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      {/* <ToggleTheme
        className="sticky  top-5 left-10 z-30"
        contentClassName="mt-0 ml-3"
      /> */}
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex h-screen flex-col gap-4 overflow-y-auto p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              داشبورد مدیریتی
            </Link>
          </div>

          <SignupForm />
        </div>
        <div className="bg-primary relative hidden lg:block">
          <Image
            src="/login-transparent.webp"
            alt="Image"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
