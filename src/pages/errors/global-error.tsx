'use client'; // Required for client-side error handling

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h1>Global Error</h1>
        <p>Something went wrong globally.</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}