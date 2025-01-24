'use client';

import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const scopeVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '12px',
    originY: '13px',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  animate: {
    rotate: -15,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const TelescopeIcon = () => {
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
      >
        <m.g variants={scopeVariants} animate={controls} initial="normal">
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
          <path d="m13.56 11.747 4.332-.924" />
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
          <path d="m13.56 11.747 4.332-.924" />
          <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
          <path d="m6.158 8.633 1.114 4.456" />
        </m.g>
        <path d="m16 21-3.105-6.21" />
        <path d="m8 21 3.105-6.21" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    </div>
  );
};

export { TelescopeIcon };
