import { Loader } from 'components/Loader';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/moviesAPI';
import styled from 'styled-components';
import noImage from '../../assets/movie-poster-coming-soon.jpg';

export const MovieDetailsInfo = () => {
  const { movieId } = useParams();

  const { data, loading, error } = useFetch(
    () => fetchMovieDetails(movieId),
    [movieId],
    undefined
  );
  if (loading) return <Loader />;
  if (error) {
    toast.error('Sorry, server error, there are no films details', {
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
    data && (
      <Wrapper>
        <MovieInfo>
          <Thumb>
            <Image
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : noImage
              }
              alt={data.title}
            />
          </Thumb>
          <Info>
            <Title>{data.title}</Title>
            <Text>
              User score: <Score>{data.vote_average * 10}%</Score>
            </Text>
            <Text>Overview:</Text>
            <Overview>{data.overview}</Overview>
            <GenresWrapper>
              <Text>Genres:</Text>
              <GenersList>
                {data.genres.map(genre => (
                  <GenersItem key={genre.id}>{genre.name}</GenersItem>
                ))}
              </GenersList>
            </GenresWrapper>
          </Info>
        </MovieInfo>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Thumb = styled.div`
  display: block;
  width: 480px;
  height: 720px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 50px;
  object-fit: contain;
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Info = styled.div`
  max-width: 480px;
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${p => p.theme.infoTitleColor};
  margin: 0;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.infoTextColor};
  margin: 0;
  margin-bottom: 5px;
`;
const Score = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${p => p.theme.infoDescrColor};
`;
const Overview = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${p => p.theme.infoDescrColor};
  margin: 0;
  margin-bottom: 20px;
`;

const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
`;
const GenersList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const GenersItem = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  padding: 0px 5px;
  border: 2px solid ${p => p.theme.accentColor};
  border-radius: 10px;
  color: ${p => p.theme.infoDescrColor};
  margin-left: 5px;
`;
