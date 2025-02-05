'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const AlignHorizontalIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
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
        <m.rect
          variants={{
            normal: { scaleX: 1 },
            animate: { scaleX: 0.85 },
          }}
          animate={controls}
          transition={defaultTransition}
          width="6"
          height="10"
          x="9"
          y="7"
          rx="2"
        />
        <m.path
          d="M4 22V2"
          variants={{
            normal: { translateX: 0, scaleY: 1 },
            animate: {
              translateX: 2,
              scaleY: 0.9,
            },
          }}
          animate={controls}
          transition={defaultTransition}
          initial="normal"
        />
        <m.path
          d="M20 22V2"
          variants={{
            normal: { translateX: 0, scaleY: 1 },
            animate: {
              translateX: -2,
              scaleY: 0.9,
            },
          }}
          animate={controls}
          transition={defaultTransition}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { AlignHorizontalIcon };
