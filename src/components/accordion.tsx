'use client'
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
  FC,
} from 'react';
import { cn } from '@/lib/utils'; // optional: your clsx utility for Tailwind class merging

// Context to manage state
interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

// Accordion Root
interface AccordionProps {
  children: ReactNode;
  defaultOpenItems?: string[];
  className?: string;
}

export const Accordion: FC<AccordionProps> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
} = ({ children, defaultOpenItems = [], className }) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion Item
interface AccordionItemProps {
  children: ReactNode;
  value: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ children, value }) => {
  return <div data-value={value} className="border rounded-md">{children}</div>;
};

// Accordion Trigger
interface AccordionTriggerProps {
  children: ReactNode;
  value: string;
}

const AccordionTrigger: FC<AccordionTriggerProps> = ({ children, value }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');

  const isOpen = context.openItems.includes(value);

  return (
    <button
      onClick={() => context.toggleItem(value)}
      className="w-full flex justify-between items-center px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
    >
      {children}
      <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
    </button>
  );
};

// Accordion Content with smooth animation
interface AccordionContentProps {
  children: ReactNode;
  value: string;
}

const AccordionContent: FC<AccordionContentProps> = ({ children, value }) => {
  const context = useContext(AccordionContext);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  const isOpen = context?.openItems.includes(value);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div
      style={{
        maxHeight: height,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}
      className="px-4"
    >
      <div ref={ref} className="py-2 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
};

// Attach subcomponents to Accordion
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
