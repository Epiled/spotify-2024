import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import { useBusca } from "../../context/BuscaContext";

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-gray-lighter-2);
  font-size: 1.6rem;

  &:hover {
    color: var(--lighter);
  }
`

const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--bg-header);
  padding: .8rem 2.4rem;
  border-radius: .8rem .8rem 0 0;
  gap: .8rem;
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

    /* Estilos do ícone durante o hover */
      ${Icon} {
      stroke: var(--lighter);
      color: var(--lighter);
    }
  }
`

const ContainerBusca = styled.form`
  position: relative;
  display: flex;
  flex: 0 1 36.4rem;
`

const IconSearch = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  transform: translateY(-50%);
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
  padding: .8rem 3.2rem;
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 700;
  min-height: 4.8rem;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`

const LinkCadastro = styled(LinkLogin)`
  background: transparent;
  color: var(--color-gray-lighter-2);

  &:hover {
    color: var(--lighter);
  }
`

const BarraSuperior: React.FC = () => {
  const { termoBusca, setTermoBusca } = useBusca();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(event?.target.value)
  };

  return (
    <Cabecalho>
      <Botao>
        <Icon icon={faChevronLeft} />
      </Botao>
      <Botao>
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

      <LinksContainer>
        <LinkCadastro to={'/'}>
          Inscrever-se
        </LinkCadastro>
        <LinkLogin to={'/'}>
          Entrar
        </LinkLogin>
      </LinksContainer>
    </Cabecalho>
  )
}

export default BarraSuperior