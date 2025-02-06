'use client';

import { useAnimation, type Transition, type Variants } from 'motion/react';
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

const ChromeIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
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
        <circle cx="12" cy="12" r="10" />
        <m.circle
          cx="12"
          cy="12"
          r="4"
          variants={variants}
          animate={controls}
          custom={0}
        />
        <m.line
          x1="21.17"
          x2="12"
          y1="8"
          y2="8"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <m.line
          x1="3.95"
          x2="8.54"
          y1="6.06"
          y2="14"
          variants={variants}
          animate={controls}
          custom={3}
        />
        <m.line
          x1="10.88"
          x2="15.46"
          y1="21.94"
          y2="14"
          variants={variants}
          animate={controls}
          custom={3}
        />
      </svg>
    </div>
  );
};

export { ChromeIcon };
