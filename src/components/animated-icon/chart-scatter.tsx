'use client';

import { useAnimation,  Variants} from 'motion/react';
import * as m from 'motion/react-m';

const dotVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.3,
    },
  }),
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  default: { opacity: 1 },
};

const ChartScatterIcon = ({className}:{className?:string}) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start('hidden');
    await controls.start('visible');
  };

  const handleHoverEnd = async () => {
    await controls.start('default');
  };

  return (
    <div
      className={`flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200  ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
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
        initial="default"
        animate={controls}
      >
        <m.circle
          cx="7.5"
          cy="7.5"
          r=".5"
          variants={dotVariants}
          custom={0}
          fill="currentColor"
        />
        <m.circle
          cx="18.5"
          cy="5.5"
          r=".5"
          variants={dotVariants}
          custom={1}
          fill="currentColor"
        />
        <m.circle
          cx="11.5"
          cy="11.5"
          r=".5"
          variants={dotVariants}
          custom={2}
          fill="currentColor"
        />
        <m.circle
          cx="7.5"
          cy="16.5"
          r=".5"
          variants={dotVariants}
          custom={3}
          fill="currentColor"
        />
        <m.circle
          cx="17.5"
          cy="14.5"
          r=".5"
          variants={dotVariants}
          custom={4}
          fill="currentColor"
        />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" strokeWidth="2" />
      </m.svg>
    </div>
  );
};

export { ChartScatterIcon };
