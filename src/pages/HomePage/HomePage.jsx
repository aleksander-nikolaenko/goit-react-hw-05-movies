import { Loader } from 'components/Loader';
import { useFetch } from 'hooks/useFetch';
import { fetchTrendingMovies } from 'services/moviesAPI';
import styled from 'styled-components';
import { MoviesList } from 'components/MoviesList';
import { MoviesListItem } from 'components/MoviesList/MoviesListItem';
import { Container } from 'components/Container';
import { toast } from 'react-toastify';

const HomePage = () => {
  const { data, loading, error } = useFetch(
    () => fetchTrendingMovies(),
    [],
    undefined
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    toast.error('Sorry, server error, there are no trend films', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <Container>
      <Title>Trending movies by week</Title>

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

const Title = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  color: ${p => p.theme.accentColor};
  margin: 0;
  margin-bottom: 15px;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
`;

export default HomePage;
