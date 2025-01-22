
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import CoreProvider from '@/providers/core-provider';
export const metadata: Metadata = { title: 'داشبورد' };
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeProvider attribute="class" defaultTheme="system">
    {/* <body className='bg-red-200 dark:bg-slate-200'> */}
      <CoreProvider>{children}</CoreProvider>
    {/* </body> */}
  </ThemeProvider>
);

DashboardLayout.displayName = 'DashboardLayout';
export default DashboardLayout;
