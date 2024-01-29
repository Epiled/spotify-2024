import IArtist from "interfaces/IArtist"
import styled from "styled-components"

const Box = styled.div`
  flex: 1;
  border-radius: .8rem;
  padding: 1.6rem;
  background: var(--bg-album);
  transition: background-color .3s ease;

  &:hover {
    background: var(--bg-album-hover);
  }
`

const Imagem = styled.img`
  border-radius: .6rem;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 0 .8rem 2.4rem var(--shadow);
`

const ArtistaEstilizado = styled.h3`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: .25rem;
`

const Genero = styled.h4`
  font-size: 1.4rem;
  color: var(--color-gray-lighter-2);
`

const Artista: React.FC<IArtist> = ({ urlImg, name, genre }) => {
  return (
    <Box>
      <Imagem src={urlImg} alt={`${name} - ${genre}`} />
      <ArtistaEstilizado>
        {name}
      </ArtistaEstilizado>
      <Genero>
        {genre}
      </Genero>

    </Box>
  )
}

export default Artista