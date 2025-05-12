import { cva } from 'class-variance-authority';

const dotVariants = cva('relative inline-flex size-1.5 rounded-full', {
  variants: {
    active: {
      true: 'bg-primary ',
      false: 'bg-muted ',
    },
  },
});
interface DotIndicatorProps {
  active?: boolean;
}
const DotIndicator: React.FC<DotIndicatorProps> = ({active}) => (
  <span className="absolute top-1/2 -right-2 flex size-2 -translate-y-1/2">
    <span className="bg-background absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
    {/* <span className="bg-primary relative inline-flex size-1.5 rounded-full" /> */}
    <span className={dotVariants({active:active})} />
  </span>
);

DotIndicator.displayName = 'DotIndicator';
export default DotIndicator;
