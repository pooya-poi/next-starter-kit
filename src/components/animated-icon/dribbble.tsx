'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const circleVariants: Variants = {
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

const DribbbleIcon = ({className}:{className?:string}) => {
  const circleControls = useAnimation();
  const path1Controls = useAnimation();
  const path2Controls = useAnimation();
  const path3Controls = useAnimation();

  const handleMouseEnter = ({className}:{className?:string}) => {
    circleControls.start('animate');
    path1Controls.start('animate');
    path2Controls.start('animate');
    path3Controls.start('animate');
  };

  const handleMouseLeave = ({className}:{className?:string}) => {
    circleControls.start('normal');
    path1Controls.start('normal');
    path2Controls.start('normal');
    path3Controls.start('normal');
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
        <m.circle
          variants={circleVariants}
          initial="normal"
          animate={circleControls}
          cx="12"
          cy="12"
          r="10"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={path1Controls}
          d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={path2Controls}
          d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={path3Controls}
          d="M8.56 2.75c4.37 6 6 9.42 8 17.72"
        />
      </svg>
    </div>
  );
};

export { DribbbleIcon };
