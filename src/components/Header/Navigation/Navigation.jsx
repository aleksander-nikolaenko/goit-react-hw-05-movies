import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>

        <NavItem>
          <Link to="/movies">Movies</Link>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding-bottom: 12px;
  color: ${p => p.theme.navLinkColor};
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  transition: color 250ms ease-in-out;
  &.active {
    color: ${p => p.theme.accentColor};
    border-bottom: 3px solid ${p => p.theme.accentColor};
  }
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.accentColor};
  }
`;
