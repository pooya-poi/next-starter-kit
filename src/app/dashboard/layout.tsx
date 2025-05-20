import Footer from '@/layout/footer';
import Header from '@/layout/header';
import { AppSidebar } from '@/layout/app-sidebar';

import BreadCrumb from '@/layout/breadcrumb';

import { SidebarInset, SidebarProvider } from '@/components/sidebar';
import { cookies } from 'next/headers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="bg-muted">
        <div className="flex w-full flex-col gap-y-4 p-2">
          <Header />
          <BreadCrumb />
          <main className='p-4'>{children}</main>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
