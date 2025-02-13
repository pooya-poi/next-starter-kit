'use client';
import { Button } from '@/components/ui/button';

// Required for client-side error handling

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
}) {
  // Extract the status code from the error object or its message
  const statusCode =
    error.statusCode ||
    (error.message.match(/\d+/)
      ? Number(error.message.match(/\d+/)?.[0])
      : 500);

  return (
    // <div>
    //   <h1>{statusCode} - {statusCode === 404 ? 'Not Found' : 'Internal Server Error'}</h1>
    //   <p>Something went wrong.</p>
    //   <button onClick={() => reset()}>Try again</button>
    // </div>

    <main className="flex h-screen items-center justify-center overflow-hidden bg-background">
      <div className="flex h-full w-full  flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 py-10 text-gray-800 shadow-2xl shadow-slate-400/50 lg:h-2/3 lg:w-3/4">
        {/* Title Section */}
        {/* <div className="mb-8"> */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold md:text-7xl">
            乁⁠(⁠ ⁠•⁠_⁠•⁠ ⁠)⁠ㄏ
          </span>
          <h1 className="text-center text-6xl font-black md:text-9xl">
            Error {statusCode}!
          </h1>
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
