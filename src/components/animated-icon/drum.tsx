'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const variants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: (custom: number) => ({
    rotate: custom === 1 ? [-10, 10, 0] : [10, -10, 0],
    transition: {
      delay: 0.1 * custom,
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.5,
    },
  }),
};

const DrumIcon = ({className}:{className?:string}) => {
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
        <m.path
          d="m2 2 8 8"
          variants={variants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <m.path
          d="m22 2-8 8"
          variants={variants}
          animate={controls}
          initial="normal"
          custom={2}
        />
        <ellipse cx="12" cy="9" rx="10" ry="5" />
        <path d="M7 13.4v7.9" />
        <path d="M12 14v8" />
        <path d="M17 13.4v7.9" />
        <path d="M2 9v8a10 5 0 0 0 20 0V9" />
      </svg>
    </div>
  );
};

export { DrumIcon };
