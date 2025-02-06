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
      delay: 0.1 * custom,
      opacity: { delay: 0.1 * custom },
    },
  }),
};

const RollerCoasterIcon = ({className}:{className?:string}) => {
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
        <m.path d="M6 19V5" variants={variants} animate={controls} />
        <m.path d="M10 19V6.8" variants={variants} animate={controls} />
        <m.path d="M14 19v-7.8" variants={variants} animate={controls} />
        <m.path d="M18 5v4" variants={variants} animate={controls} />
        <m.path d="M18 19v-6" variants={variants} animate={controls} />
        <m.path d="M22 19V9" variants={variants} animate={controls} />
        <m.path
          d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
          variants={variants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { RollerCoasterIcon };
