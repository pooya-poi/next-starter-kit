'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const FileStackIcon = ({className}:{className?:string}) => {
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
          d="M21 7h-3a2 2 0 0 1-2-2V2"
          variants={{
            normal: { translateX: 0, translateY: 0 },
            animate: { translateX: -4, translateY: 4 },
          }}
          animate={controls}
          initial="normal"
        />
        <m.path
          d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
          variants={{
            normal: { translateX: 0, translateY: 0 },
            animate: { translateX: -4, translateY: 4 },
          }}
          animate={controls}
          initial="normal"
        />
        <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
        <m.path
          d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
          variants={{
            normal: { translateX: 0, translateY: 0 },
            animate: { translateX: 4, translateY: -4 },
          }}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { FileStackIcon };
