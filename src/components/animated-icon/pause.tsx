'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const baseRectVariants: Variants = {
  normal: {
    y: 0,
  },
};

const baseRectTransition = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

const leftRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 2, 0, 0],
    ...baseRectTransition,
  },
};

const rightRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 0, 2, 0],
    ...baseRectTransition,
  },
};

const PauseIcon = ({className}:{className?:string}) => {
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
        <m.rect
          x="6"
          y="4"
          width="4"
          height="16"
          rx="1"
          variants={leftRectVariants}
          animate={controls}
          initial="normal"
        />
        <m.rect
          x="14"
          y="4"
          width="4"
          height="16"
          rx="1"
          variants={rightRectVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { PauseIcon };
