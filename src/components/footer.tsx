import Link from 'next/link';
import * as Icons from '@/components/animated-icon/index';

const Footer: React.FC = () => {
  const currentYear = new Date().toLocaleDateString('fa-IR', {
    year: 'numeric',
  });
  return (
    <footer className="flex items-center justify-between rounded-lg bg-white px-5 py-2 text-xs font-light text-gray-500 dark:bg-slate-800">
      <p>حقوق این سایت متعلق به شرکت فلان می‌باشد &copy; {currentYear}</p>
      <span className="flex flex-row-reverse items-center gap-x-4">
        <Link href="/instagram" className="">
          <Icons.Instagram className="size-5 p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
        </Link>
        <Link href="/instagram" className="">
          <Icons.Facebook className="size-5 p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
        </Link>
        <Link href="/instagram" className="">
          <Icons.Instagram className="size-5 p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
        </Link>
        <Link href="/instagram" className="">
          <Icons.Telegram className="size-5 p-0 text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300" />
        </Link>
      </span>
    </footer>
  );
};

Footer.displayName = 'pageComponents';
export default Footer;
