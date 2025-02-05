'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    opacity: [0, 0, 1, 1, 1],
    pathLength: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
    transition: {
      opacity: { duration: 0.5 },
      pathLength: {
        duration: 2,
      },
    },
  },
};

const FingerprintIcon = ({className}:{className?:string}) => {
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
        <path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M2 12a10 10 0 0 1 18-6"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M2 12a10 10 0 0 1 18-6"
          variants={pathVariants}
          animate={controls}
        />

        <path d="M2 16h.01" strokeOpacity={0.4} strokeWidth="2" fill="none" />
        <m.path d="M2 16h.01" variants={pathVariants} animate={controls} />

        <path
          d="M21.8 16c.2-2 .131-5.354 0-6"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M21.8 16c.2-2 .131-5.354 0-6"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M8.65 22c.21-.66.45-1.32.57-2"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M8.65 22c.21-.66.45-1.32.57-2"
          variants={pathVariants}
          animate={controls}
        />

        <path
          d="M9 6.8a6 6 0 0 1 9 5.2v2"
          strokeOpacity={0.4}
          strokeWidth="2"
          fill="none"
        />
        <m.path
          d="M9 6.8a6 6 0 0 1 9 5.2v2"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { FingerprintIcon };
