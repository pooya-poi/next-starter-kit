'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const pathVariants: Variants = {
  normal: {
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
      duration: 0.5,
    },
  },
  animate: {
    rotate: 180,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 80,
      damping: 13,
    },
  },
};

const BadgePercentIcon = () => {
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
        <m.path
          variants={pathVariants}
          animate={controls}
          initial="normal"
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        />
        <path d="m15 9-6 6" />
        <path d="M9 9h.01" />
        <path d="M15 15h.01" />
      </svg>
    </div>
  );
};

export { BadgePercentIcon };
