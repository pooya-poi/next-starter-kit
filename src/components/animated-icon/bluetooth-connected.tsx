'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const pathVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1, 0.5, 1],
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const BluetoothConnectedIcon = ({className}:{className?:string}) => {
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
          d="m7 7 10 10-5 5V2l5 5L7 17"
        />
        <m.line
          variants={{
            normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
              transition: {
                duration: 0.4,
              },
            },
          }}
          animate={controls}
          x1="18"
          x2="21"
          y1="12"
          y2="12"
        />
        <m.line
          variants={{
            normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [-1, 0],
              transition: {
                duration: 0.2,
              },
            },
          }}
          animate={controls}
          x1="3"
          x2="6"
          y1="12"
          y2="12"
        />
      </svg>
    </div>
  );
};

export { BluetoothConnectedIcon };
