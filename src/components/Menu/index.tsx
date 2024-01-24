import { styled } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import logoImagem from '/assets/imgs/icons/logo-spotify.png'
import { Link } from "react-router-dom";

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-color: var(--color-gray-darker-1);
  border-radius: .8rem;
  padding: 2rem 2.4rem 1.2rem 2.4rem;
  gap: 1.2rem;
  max-width: 42rem;
`

const Logo = styled.img`
  height: 2.4rem;
  object-fit: contain;
  align-self: flex-start;
`

const Lista = styled.ul`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

const ItemLista = styled.li`
  font: inherit;
`

const Icon = styled(FontAwesomeIcon)`
  color: transparent;
  font-size: 2rem;
  stroke-width: 5rem;
  stroke: var(--color-gray-lighter-1);
`

const LinkItem = styled(Link)`
  color: var(--color-gray-lighter-1);
  font: inherit;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--lighter);

    /* Estilos do ícone durante o hover */
    ${Icon} {
        stroke: var(--lighter);
      }
    }
`

const IconHome = styled(Icon).attrs({ icon: faHome })``
const IconSearch = styled(Icon).attrs({ icon: faSearch })``

const SideBar: React.FC = () => {
  return (
    <>
      <Menu>
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
      </Menu>
    </>
  );
}

export default SideBar;