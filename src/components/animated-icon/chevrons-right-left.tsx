'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const ChevronsRightLeftIcon = ({className}:{className?:string}) => {
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
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '-2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m20 17-5-5 5-5"
        />
        <m.path
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m4 17 5-5-5-5"
        />
      </svg>
    </div>
  );
};

export { ChevronsRightLeftIcon };
