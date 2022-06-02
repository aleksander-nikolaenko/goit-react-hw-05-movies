import { Logo } from 'components/Logo';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Wrapper>
      <Logo title="TMDB" />
      <Copiwrite>
        <span>&copy;</span>
        <span>2022 | All Rights Reserved |Developed with GoIT student</span>
      </Copiwrite>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.footerBgColor};
`;
const Copiwrite = styled.div`
  margin-left: 20px;
`;
