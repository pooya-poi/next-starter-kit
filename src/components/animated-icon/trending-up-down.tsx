'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const svgVariants: Variants = {
  animate: {
    x: 0,
    y: 0,
    translateX: [0, 2, 0],
    transition: {
      duration: 0.5,
    },
  },
};

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
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
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const arrowVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [0.5, 0],
    transition: {
      delay: 0.3,
      duration: 0.3,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const TrendingUpDownIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
        initial="normal"
        animate={controls}
      >
        <m.path
          d="M21 21 14.828 14.828"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <m.path
          d="M21 16v5h-5"
          variants={arrowVariants}
          initial="normal"
          animate={controls}
        />
        <m.path
          d="m21 3-9 9-4-4-6 6"
          variants={pathVariants}
          initial="normal"
          animate={controls}
        />
        <m.path
          d="M21 8V3h-5"
          variants={arrowVariants}
          initial="normal"
          animate={controls}
        />
      </m.svg>
    </div>
  );
};

export { TrendingUpDownIcon };
