'use client';

import { useAnimation, type Variants, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const gVariants: Variants = {
  normal: { rotate: 0 }, // if you want to start from a different angle, change this value or remove it entirely
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 50,
  damping: 10,
};

const LoaderPinwheelIcon = () => {
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
        <m.g
          transition={defaultTransition}
          variants={gVariants}
          animate={controls}
          initial="normal"
        >
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
        </m.g>
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
};

export { LoaderPinwheelIcon };
