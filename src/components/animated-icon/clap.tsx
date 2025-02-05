'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const variants: Variants = {
  normal: {
    rotate: 0,
    originX: '4px',
    originY: '20px',
  },
  animate: {
    rotate: [-10, -10, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.5, 1],
      ease: 'easeInOut',
    },
  },
};

const clapVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '3px',
    originY: '11px',
  },
  animate: {
    rotate: [0, -10, 16, 0],
    transition: {
      duration: 0.4,
      times: [0, 0.3, 0.6, 1],
      ease: 'easeInOut',
    },
  },
};

const ClapIcon = ({className}:{className?:string}) => {
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
        style={{ overflow: 'visible' }}
      >
        <m.g animate={controls} initial="normal" variants={variants}>
          <m.g animate={controls} initial="normal" variants={clapVariants}>
            <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
            <path d="m6.2 5.3 3.1 3.9" />
            <path d="m12.4 3.4 3.1 4" />
          </m.g>
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </m.g>
      </svg>
    </div>
  );
};

export { ClapIcon };
