import { Container } from 'utils/Container';
import { FooterBackground, FooterText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBackground>
      <Container>
        <FooterText> © 2023 | All Rights Reserved</FooterText>
      </Container>
    </FooterBackground>
  );
};
