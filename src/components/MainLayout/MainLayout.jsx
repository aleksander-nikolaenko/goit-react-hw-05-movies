import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
