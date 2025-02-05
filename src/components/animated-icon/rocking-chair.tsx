'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';
import type { Transition, Variants } from 'motion/react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const rockingVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [-5, 5, -5],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror' as const,
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const RockingChairIcon = ({className}:{className?:string}) => {
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
        variants={rockingVariants}
        animate={controls}
        style={{ originX: '10%', originY: '90%' }}
      >
        <m.polyline
          points="3.5 2 6.5 12.5 18 12.5"
          animate={controls}
          transition={defaultTransition}
        />
        <m.line
          x1="9.5"
          x2="5.5"
          y1="12.5"
          y2="20"
          animate={controls}
          transition={defaultTransition}
        />
        <m.line
          x1="15"
          x2="18.5"
          y1="12.5"
          y2="20"
          animate={controls}
          transition={defaultTransition}
        />
        <m.path
          d="M2.75 18a13 13 0 0 0 18.5 0"
          animate={controls}
          transition={defaultTransition}
        />
      </m.svg>
    </div>
  );
};

export { RockingChairIcon };
