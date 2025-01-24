import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  itemCount?: number;
  shape?: "rectangle" | "circle";
  width?: number | string;
  height?: number | string;
  className?: string;
}
interface SkeletonProps {
  itemCount?: number;
  shape?: "rectangle" | "circle";
  width?: number | string;
  height?: number | string;
  className?: string;
}

const skeletonContainer = cva(" rounded-lg bg-transparent opacity-40");

const skeletonVariants = cva("overflow-hidden", {
  variants: {
    shape: {
      rectangle: "rounded-lg",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    shape: "rectangle",
  },
});

const shimmerAnimation = cva(
  "bg-gradient-to-r from-transparent via-slate-50/40 to-transparent " +
    "-translate-x-full animate-[shimmer_2s_infinite] relative overflow-hidden shadow-xl shadow-black/5 isolate " +
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r " +
    "before:from-transparent before:via-rose-100/10 before:to-transparent " +
    "before:rotate-45 before:transform-gpu before:scale-150 " +
    "before:border-t before:border-rose-100/10"
);

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  // itemCount = 3,
  // shape = "rectangle",
  // width = "100%",
  // height = 32,
  // className,
  itemCount = 3,
  shape,
  width,
  height,
  className,
}) => {
  return (
    <>
      {Array.from({ length: itemCount }, (_, i) => (
        <div key={i} className={skeletonContainer()}>
          <div
            className={cn(skeletonVariants({ shape }), className)}
            style={{
              width,
              height,
              backgroundColor: "rgba(108, 117, 125, 0.8)",
            }}
          >
            <div
              className={shimmerAnimation()}
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export const SkeletonLine: React.FC<SkeletonProps> = ({
  itemCount = 1,
  shape,
  width,
  height,
  className,
}) => {
  return (
    <>
      {Array.from({ length: itemCount }, (_, i) => (
        <div key={i}>
          <div
            className={cn(skeletonVariants({ shape }), className)}
            style={{
              width,
              height,
              backgroundColor: "rgba(108, 117, 125, 0.8)",
            }}
          >
            <div
              className={shimmerAnimation()}
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

SkeletonLoader.displayName = "SkeletonLoader";
const components = { SkeletonLoader, SkeletonLine };
export default components;
