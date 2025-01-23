'use client';

import { useAnimation, type Transition } from 'motion/react';
import * as m from 'motion/react-m';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const ExpandIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
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
          d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '2px', translateY: '2px' },
          }}
          animate={controls}
          initial="normal"
        />
        <m.path
          d="M3 16.2V21m0 0h4.8M3 21l6-6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '-2px', translateY: '2px' },
          }}
          animate={controls}
          initial="normal"
        />
        <m.path
          d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '2px', translateY: '-2px' },
          }}
          animate={controls}
          initial="normal"
        />
        <m.path
          d="M3 7.8V3m0 0h4.8M3 3l6 6"
          transition={defaultTransition}
          variants={{
            normal: { translateX: '0%', translateY: '0%' },
            animate: { translateX: '-2px', translateY: '-2px' },
          }}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ExpandIcon };
