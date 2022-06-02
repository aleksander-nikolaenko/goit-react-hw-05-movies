import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MoviesList = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MoviesList.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.ul`
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
