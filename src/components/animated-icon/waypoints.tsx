'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.15 * custom,
      opacity: { delay: 0.1 * custom },
    },
  }),
};

const WaypointsIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
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
        <m.circle
          cx="12"
          cy="4.5"
          r="2.5"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <m.path
          d="m10.2 6.3-3.9 3.9"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <m.circle
          cx="4.5"
          cy="12"
          r="2.5"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <m.path
          d="M7 12h10"
          variants={variants}
          animate={controls}
          custom={2}
        />
        <m.circle
          cx="19.5"
          cy="12"
          r="2.5"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <m.path
          d="m13.8 17.7 3.9-3.9"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <m.circle
          cx="12"
          cy="19.5"
          r="2.5"
          variants={variants}
          animate={controls}
          custom={0}
        />
      </svg>
    </div>
  );
};

export { WaypointsIcon };
