'use client';


import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const BookTextIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <m.svg
        animate={controls}
        variants={{
          animate: {
            scale: [1, 1.04, 1],
            rotate: [0, -8, 8, -8, 0],
            y: [0, -2, 0],
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
            },
          },
          normal: {
            scale: 1,
            rotate: 0,
            y: 0,
          },
        }}
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 11h8" />
        <path d="M8 7h6" />
      </m.svg>
    </div>
  );
};

export { BookTextIcon };
