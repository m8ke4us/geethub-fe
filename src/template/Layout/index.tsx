import Footer from '@/components/Footer';
import Header from '@/components/Header';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="p-layout flex-1">{children}</section>
      <Footer />
    </main>
  );
}

export default Layout;
