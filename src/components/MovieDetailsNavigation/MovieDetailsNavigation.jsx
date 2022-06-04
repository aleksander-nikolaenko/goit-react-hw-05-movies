import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsNavigation = () => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <NavList>
        <NavItem>
          <Link to="cast">Cast</Link>
        </NavItem>
        <NavItem>
          <Link to="reviews">Reviews</Link>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  align-items: center; */
  margin-bottom: 15px;
`;

const Title = styled.p`
  display: block;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  margin-bottom: 15px;
  color: ${p => p.theme.titleNavDetailsColor};
  margin-bottom: 15px;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin-left: 15px;
  &:first-child {
    margin-left: 0;
  }
`;

const Link = styled(NavLink)`
  display: block;
  padding: 15px;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  background-color: ${p => p.theme.buttonBgColor};
  color: ${p => p.theme.buttonTextColor};
  transition: color 250ms ease-in-out;
  &.active {
    color: ${p => p.theme.accentColor};
  }
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.accentColor};
  }
`;
