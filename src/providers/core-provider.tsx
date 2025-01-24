"use client";

import type { ReadonlyChildrenFC } from "@/types/components";

// Import motion animation features from the "motion/react" library
import { domAnimation, LazyMotion } from "motion/react";

// Check if the environment is production
const isProduction = process.env.NODE_ENV === "production";

// Disable console logging methods in production to improve performance and minimize unnecessary log output
if (isProduction) {
  ["log", "warn", "error", "info", "debug", "trace", "table"].forEach(
    (method) => Object.defineProperty(console, method, { value: () => {} })
  );
}

/**
 * `CoreProvider` is a React component that provides an environment for
 * rendering children with optimized motion animations, leveraging the
 * `LazyMotion` component from the `motion/react` library.
 *
 * This component disables console logging methods (e.g., `console.log`, `console.warn`)
 * in production environments to minimize unnecessary log output and improve performance.
 */
const CoreProvider: ReadonlyChildrenFC = ({ children }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export default CoreProvider;
