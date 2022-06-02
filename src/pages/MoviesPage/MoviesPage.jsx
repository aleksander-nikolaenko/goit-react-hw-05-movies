import { Container } from 'components/Container';
// import { Loader } from 'components/Loader';
// import { MoviesList } from 'components/MoviesList';
// import { MoviesListItem } from 'components/MoviesList/MoviesListItem';
import { SearchMovieForm } from 'components/SearchMovieForm';
// import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // const query = searchParams.get('query');

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };
  console.log(searchParams);
  // if (loading) return <Loader />;

  return (
    <Container>
      <SearchMovieForm onSubmit={handleFormSubmit} />

      {/* {data && (
        <MoviesList>
          {data.results.map(movie => (
            <MoviesListItem
              key={movie.id}
              title={movie.title}
              id={movie.id}
              img={movie.poster_path}
            />
          ))}
        </MoviesList>
      )} */}
    </Container>
  );
};
