'use client';

import { useAnimation, type Variants, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const swapTransition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
};

const swapVariants: Variants = {
  normal: {
    translateY: 0,
  },
  animate: (custom: number) => ({
    translateY: custom * 10,
  }),
};

const ArrowDownZAIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
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
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <m.path
          d="M15 4h5l-5 6h5"
          variants={swapVariants}
          initial="normal"
          animate={controls}
          custom={1}
          transition={swapTransition}
        />
        <m.g
          variants={swapVariants}
          initial="normal"
          animate={controls}
          custom={-1}
          transition={swapTransition}
        >
          <path d="M20 18h-5" />
          <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
        </m.g>
      </svg>
    </div>
  );
};

export { ArrowDownZAIcon };
