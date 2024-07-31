import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Box from "./Box";
import Extras from "./Extras";
import logoImagem from '/assets/imgs/icons/logo-spotify.png'
import IBoxSpace from "interfaces/IBoxSpace";
import IFlex from "interfaces/IFlex";
import ILinkItem from "interfaces/ILikeItem";
import { useDrawer } from "../../context/DrawerContext";

interface ISideBarContainer extends IBoxSpace, IFlex {}

const Barra = styled.div<{open: boolean}>`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  position: absolute;
  z-index: 2;
  height: calc(100% - 1.6rem);
  left: ${props => props.open ? ".8rem" : "-42rem"};
  transition: left .5s;
  width: 75%;
  max-width: 42rem;

  @media screen and (min-width: 1368px) {
    position: static;
    height: initial;
    max-width: none;
    width: auto;
  }
`

const Container = styled.nav<ISideBarContainer>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-darker-1);
  border-radius: .8rem;
  padding-top: ${(props) => (props.$pt ? props.$pt : '2rem')};
  padding-right: ${(props) => (props.$pr ? props.$pr : '2.4rem')};
  padding-bottom: ${(props) => (props.$pb ? props.$pb : '1.2rem')};
  padding-left: ${(props) => (props.$pl ? props.$pl : '2.4rem')};
  gap: 1.2rem;
  max-width: 42rem;
  flex: ${(props) => (props.$flex ? props.$flex : 'initial')};
`

const Logo = styled.img`
  height: 2.4rem;
  object-fit: contain;
  align-self: flex-start;
`

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

const ListaAlt = styled(Lista)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.6rem;
  margin-right: .8rem;
`

const ItemLista = styled.li`
  font-size: 1.6rem;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  stroke: var(--color-gray-lighter-1);
  color: var(--color-gray-lighter-1);
`

const LinkItem = styled(Link)<ILinkItem>`
  color: var(--color-gray-lighter-1);
  font: inherit;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: ${(props) => (props.height ? props.height : '4rem')};
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--lighter);

    /* Estilos do ícone durante o hover */
    ${Icon} {
        stroke: var(--lighter);
        color: var(--lighter);
      }
    }
`

const LinkItemBiblioteca = styled(LinkItem)`
  gap: 1rem;
`

const IconHome = styled(Icon).attrs({ icon: faHome })``
const IconSearch = styled(Icon).attrs({ icon: faSearch })``
const IconBook = styled(Icon).attrs({ icon: faBook })``
const IconPlus = styled(Icon).attrs({ icon: faPlus })`
  width: 1.6rem; 
  height: 1.6rem;
  padding: 0.8rem;

  &:hover {
    background: var(--color-gray-darker-3);
    border-radius: 5rem;
  }
`
const IconGlob = styled(Icon).attrs({ icon: faGlobe })`
  font-size: 1.6rem;
  margin-right: .25rem;
`

const ExtrasWrapper = styled.div`
  margin-top: auto;
`

const Botao = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 5rem;
  border: .1rem solid var(--lighter);
  color: var(--lighter);
  font-size: 1.4rem;
  padding: .4rem 1.6rem;
  font-weight: 700;
  min-block-size: 3.2rem;
  margin-left: 1.6rem;
  margin-top: 3.2rem;
  cursor: pointer;
  transition: transform .25s;

  &:hover {
    transform: scale(1.05);
  }
`

const SideBar: React.FC = () => {
  const { isDrawerOpen } = useDrawer();

  return (
    <Barra open={isDrawerOpen}>
      <Container>
        <Link to={'/'}>
          <Logo src={logoImagem} alt="" />
        </Link>
        <Lista>
          <ItemLista>
            <LinkItem to={'/'} >
              <IconHome icon={faHome} />
              Início
            </LinkItem>
          </ItemLista>
          <ItemLista>
            <LinkItem to={'/'}>
              <IconSearch icon={faHome} />
              Buscar
            </LinkItem>
          </ItemLista>
        </Lista>
      </Container>

      <Container $flex={1} $pt={'.8rem'} $pr={'.8rem'} $pb={'3.2rem'} $pl={'.8rem'}>
        <ListaAlt>
          <ItemLista>
            <LinkItemBiblioteca to={'/'}>
              <IconBook icon={faBook} />
              Sua Biblioteca
            </LinkItemBiblioteca>
          </ItemLista>

          <ItemLista>
            <LinkItem height={'auto'} to={'/'}>
              <IconPlus icon={faPlus} />
            </LinkItem>
            <Lista>
              <ItemLista>

              </ItemLista>
            </Lista>
          </ItemLista>
        </ListaAlt>

        <Box
          titulo={'Crie sua primeira playlist'}
          texto={'É fácil, vamos te ajudar.'}
          botao={'Criar playlist'}
        />

        <Box
          titulo={'Que tal seguir um podcast novo?'}
          texto={'Avisaremos você sobre novos episódios.'}
          botao={'Explore podcasts'}
          $mt={'1.2rem'}
        />

        <ExtrasWrapper>
          <Extras />
          <Botao>
            <IconGlob icon={faGlobe} />
            Português do Brasil
          </Botao>
        </ExtrasWrapper>

      </Container>

    </Barra>
  );
}

export default SideBar;