'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.1,
      duration: 0.4,
      opacity: { duration: 0.1, delay: 0.1 },
    },
  },
};

const AttachFileIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
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
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M6 7.90909V16C6 19.3137 8.68629 22 12 22V22C15.3137 22 18 19.3137 18 16V6C18 3.79086 16.2091 2 14 2V2C11.7909 2 10 3.79086 10 6V15.1818C10 16.2864 10.8954 17.1818 12 17.1818V17.1818C13.1046 17.1818 14 16.2864 14 15.1818V8"
        />
      </svg>
    </div>
  );
};

export { AttachFileIcon };
