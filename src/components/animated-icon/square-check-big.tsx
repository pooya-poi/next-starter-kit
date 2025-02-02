'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

// const squareVariant: Variants = {
//   from: {
//     opacity: 0,
//   },
//   to: {
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: 'easeInOut',
//     },
//   },
// };
// const checkVariant: Variants = {
//   from: {
//     opacity: 0,
//   },
//   to: {
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: 'easeInOut',
//     },
//   },
// };
const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate:0,
    transition:{duration:1}
  }
};
const pathVariants = {
  hidden:{
    opacity:10,
    pathLength:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:2,
      ease:"easeInOut"
    }
  }
};

const SquareCheckBigIcon = ({ className }: { className?: string }) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 ${className}`}
        onMouseEnter={() => controls.start('visible')}
        onMouseLeave={() => controls.start('hidden')}
      // onMouseEnter={() => console.log('icon is logging')}
      // onMouseLeave={() => console.log('icon is logging')}
    >
     
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
        // class="lucide lucide-square-check-big"
        variants={svgVariants}
      >
        <m.path
          initial="hidden"
          animate={controls}
          variants={pathVariants}
          d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"
        />
        <m.path
          initial="hidden"
          animate={controls}
          variants={pathVariants}
          d="m9 11 3 3L22 4"
        />
      </m.svg>
    </div>
  );
};

export { SquareCheckBigIcon };
