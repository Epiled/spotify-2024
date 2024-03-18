import IPlaylist from "interfaces/IPlaylist"
import styled from "styled-components"

const Imagem = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: .6rem;
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  box-shadow: 0 .8rem 2.4rem var(--shadow);
  transform: rotateZ(25deg) translateX(2.4rem) translateY(1.6rem);
  transition: transform .5s ease-in-out, width .5s ease-in-out, height .5s ease-in-out;
  will-change: transform, width, height;
`

const Box = styled.div<{ $bg: string }>`
  position: relative;
  background: ${(props) => props.$bg};
  border-radius: .8rem;
  padding: 1.6rem;
  transition: background-color .3s ease;
  min-width: 20rem;
  min-height: 20rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${Imagem} {
      transform: rotateZ(0deg) translateX(0) translateY(0);
      width: 100%;
      height: 100%;

      transition: transform .5s ease-in-out, width .5s ease-in-out, height .5s ease-in-out;
    }
  }
`

const Categoria = styled.h3`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: .25rem;
  font-size: 1.6rem;
  z-index: 1;
`

const Album: React.FC<IPlaylist & { innerRef?: (el: HTMLDivElement | null) => void; }> = ({ categoria, capa, cor, innerRef }) => {
  return (
    <Box ref={innerRef} data-filtrado={false} $bg={cor}>
      <Categoria>
        {categoria}
      </Categoria>
      <Imagem src={capa} alt={`${categoria}`} />
    </Box>
  )
}

export default Album