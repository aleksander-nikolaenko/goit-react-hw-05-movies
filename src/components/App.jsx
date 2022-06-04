import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routesPaths } from 'routerSettings/settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header';
import { Loader } from './Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "moviedetails-page" */
  )
);

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path={routesPaths.homePage}
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path={routesPaths.moviePage}
            element={
              <Suspense fallback={<Loader />}>
                <MoviesPage />
              </Suspense>
            }
          />
          <Route
            path={routesPaths.movieDetailsPage}
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetailsPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* <Footer /> */}
      <ToastContainer />
    </>
  );
};
