'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const lineVariants: Variants = {
  normal: { opacity: 1 },
  hover: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const TerminalIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
      onMouseEnter={() => controls.start('hover')}
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
        <polyline points="4 17 10 11 4 5" />
        <m.line
          x1="12"
          x2="20"
          y1="19"
          y2="19"
          variants={lineVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { TerminalIcon };
