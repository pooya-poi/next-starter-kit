import Link from 'next/link';

const Page: React.FC = () => (
  <div>
    Home Page <br />
    <Link href="/dashboard">dashboard</Link>
  </div>
);

Page.displayName = 'pageApp';
export default Page;
