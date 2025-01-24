'use client';

import { useAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const WifiIcon = () => {
  const controls = useAnimation();

  const wifiLevels = [
    { d: 'M12 20h.01', initialOpacity: 1, delay: 0 },
    { d: 'M8.5 16.429a5 5 0 0 1 7 0', initialOpacity: 1, delay: 0.1 },
    { d: 'M5 12.859a10 10 0 0 1 14 0', initialOpacity: 1, delay: 0.2 },
    { d: 'M2 8.82a15 15 0 0 1 20 0', initialOpacity: 1, delay: 0.3 },
  ];

  const handleHover = async () => {
    await controls.start('fadeOut');
    controls.start('fadeIn');
  };

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={handleHover}
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
        {wifiLevels.map((level, index) => (
          <m.path
            key={index}
            d={level.d}
            initial={{ opacity: level.initialOpacity }}
            animate={controls}
            variants={{
              fadeOut: {
                opacity: index === 0 ? 1 : 0,
                transition: { duration: 0.2 },
              },
              fadeIn: {
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: level.delay,
                },
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export { WifiIcon };
