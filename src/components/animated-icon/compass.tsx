'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const CompassIcon = () => {
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
        <circle cx="12" cy="12" r="10" />
        <m.polygon
          points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
          variants={{
            normal: {
              rotate: 0,
            },
            animate: {
              rotate: 360,
            },
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
          }}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { CompassIcon };
