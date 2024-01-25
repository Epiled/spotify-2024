import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  margin-top: auto;
  padding: 0 1.6rem;
`

const ExtrasEstilizado = styled.nav`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.6rem;

`
const LinkEstilizado = styled(Link)`
  color: var(--color-gray-lighter-2);
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;

  &:last-of-type {
    margin: 0 0 .4rem 0;
  }
`

const Cookies = styled(LinkEstilizado)`
  font-size: 1.2rem;
  height: 2.2rem;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`

const Extras: React.FC = () => {
  return (
    <Container>
      <ExtrasEstilizado>
        <LinkEstilizado to={'/'}>
          Legal
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Centro de Privacidade
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Política de privacidade
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Cookies
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Sobre anúncios
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Acessibilidade
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Notice at Collection
        </LinkEstilizado>
        <LinkEstilizado to={'/'}>
          Your Privacy Choices
        </LinkEstilizado>
      </ExtrasEstilizado>

      <Cookies to={'/'}>
        Cookies
      </Cookies>
    </Container>
  )
}

export default Extras