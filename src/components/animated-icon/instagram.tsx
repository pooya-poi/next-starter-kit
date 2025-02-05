'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const rectVariants: Variants = {
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

const pathVariants: Variants = {
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

const lineVariants: Variants = {
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

const InstagramIcon = ({className}:{className?:string}) => {
  const rectControls = useAnimation();
  const pathControls = useAnimation();
  const lineControls = useAnimation();

  const handleMouseEnter = ({className}:{className?:string}) => {
    rectControls.start('animate');
    pathControls.start('animate');
    lineControls.start('animate');
  };

  const handleMouseLeave = ({className}:{className?:string}) => {
    rectControls.start('normal');
    pathControls.start('normal');
    lineControls.start('normal');
  };

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          variants={rectVariants}
          initial="normal"
          animate={rectControls}
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={pathControls}
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        />
        <m.line
          variants={lineVariants}
          initial="normal"
          animate={lineControls}
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
        />
      </svg>
    </div>
  );
};

export { InstagramIcon };
