'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.15 * custom,
      opacity: { delay: 0.1 * custom },
    },
  }),
};

const GitCommitVerticalIcon = () => {
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
        <m.path d="M12 3v6" variants={variants} animate={controls} custom={0} />
        <m.circle
          cx="12"
          cy="12"
          r="3"
          variants={variants}
          animate={controls}
          custom={1}
        />
        <m.path
          d="M12 15v6"
          variants={variants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
};

export { GitCommitVerticalIcon };
