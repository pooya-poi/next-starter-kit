'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const DownvoteIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          normal: {
            translateX: '0px',
            translateY: '0px',
            rotate: '0deg',
          },
          animate: {
            translateX: '-1px',
            translateY: '2px',
            rotate: '-12deg',
          },
        }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
      >
        <path d="M17 14V2" />
        <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
      </m.svg>
    </div>
  );
};

export { DownvoteIcon };
