'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';
const pathVariants: Variants = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -1.5,
    x: [-1, 1, -1, 1, -1, 0],
    transition: {
      y: {
        duration: 0.2,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 0.3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const secondaryPathVariants: Variants = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -2.5,
    x: [-2, 2, -2, 2, -2, 0],
    transition: {
      y: {
        duration: 0.2,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 0.3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSI4IiAvPgogIDxwYXRoIGQ9Ik01IDMgMiA2IiAvPgogIDxwYXRoIGQ9Im0yMiA2LTMtMyIgLz4KICA8cGF0aCBkPSJNNi4zOCAxOC43IDQgMjEiIC8+CiAgPHBhdGggZD0iTTE3LjY0IDE4LjY3IDIwIDIxIiAvPgogIDxwYXRoIGQ9Ik05IDEzaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/alarm-clock-minus
 */

const AlarmClockIcon = () => {
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
        style={{ overflow: 'visible' }}
      >
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M18 20.5L19.5 22"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M6 20.5L4.5 22"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
        />
        <m.path
          variants={pathVariants}
          initial="normal"
          animate={controls}
          d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
        />
        <m.path
          variants={secondaryPathVariants}
          initial="normal"
          animate={controls}
          d="M18 2L21.747 5.31064"
        />
        <m.path
          variants={secondaryPathVariants}
          initial="normal"
          animate={controls}
          d="M6 2L2.25304 5.31064"
        />
      </svg>
    </div>
  );
};

export { AlarmClockIcon };
