import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import noImage from '../../../assets/movie-poster-coming-soon.jpg';

export const MoviesListItem = ({ id, title, img }) => {
  return (
    <Item>
      <Link to={`/movies/${id}`}>
        <Wrapper>
          <Img
            src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noImage}
            alt={title}
          />
        </Wrapper>
        <Description>
          <Title>{title}</Title>
        </Description>
      </Link>
    </Item>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 4 - 30px);
  flex-direction: column;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-content: stretch;

  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
  background-color: ${p => p.theme.cardBgColor};
  transition: box-shadow 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.accentColor};
    box-shadow: 0 0 20px 5px rgba(255, 107, 1, 0.251),
      0 0 15px 3px rgb(255, 107, 1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  border-radius: 4px;
  overflow: hidden;
`;
const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 60px;
`;
const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${p => p.theme.cardTitleColor};
`;
