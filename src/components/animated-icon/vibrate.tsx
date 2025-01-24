'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const rectVariants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.4,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

const VibrateIcon = () => {
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
        <path d="m2 8 2 2-2 2 2 2-2 2" />
        <path d="m22 8-2 2 2 2-2 2 2 2" />
        <m.rect
          width="8"
          height="14"
          x="8"
          y="5"
          rx="1"
          variants={rectVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { VibrateIcon };
