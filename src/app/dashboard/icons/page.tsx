import * as Icons from '@/components/animated-icon/index';

const Page: React.FC = () => (
  <div className="grid grid-cols-3 gap-4">
    {Object.entries(Icons).map(([iconName, IconComponent]) => (
      <span key={iconName} className="flex items-center gap-2 text-black">
        <IconComponent className="bg-yellow-300" />
        {iconName}
      </span>
    ))}
  </div>
);

Page.displayName = 'pageIcons';
export default Page;
