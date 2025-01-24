'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const variants: Variants = {
  normal: { opacity: 1 },
  animate: (custom: number) => ({
    opacity: [0, 1],
    transition: {
      delay: custom,
      duration: 0.5,
    },
  }),
};

const CastIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => {
        controls.start('animate');
      }}
      onMouseLeave={() => {
        controls.start('normal');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
        <m.path
          variants={variants}
          animate={controls}
          custom={0.2}
          d="M2 12a9 9 0 0 1 8 8"
        />
        <m.path
          variants={variants}
          animate={controls}
          custom={0.1}
          d="M2 16a5 5 0 0 1 4 4"
        />
        <m.line
          variants={variants}
          custom={0}
          animate={controls}
          x1="2"
          x2="2.01"
          y1="20"
          y2="20"
        />
      </svg>
    </div>
  );
};

export { CastIcon };
