'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const iconVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: 1.05,
    rotate: [0, -7, 7, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: 'easeInOut',
      },
      scale: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

const MessageCircleIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center overflow-hidden rounded-md p-2 transition-colors duration-200 "
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
        variants={iconVariants}
        animate={controls}
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </m.svg>
    </div>
  );
};

export { MessageCircleIcon };
