'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const AlignVerticalIcon = ({className}:{className?:string}) => {
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
            normal: { scaleY: 1 },
            animate: { scaleY: 0.8 },
          }}
          animate={controls}
          initial="normal"
          width="10"
          height="6"
          x="7"
          y="9"
          rx="2"
          transition={defaultTransition}
        />
        <m.path
          variants={{
            normal: { translateY: 0, scaleX: 1 },
            animate: {
              translateY: -2,
              scaleX: 0.9,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          d="M22 20H2"
        />
        <m.path
          variants={{
            normal: { translateY: 0, scaleX: 1 },
            animate: {
              translateY: 2,
              scaleX: 0.9,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          d="M22 4H2"
        />
      </svg>
    </div>
  );
};

export { AlignVerticalIcon };
