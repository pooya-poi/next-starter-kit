'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect } from 'react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 14,
  mass: 1,
};

const LayersIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  const handleMouseEnter = async () => {
    await controls.start('firstState');
    await controls.start('secondState');
  };

  const handleMouseLeave = ({className}:{className?:string}) => {
    controls.start('normal');
  };

  useEffect(() => {
    controls.start('normal');
  }, [controls]);

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
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <m.path
          d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
          variants={{
            normal: { y: 0 },
            firstState: { y: -9 },
            secondState: { y: 0 },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
        />
        <m.path
          d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
          variants={{
            normal: { y: 0 },
            firstState: { y: -5 },
            secondState: { y: 0 },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
        />
      </svg>
    </div>
  );
};

export { LayersIcon };
