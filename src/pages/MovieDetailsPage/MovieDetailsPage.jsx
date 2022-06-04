import { BackButton } from 'components/BackButton';
import { Container } from 'components/Container';
import { Loader } from 'components/Loader';
import { MovieDetailsInfo } from 'components/MovieDetailsInfo';
import { MovieDetailsNavigation } from 'components/MovieDetailsNavigation';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews-page" */)
);

const MovieDetailsPage = () => {
  return (
    <Container>
      <BackButton />
      <MovieDetailsInfo />
      <MovieDetailsNavigation />
      <div>
        <Routes>
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Container>
  );
};

export default MovieDetailsPage;
