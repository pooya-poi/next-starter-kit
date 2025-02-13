'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-background">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 py-10 text-gray-800 shadow-2xl shadow-slate-400/50 lg:h-1/2 lg:w-2/4">
        {/* Title Section */}
        {/* <div className="mb-8"> */}
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-7xl font-bold">乁⁠(⁠ ⁠•⁠_⁠•⁠ ⁠)⁠ㄏ</span>
          <h1 className="text-center text-6xl md:text-9xl font-black">Error 404 </h1>
        </div>

        <p className="mt-4 text-center text-2xl">Oops! Page not found.</p>
        {/* </div> */}
        {/* Action Section */}
        <div className="text-center">
          <p className="mb-4 text-lg">
            The page you're looking for doesn't exist. Let's get you back on
            track!
          </p>

          <Button
            onClick={() => router.back()}
            className="inline-block rounded bg-blue-500 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-blue-600"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
