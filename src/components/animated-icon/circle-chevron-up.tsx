'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  times: [0, 0.4, 1],
  duration: 0.5,
};

const CircleChevronUpIcon = ({className}:{className?:string}) => {
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
        <m.path
          variants={{
            normal: { y: 0 },
            animate: {
              y: [0, -2, 0],
            },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m8 14 4-4 4 4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronUpIcon };
