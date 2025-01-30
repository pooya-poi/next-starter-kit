'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartColumnDecreasingIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start(i => ({
      pathLength: 0,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
    await controls.start(i => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }));
  };

  const handleHoverEnd = ({className}:{className?:string}) => {
    controls.start('visible');
  };

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
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
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M13 17V9"
        />
        <m.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M18 17v-3"
        />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <m.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M8 17V5"
        />
      </svg>
    </div>
  );
};

export { ChartColumnDecreasingIcon };
