import { Loader } from 'components/Loader';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/moviesAPI';
import styled from 'styled-components';

const Reviews = () => {
  const { movieId } = useParams();

  const { data, loading, error } = useFetch(
    () => fetchMovieReviews(movieId),
    [],
    undefined
  );

  if (loading) {
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }, 0);

    return <Loader />;
  }
  if (error) {
    toast.error('Sorry, server error, there are no review for this films', {
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
    return <Error>We don't have any reviews for this movie</Error>;
  }

  return (
    <>
      {data && (
        <ReviewList>
          {data.results.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <Autor>
                Author: <AutorName>{author}</AutorName>
              </Autor>
              <Content>{content}</Content>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </>
  );
};

const Error = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${p => p.theme.reviewTextColor};
`;
const ReviewList = styled.ul`
  max-width: 1000px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ReviewItem = styled.ul`
  padding: 10px;
`;

const Autor = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${p => p.theme.reviewAutorTextColor};
  margin-bottom: 5px;
`;
const AutorName = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${p => p.theme.accentColor};
`;
const Content = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.reviewContentColor};
`;
export default Reviews;
