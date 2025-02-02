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
const checkVariant = {
  hidden:{
    opacity:0,
    pathLength:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:1.2,
      ease:"easeInOut"
    }
  }
};

const squrePath = {
  hidden:{
    opacity:.2,
    pathLength:1,
    rotate:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    rotate:360,
    transition:{
   
    repeat: Infinity,
    repeatType: "mirror",
    duration: 2
  
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
      </m.svg>
    </div>
  );
};

export { SquareCheckBigIcon };
