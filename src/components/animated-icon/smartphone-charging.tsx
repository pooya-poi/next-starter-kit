'use client';

import { useAnimation, } from 'motion/react';
import * as m from 'motion/react-m';

const SmartphoneChargingIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center  transition-colors duration-200  ${className}`}
      onMouseEnter={() => {
        controls.start('animate');
      }}
      onMouseLeave={() => {
        controls.start('normal');
      }}
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
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <m.path
          d="M12.667 8 10 12h4l-2.667 4"
          variants={{
            normal: { opacity: 1 },
            animate: {
              opacity: [1, 0.4, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            },
          }}
          initial="normal"
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { SmartphoneChargingIcon };
