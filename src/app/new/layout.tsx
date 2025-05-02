'use client';
import Footer from '@/layout/footer';
import Header from '@/layout/header';
import Sidebar from '@/layout/sidebar';

import BreadCrumb from '@/layout/breadcrumb';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container m-auto flex max-w-[1920px] flex-col gap-3 p-1 md:p-3">
      <div className="flex gap-x-5">
        <Sidebar />

        <div className="flex w-full flex-col gap-y-4">
          <Header />
          <BreadCrumb />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
