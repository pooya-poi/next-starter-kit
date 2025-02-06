'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';
import { useCallback } from 'react';

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ScanTextIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  const handleHoverStart = useCallback(async () => {
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
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
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
        <m.path variants={frameVariants} d="M3 7V5a2 2 0 0 1 2-2h2" />
        <m.path variants={frameVariants} d="M17 3h2a2 2 0 0 1 2 2v2" />
        <m.path variants={frameVariants} d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <m.path variants={frameVariants} d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <m.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={0}
          d="M7 8h8"
        />
        <m.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={1}
          d="M7 12h10"
        />
        <m.path
          variants={lineVariants}
          initial="visible"
          animate={controls}
          custom={2}
          d="M7 16h6"
        />
      </svg>
    </div>
  );
};

export { ScanTextIcon };
