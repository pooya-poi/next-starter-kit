'use client';

import { AnimatePresence, useAnimation } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect, useState } from 'react';

const keyboardPaths = [
  { id: 'key1', d: 'M10 8h.01' },
  { id: 'key2', d: 'M12 12h.01' },
  { id: 'key3', d: 'M14 8h.01' },
  { id: 'key4', d: 'M16 12h.01' },
  { id: 'key5', d: 'M18 8h.01' },
  { id: 'key6', d: 'M6 8h.01' },
  { id: 'key7', d: 'M7 16h10' },
  { id: 'key8', d: 'M8 12h.01' },
];

const KeyboardIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const animateKeys = async () => {
      if (isHovered) {
        await controls.start(i => ({
          opacity: [1, 0.2, 1],
          transition: {
            duration: 1.5,
            times: [0, 0.5, 1],
            delay: i * 0.2 * Math.random(),
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }));
      } else {
        controls.stop();
        controls.set({ opacity: 1 });
      }
    };

    animateKeys();
  }, [isHovered, controls]);

  return (
    <m.div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <AnimatePresence>
          {keyboardPaths.map((path, index) => (
            <m.path
              key={path.id}
              d={path.d}
              initial={{ opacity: 1 }}
              animate={controls}
              custom={index}
            />
          ))}
        </AnimatePresence>
      </svg>
    </m.div>
  );
};

export { KeyboardIcon };
