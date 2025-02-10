'use client'; // Required for client-side error handling

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>Something went wrong on the server.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}