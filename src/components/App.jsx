import { HomePage } from 'pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routesPaths } from 'routerSettings/settings';
import { ToastContainer } from 'react-toastify';
import { Header } from './Header';
import { MoviesPage } from 'pages/MoviesPage';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={routesPaths.homePage} element={<HomePage />} />
          <Route path={routesPaths.moviePage} element={<MoviesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* <Footer /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
