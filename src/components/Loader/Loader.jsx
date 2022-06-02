import { Audio } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <Wrapper>
      <Audio
        color="#F66B0E"
        height="80"
        width="80"
        ariaLabel="loading-indicator"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
