import styled from 'styled-components';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <Wrapper>
      <Logo title="The Movie Data Base" />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 15px;
  background-color: ${p => p.theme.headerBgColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
