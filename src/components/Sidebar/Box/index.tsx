import IBox from "interfaces/IBox";
import IBoxSpace from "interfaces/IBoxSpace";
import { styled } from "styled-components";

const BoxEstilizado = styled.div<IBoxSpace>`
  color: var(--lighter);
  background: var(--color-gray-darker-2);
  border-radius: .8rem;
  padding: 1.6rem 2rem;
  margin-top: ${(props) => (props.$mt ? props.$mt : '0rem')};
`

const Titulo = styled.h2`
  font-size: 1.6rem;
  margin-bottom: .8rem;
  font-weight: 700;
`

const Texto = styled.p`
  font-size: 1.4rem;
`

const Botao = styled.button`
  background: var(--lighter);
  border-radius: 5rem;
  color: var(--darker);
  margin-top: 2rem;
  font-size: 1.4rem;
  padding: .4rem 1.6rem;
  font-weight: 700;
  border: 0;
  min-block-size: 3.2rem;
  cursor: pointer;
  transition: transform .25s;

  &:hover {
    transform: scale(1.05);
  }
`

const Box: React.FC<IBox> = ({titulo, texto, botao, $mt}) => {
  return (
    <BoxEstilizado $mt={$mt}>
      <Titulo>
        {titulo}
      </Titulo>
      <Texto>
        {texto}
      </Texto>
      <Botao>
        {botao}
      </Botao>
    </BoxEstilizado>
  )
}

export default Box