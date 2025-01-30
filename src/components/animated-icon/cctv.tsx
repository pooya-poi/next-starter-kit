'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const dotVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const cctvVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -15, 10, 0],
    originX: '9px',
    originY: '15px',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const CctvIcon = ({className}:{className?:string}) => {
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
        <m.g variants={cctvVariants} animate={controls} initial="normal">
          <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
          <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
          <m.path d="M7 9h.01" variants={dotVariants} animate={controls} initial="normal"/>
        </m.g>
        <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
        <path d="M2 21v-4" />
      </svg>
    </div>
  );
};

export { CctvIcon };
