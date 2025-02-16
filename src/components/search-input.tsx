'use client';
import { Search } from 'lucide-react';
import { useId, useState } from 'react';
import * as m from 'motion/react-m';
import { useAnimation, type Variants } from 'motion/react';

const inputVariants: Variants = {
  initial: { width: '192px' },
  animate: {
    width: '280px',
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
};

const SearchInput: React.FC = () => {
  const controls = useAnimation();
  const [inputValue, setInputValue] = useState('');
  const id = useId();

  const handleFocus = () => controls.start('animate');
  const handleBlur = () => {
    if (!inputValue.trim()) controls.start('initial'); // Only shrink if input is empty
  };

  return (
    <div className="relative">
      <m.input
        variants={inputVariants}
        animate={controls}
        initial="initial"
        id={id}
        className="peer w-48 rounded-lg border-none bg-background py-2 pr-8 text-slate-900 outline-none focus:outline-slate-900 dark:focus:outline-white/20 focus:ring-0 focus-visible:ring-0 dark:text-white"
        placeholder="جستجو"
        type="search"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (e.target.value.trim()) {
            controls.start('animate'); // Keep expanded if not empty
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pe-3 pr-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Search size={16} strokeWidth={2} aria-hidden="true" />
      </div>
    </div>
  );
};

SearchInput.displayName = 'pageComponents';
export default SearchInput;
