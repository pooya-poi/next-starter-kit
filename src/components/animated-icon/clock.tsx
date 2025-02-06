'use client';

import { useAnimation, type Variants, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const handTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '50%',
    originY: '50%',
  },
  animate: {
    rotate: 360,
  },
};

const minuteHandTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const minuteHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '50%',
    originY: '50%',
  },
  animate: {
    rotate: 45,
  },
};

const ClockIcon = ({className}:{className?:string}) => {
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
        <circle cx="12" cy="12" r="10" />
        <m.line
          x1="12"
          y1="12"
          x2="12"
          y2="6"
          variants={handVariants}
          animate={controls}
          initial="normal"
          transition={handTransition}
        />
        <m.line
          x1="12"
          y1="12"
          x2="16"
          y2="12"
          variants={minuteHandVariants}
          animate={controls}
          initial="normal"
          transition={minuteHandTransition}
        />
      </svg>
    </div>
  );
};

export { ClockIcon };
