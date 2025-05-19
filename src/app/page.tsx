import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="text-accent-foreground flex flex-col items-center gap-y-10">
      <h1>Home Page</h1>
      <Button variant={'default'} className='text-accent-foreground '>
      <Link href="/dashboard">dashboard</Link>
      </Button>
      
    </div>
  );
};

Page.displayName = 'pageApp';
export default Page;
