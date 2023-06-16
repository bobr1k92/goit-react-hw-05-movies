import { PAGE_NAMES } from 'components/router/paths';
import { Container } from 'utils/Container';
import {
  HeaderBackground,
  HeaderNav,
  HeaderWrap,
  HeaderLink,
  HeaderTitle,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBackground>
      <Container>
        <HeaderWrap>
          <a href="/">
            <HeaderTitle>Moviehub</HeaderTitle>
          </a>

          <HeaderNav>
            <HeaderLink to={PAGE_NAMES.homepage}>Home</HeaderLink>
            <HeaderLink to={PAGE_NAMES.movies}>Movies</HeaderLink>
          </HeaderNav>
        </HeaderWrap>
      </Container>
    </HeaderBackground>
  );
};
