import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;
