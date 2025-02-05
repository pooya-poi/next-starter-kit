'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const DURATION = 0.3;

const calculateDelay = (i: number) => {
  if (i === 0) return 0.1;

  return i * DURATION + 0.1;
};

const GitPullRequestIcon = ({className}:{className?:string}) => {
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
        <m.circle
          cx="18"
          cy="18"
          r="3"
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
          animate={controls}
        />
        <m.circle
          cx="6"
          cy="6"
          r="3"
          transition={{
            duration: DURATION,
            delay: calculateDelay(2),
            opacity: { delay: calculateDelay(2) },
          }}
          variants={{
            normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
          animate={controls}
        />
        <m.path
          d="M13 6h3a2 2 0 0 1 2 2v7"
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
            },
          }}
          animate={controls}
        />
        <m.line
          x1="6"
          x2="6"
          y1="9"
          y2="21"
          transition={{
            duration: DURATION,
            delay: calculateDelay(3),
            opacity: { delay: calculateDelay(3) },
          }}
          variants={{
            normal: { opacity: 1, pathLength: 1, transition: { delay: 0 } },
            animate: {
              opacity: [0, 1],
              pathLength: [0, 1],
            },
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { GitPullRequestIcon };
