import { Link } from "react-router-dom";
import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  grid-row: 2 / span 1;
  background-image: linear-gradient(90deg,#af2896,#509bf5);
  column-gap: 2.4rem;
  padding: 1.1rem 2.4rem .7rem 1.5rem;
  color: var(--lighter);
  display: flex;
  justify-content: space-between;
  min-height: 6.6rem;
`

const Titulo = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
`

const Texto = styled.p`
  font-size: 1.6rem;
`

const Botao = styled(Link)`
  color: var(--darker);
  background-color: var(--lighter);
  border-radius: 5rem;
  font-size: 1.6rem;
  padding: .8rem 3.2rem;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`

const Rodape: React.FC = () => {
  return (
    <RodapeEstilizado>
      <div>
        <Titulo>Testar o Premium de graça</Titulo>
        <Texto>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
        </Texto>
      </div>
      <Botao to={'/'} >
        Inscreva-se grátis
      </Botao>
    </RodapeEstilizado>
  )
}

export default Rodape