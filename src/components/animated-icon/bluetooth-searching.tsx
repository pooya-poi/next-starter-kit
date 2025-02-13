'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const pathVariants: Variants = {
  normal: {
    scale: 1,
    transition: {
      repeat: 0,
    },
  },
  animate: {
    scale: [0, 1, 0.8],
  },
};

const secondVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: { repeat: Infinity },
  },
};

const BluetoothSearchingIcon = ({className}:{className?:string}) => {
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
          variants={secondVariants}
          animate={controls}
          initial="normal"
          d="m7 7 10 10-5 5V2l5 5L7 17"
        />
        <m.path
          variants={pathVariants}
          animate={controls}
          initial="normal"
          transition={{
            duration: 0.6,
            delay: 0.2,
            repeat: Infinity,
          }}
          d="M20.83 14.83a4 4 0 0 0 0-5.66"
        />
        <m.path
          variants={pathVariants}
          animate={controls}
          initial="normal"
          transition={{
            duration: 0.6,
            repeat: Infinity,
          }}
          d="M18 12h.01"
        />
      </svg>
    </div>
  );
};

export { BluetoothSearchingIcon };
