'use client';

import { useAnimation, type Variants, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const transition: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const TrainTrackIcon = () => {
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
        <path d="M2 17 17 2" />
        <m.path
          d="m2 14 8 8"
          variants={variants}
          animate={controls}
          custom={4}
        />
        <m.path
          d="m5 11 8 8"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <m.path
          d="m8 8 8 8"
          variants={variants}
          animate={controls}
          custom={2}
        />
        <m.path
          d="m11 5 8 8"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <m.path
          d="m14 2 8 8"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <path d="M7 22 22 7" />
      </svg>
    </div>
  );
};

export { TrainTrackIcon };
