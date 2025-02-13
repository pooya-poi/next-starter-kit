'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// export default function NotFound() {
const NotFound = () => {
  const router = useRouter();

  return (
    <main
      dir="rtl"
      className="flex h-screen items-center justify-center overflow-hidden bg-background"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 py-10 text-gray-800 shadow-2xl shadow-slate-400/50 lg:h-2/3 lg:w-3/4">
        {/* Title Section */}
        {/* <div className="mb-8"> */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold md:text-7xl">
            乁⁠(⁠ ⁠•⁠_⁠•⁠ ⁠)⁠ㄏ
          </span>
          <h1 className="text-center text-6xl font-black md:text-9xl">
            Error 404
          </h1>
        </div>

        <p className="mt-4 text-center text-2xl">صفحه مورد نظر پیدا نشد!</p>
        {/* </div> */}
        {/* Action Section */}
        <div className="text-center">
          <p className="mb-4 text-lg">
            ممکن است آدرس را اشتباه وارد کرده یا صفحه مورد نظر حذف شده باشد.
            می‌توانید از طریق دکمه زیر به صفحه اصلی بازگردید.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => router.back()}
            className="inline-block rounded-xl  px-6 font-semibold text-white transition duration-200 hover:-translate-y-1 "
          >
            بازگشت به صفحه قبلی
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
