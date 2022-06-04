import { Loader } from 'components/Loader';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'services/moviesAPI';
import styled from 'styled-components';
import noImage from '../../../assets/no-photo.png';

const Cast = () => {
  const { movieId } = useParams();

  const { data, loading, error } = useFetch(
    () => fetchMovieCast(movieId),
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
    toast.error('Sorry, server error, there are no cast for this films', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (data?.cast.length === 0) {
    return <Error>We don't have any cast for this movie</Error>;
  }

  return (
    <>
      {data && (
        <CastList>
          {data.cast.map(({ id, profile_path, original_name, character }) => (
            <CastItem key={id}>
              <Thumb>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : noImage
                  }
                  alt={original_name}
                />
              </Thumb>

              <Description>
                <Name>{original_name}</Name>
                <Character>
                  Character: <CharacterContent>{character}</CharacterContent>
                </Character>
              </Description>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

const Error = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${p => p.theme.castTextColor};
`;
const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  border-radius: 20px;
  text-decoration: none;
  padding: 10px;
`;
const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Name = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.castNameTextColor};
  margin: 0;
  margin-bottom: 8px;
`;

const Character = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.castCharacterTextColor};
  margin: 0;
`;

const CharacterContent = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.accentColor};
`;

export default Cast;
