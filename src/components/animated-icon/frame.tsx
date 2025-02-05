'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const FrameIcon = ({className}:{className?:string}) => {
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
        <m.line
          variants={{
            animate: { translateY: -4 },
            normal: {
              translateX: 0,
              rotate: 0,
              translateY: 0,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          x1={22}
          x2={2}
          y1={6}
          y2={6}
        />
        <m.line
          variants={{
            animate: { translateY: 4 },
            normal: {
              translateX: 0,
              rotate: 0,
              translateY: 0,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          x1={22}
          x2={2}
          y1={18}
          y2={18}
        />
        <m.line
          variants={{
            animate: { translateX: -4 },
            normal: {
              translateX: 0,
              rotate: 0,
              translateY: 0,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          x1={6}
          x2={6}
          y1={2}
          y2={22}
        />
        <m.line
          variants={{
            animate: { translateX: 4 },
            normal: {
              translateX: 0,
              rotate: 0,
              translateY: 0,
            },
          }}
          animate={controls}
          initial="normal"
          transition={defaultTransition}
          x1={18}
          x2={18}
          y1={2}
          y2={22}
        />
      </svg>
    </div>
  );
};

export { FrameIcon };
