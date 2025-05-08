'use client';

import { ReactNode, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import useMeasure from 'react-use-measure';

import { cn } from '@/lib/utils';
import { Button } from './button';

type Tab = {
  id: number;
  label: string;
  icon?: ReactNode | string;
  content: ReactNode;
};

interface OgImageSectionProps {
  tabs: Tab[];
  className?: string;
  rounded?: string;
  onChange?: () => void;
}

function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  onChange,
}: OgImageSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
    return activeTabContent || null;
  }, [activeTab, tabs]);

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      onChange ? onChange() : null;
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className={cn(
          'bg-secondary flex overflow-x-auto rounded-xl border border-none py-1',
          className,
          rounded
        )}
      >
        {tabs.map(tab => (
          <Button
            variant={'ghost'}
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'hover:text-background relative flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-medium transition focus-visible:ring-1 focus-visible:outline-1 focus-visible:outline-none sm:text-sm',
              activeTab === tab.id
                ? 'text-muted'
                : 'hover:text-primary text-muted-foreground',
              rounded
            )}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="bg-primary hover:text-background absolute inset-0 z-10 flex w-full items-center justify-center gap-x-1 rounded-xl font-light"
                transition={{ type: 'spring', bounce: 0.19, duration: 0.4 }}
              >
                {tab.icon}
                {tab.label}
              </motion.span>
            )}
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>
      {/* <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}> */}
      <motion.div
        className="relative mx-auto h-full w-full overflow-hidden"
        initial={false}
        animate={{ height: bounds.height }}
      >
        <div className="p-1" ref={ref}>
          <AnimatePresence
            custom={direction}
            mode="popLayout"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              custom={direction}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      {/* </MotionConfig> */}
    </div>
  );
}
export { DirectionAwareTabs };
