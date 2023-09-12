import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="min-h-screen">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}

export default Layout;
