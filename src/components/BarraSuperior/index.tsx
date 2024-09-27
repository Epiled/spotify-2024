import { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight, faChevronLeft, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import { useBusca } from "../../context/BuscaContext";
import { useDrawer } from "../../context/DrawerContext";

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-gray-lighter-2);
  font-size: 1.6rem;

  &:hover {
    color: var(--lighter);
  }
`

const Cabecalho = styled.header`
  display: flex;
  justify-content: start;
  background: var(--bg-header);
  padding: .8rem 2.4rem;
  border-radius: .8rem .8rem 0 0;
  gap: .8rem;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

const Botao = styled.button`
  border-radius: 5rem;
  background-color: #000000B3;
  min-height: 3.2rem;
  min-width: 3.2rem;
  align-self: center;
  border: 0;

  &:hover {
    background-color: rgba(0,0,0,.7);
    cursor: pointer;

    /* Estilos do ícone durante o hover */
      ${Icon} {
      stroke: var(--lighter);
      color: var(--lighter);
    }
  }
`

const IconSearch = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  transform: translateY(-50%);
`

const ContainerBusca = styled.form`
  position: relative;
  display: flex;
  flex: 0 1 36.4rem;

  &:focus, &:target, &:active, &:hover {
    ${Icon} {
      color: var(--lighter);
    }
  }
`

const CampoBusca = styled.input`
  background: var(--color-gray-darker-2);
  border-radius: 5rem;
  border: 0;
  padding: .6rem 3.6rem;
  font-size: 1.4rem;
  flex: 0 1 36.4rem;
  color: var(--lighter);

  &:hover {
    background: var(--bg-input-hover);
  }

`

const LinksContainer = styled.div`
  display: flex;
  align-self: center;
  margin-left: auto;
`

const LinkLogin = styled(Link)`
  background: var(--lighter);
  border-radius: 5rem;
  color: var(--darker);
  padding: .8rem 1.6rem;
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 700;
  min-height: 4.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform .25s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    padding: .8rem 3.2rem;
  }
`

const LinkCadastro = styled(LinkLogin)`
  background: transparent;
  color: var(--color-gray-lighter-2);
  padding: .8rem 1.2rem;


  &:hover {
    color: var(--lighter);
  }
`

const MenuButton = styled(LinkLogin).attrs({ as: "button" })`
  padding: .8rem;
  border: 0;
  margin-left: 1rem;
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  transition: background .5s;
  
  @media screen and (min-width: 1368px) {
    display: none;
  }

  &:hover {
    background: var(--lighter);

    ${Icon} {
      stroke: var(--darker);
      color: var(--darker);
    }
  }
  `

const IconMenu = styled(Icon).attrs({ icon: faBars })``
const IconClose = styled(Icon).attrs({ icon: faClose })``

const CabecalhoTop = styled.div`
  display: flex;
  gap: .8rem;
  flex: 1;
`

const BarraSuperior: React.FC = () => {
  const ref = useRef(null);
  const { termoBusca, setTermoBusca } = useBusca();
  const { toggleDrawer } = useDrawer();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(event?.target.value)
  };

  return (
    <Cabecalho>
      <CabecalhoTop>
        <Botao aria-label="Botão de avançar lista de pesquisa">
          <Icon icon={faChevronLeft} />
        </Botao>
        <Botao aria-label="Botão de voltar lista de pesquisa">
          <Icon icon={faChevronRight} />
        </Botao>

        <ContainerBusca>
          <IconSearch icon={faSearch} />
          <CampoBusca
            type="search"
            placeholder="O que você quer ouvir?"
            value={termoBusca}
            onChange={handleChange}
          />
        </ContainerBusca>
      </CabecalhoTop>

      <LinksContainer>
        <LinkCadastro to={'/'}>
          Inscrever-se
        </LinkCadastro>
        <LinkLogin to={'/'}>
          Entrar
        </LinkLogin>
        <MenuButton
          aria-label="Botão de abrir e fechar menu"
          to={'/'}
          ref={ref} onClick={() => {
            toggleDrawer()
            setIsOpen(!isOpen)
          }}>
          {!isOpen && <IconMenu icon={faBars} />}
          {isOpen && <IconClose icon={faClose} />}
        </MenuButton>
      </LinksContainer>
    </Cabecalho>
  )
}

export default BarraSuperior