'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const rectVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 0.8, 1],
    transition: { duration: 0.4 },
  },
};

const pathVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 0.9, 1],
  },
};

const SquareStackIcon = ({className}:{className?:string}) => {
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
          variants={pathVariants}
          animate={controls}
          initial="normal"
          transition={{
            delay: 0.3,
            duration: 0.4,
          }}
          d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
        />
        <m.path
          d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
          variants={pathVariants}
          animate={controls}
          initial="normal"
          transition={{
            delay: 0.2,
            duration: 0.2,
          }}
        />
        <m.rect
          variants={rectVariants}
          width="8"
          height="8"
          x="14"
          y="14"
          rx="2"
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { SquareStackIcon };
