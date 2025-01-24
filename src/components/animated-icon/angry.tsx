'use client';


import { useAnimation, type Variants } from 'motion/react';
import * as m from 'motion/react-m';

const EYEBROW_ROTATION = 20;
const DURATION = 0.6;

const pathVariantsFace: Variants = {
  normal: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.2, 1.2, 1.2, 1],
    rotate: [0, -3, 3, -1, 1, 0],
    transition: {
      duration: DURATION,
      times: [0, 0.2, 0.4, 0.6, 1],
      ease: 'easeInOut',
    },
  },
};

const pathVariantsLeftEyebrow: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, EYEBROW_ROTATION, 0],
    transition: {
      duration: DURATION + 0.2,
    },
  },
};

const pathVariantsRightEyebrow: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -EYEBROW_ROTATION, 0],
    transition: {
      duration: DURATION + 0.2,
    },
  },
};

const pathVariantsEye: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: DURATION,
    },
  },
};

const pathVariantsMouth: Variants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -0.5, 0],
    transition: {
      duration: DURATION,
    },
  },
};

const AngryIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
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
        animate={controls}
        variants={pathVariantsFace}
      >
        <circle cx="12" cy="12" r="10" />
        <m.path
          variants={pathVariantsMouth}
          animate={controls}
          d="M16 16s-1.5-2-4-2-4 2-4 2"
        />
        <m.path
          variants={pathVariantsLeftEyebrow}
          animate={controls}
          d="M7.5 8 10 9"
        />
        <m.path
          variants={pathVariantsRightEyebrow}
          animate={controls}
          d="m14 9 2.5-1"
        />
        <m.path variants={pathVariantsEye} animate={controls} d="M9 10h.01" />
        <m.path variants={pathVariantsEye} animate={controls} d="M15 10h.01" />
      </m.svg>
    </div>
  );
};

export { AngryIcon };
