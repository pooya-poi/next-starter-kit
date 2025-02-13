'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

// const svgVariants = {
//   hidden: {
//     rotate: 0,
//     opacity: 1,
//   },
//   visible: {
//     opacity: 1,
//     rotate: 0,
//     transition: {
//       duration: 1,
//     },
//     // x: [10, 3, -3, 3, 0],
//     x: [5, 0,0,0,0],
//     y: [5, -1, 2, 0, 0],
//   },
// };

const svgVariants = {
  hidden: {
    opacity: 1, // Start invisible
    rotate: 0,
    pathLength: 1,
    pathOffset: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    pathOffset: [1, 0],
    rotate: [0, -10, 10, -10, 0],
    transition: {
        duration: 0.6,
        ease: 'linear',
        opacity: { duration: 0.1 },
      },
  },
};

const TelegramIcon = ({ className }: { className?: string }) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center transition-colors duration-200 ${className}`}
      onMouseEnter={() => controls.start('visible')}
      onMouseLeave={() => controls.start('hidden')}
    >
      {/* <m.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
      >
        <m.path
          initial="hidden"
          animate={controls}
          // animate="visible"
          variants={squrePath}
          d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"
        />
        <m.path
          initial="hidden"
          animate={controls}
          // animate="visible"
          variants={checkVariant}
          d="m9 11 3 3L22 4"
        />
      </m.svg> */}

      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="hidden"
        animate={controls}
        variants={svgVariants}
      >
        <m.path initial="hidden" variants={svgVariants} animate={controls} d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <m.path initial="hidden" variants={svgVariants} animate={controls} d="m21.854 2.147-10.94 10.939" />
      </m.svg>
    </div>
  );
};

export { TelegramIcon };

//TODO: fix the animation
