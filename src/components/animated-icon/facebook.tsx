'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const facebookVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const FacebookIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
      onMouseEnter={() => {
        controls.start('animate');
      }}
      onMouseLeave={() => {
        controls.start('normal');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <m.path
          variants={facebookVariants}
          animate={controls}
          initial="normal"
          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        />
      </svg>
    </div>
  );
};

export { FacebookIcon };
