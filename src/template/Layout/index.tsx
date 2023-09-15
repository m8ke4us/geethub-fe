import Footer from '@/components/Footer';
import Header from '@/components/Header';

import type { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="p-layout flex-1">{children}</section>
      <Footer />
    </main>
  );
}

export default Layout;
