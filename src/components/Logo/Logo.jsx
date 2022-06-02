import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import sprite from 'assets/sprite.svg';
import PropTypes from 'prop-types';

export const Logo = ({ title }) => {
  return (
    <LogoLink to="/">
      <Icon>
        <use href={`${sprite}#icon-film`} />
      </Icon>
      <Title>{title}</Title>
    </LogoLink>
  );
};

Logo.propTypes = {
  title: PropTypes.string,
};

const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const Icon = styled.svg`
  width: 36px;
  height: 36px;
`;

const Title = styled.h1`
  display: flex;
  margin-left: 8px;
  color: ${p => p.theme.accentColor};
  font-size: 36px;
  font-weight: 700;
`;
