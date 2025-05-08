const DotIndicator: React.FC = () => (
  <span className="absolute top-1/2 -right-2 flex size-2 -translate-y-1/2">
    <span className="bg-background absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
    <span className="bg-primary relative inline-flex size-1.5 rounded-full" />
  </span>
);

DotIndicator.displayName = 'DotIndicator';
export default DotIndicator;
