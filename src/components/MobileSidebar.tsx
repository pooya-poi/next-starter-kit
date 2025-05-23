'use client';
import Link from 'next/link';
const sidebarItems = [
  { id: 1, name: 'خانه', href: '/dashboard/home' },
  { id: 2, name: 'تنظیمات', href: '/dashboard' },
  { id: 3, name: 'پروفایل', href: '#' },
  { id: 4, name: 'درباره ما', href: '#' },
];

interface MobileSidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const MobileSidebar = ({ isOpen, closeSidebar }: MobileSidebarProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-30 h-full w-80 bg-white transition-transform duration-300 ease-in-out dark:bg-slate-800 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <button className="bg-gray-400 p-5" onClick={closeSidebar}>
          x
        </button>
        <div className="p-4">
          {sidebarItems.map(item => (
            <Link
              key={item.id}
              href={item.href}
              className="block p-2 text-white"
              onClick={closeSidebar}
            >
              {item.name}
            </Link>
          ))}
          <button>test </button>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
