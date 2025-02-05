'use client';
import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const SPEED_LINES = [
  { x1: 5, y1: 15, x2: 1, y2: 19, delay: 0.1 },
  { x1: 7, y1: 17, x2: 3, y2: 21, delay: 0.2 },
  { x1: 9, y1: 19, x2: 5, y2: 23, delay: 0.3 },
];

/**
 * @preview ![img] (data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxN0g0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtMSIgLz4KICA8cGF0aCBkPSJtMTIgMTUgNSA2SDdaIiAvPgo8L3N2Zz4K)
 */
const AirplaneIcon = ({className}:{className?:string}) => {
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
        <m.path
          animate={controls}
          transition={{
            duration: 0.5,
            times: [0, 0.6, 1],
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          variants={{
            normal: { x: 0, y: 0, scale: 1 },
            animate: {
              x: [0, 5, 3],
              y: [0, -5, -3],
              scale: 0.8,
            },
          }}
          d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        />
        {SPEED_LINES.map((line, index) => (
          <m.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 1, pathSpacing: 1 }}
            variants={{
              normal: {
                pathOffset: [0, 1],
                translateX: -3,
                translateY: 3,
                opacity: 0,
                transition: {
                  duration: 0.3,
                  times: [0, 0.6, 1],
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                },
              },
              animate: {
                pathOffset: [1, 2],
                translateX: [0, 0],
                translateY: [0, 0],
                opacity: 1,
              },
            }}
            transition={{ duration: 0.15, delay: line.delay }}
            animate={controls}
          />
        ))}
      </svg>
    </div>
  );
};

export { AirplaneIcon };
