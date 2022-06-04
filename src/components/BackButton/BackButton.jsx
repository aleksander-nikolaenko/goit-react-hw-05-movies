import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const BackButton = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [lastUrl] = useState(() => {
    return state ? `${state.prevUrl.pathname}${state.prevUrl.search}` : `/`;
  });

  const handleBack = () => {
    navigate(lastUrl);
  };
  return (
    <Wrapper>
      <Button onClick={handleBack}> Go back</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${p => p.theme.buttonBgColor};
  color: ${p => p.theme.buttonTextColor};
  transition: color 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.accentColor};
  }
`;
