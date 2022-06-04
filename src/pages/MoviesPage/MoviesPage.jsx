import { Container } from 'components/Container';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { MoviesListItem } from 'components/MoviesList/MoviesListItem';
import { SearchMovieForm } from 'components/SearchMovieForm';
import { useFetch } from 'hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from 'services/moviesAPI';

const MoviesPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let query = searchParams.get('query');

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  if (query === null) query = 'war';
  const { data, loading, error } = useFetch(
    () => fetchSearchMovies(query),
    [query],
    undefined
  );

  if (loading) return <Loader />;
  if (error) {
    toast.error('Sorry, server error, there are no search films', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (data?.results.length === 0) {
    toast.error(
      'Sorry, there are no films matching your search query. Please try again.',
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  return (
    <Container>
      <SearchMovieForm onSubmit={handleFormSubmit} />

      {data && (
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
      )}
    </Container>
  );
};

export default MoviesPage;
