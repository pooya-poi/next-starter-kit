'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcgMTJINyIgLz4KICA8cGF0aCBkPSJNMTkgMThINSIgLz4KICA8cGF0aCBkPSJNMjEgNkgzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/align-center
 */
const AlignCenterIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
    className={`cursor-pointer select-none p-2  rounded-md transition-colors duration-200 flex items-center justify-center ${className}`}
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
       initial="normal"
        d="M17 12H7"
        variants={{
          normal: { translateX: 0 },
          animate: {
            translateX: [0, 3, -3, 2, -2, 0],
            transition: {
              ease: 'linear',
              translateX: {
                duration: 1,
              },
            },
          },
        }}
       
      />
      <path d="M19 18H5" />
      <path d="M21 6H3" />
    </svg>
  </div>
  );
};

export { AlignCenterIcon };
