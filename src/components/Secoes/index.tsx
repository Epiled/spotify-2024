import styled from "styled-components"
import { useEffect, useState } from "react"
import Album from "../../components/Album/Album"
import IArtist from "interfaces/IArtist"

const SecoesEstilizado = styled.section`
  background: var(--bg-header);
  border-radius: .8rem;
  color: var(--lighter);
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: 700;
  padding: 4rem 2.4rem .8rem 2.4rem;
  background-image: linear-gradient(var(--color-gray-darker-2) 0,var(--color-gray-darker-1) 40%);
`

const Mensagem = styled.span`
  font-size: 4rem;
`

const Titulo = styled.h2`
  font-size: 2.75rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`

const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`

const ListaAlbuns = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  gap: 2.4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem,1fr));
  grid-template-rows: auto;
  align-content: flex-start;

  &::-webkit-scrollbar {
    width: 0;
  }
`
const localhost = window.location.origin;

const Secoes: React.FC = () => {

  const [albuns, setAlbuns] = useState<IArtist[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${localhost}/db/playlist.json`)
        const albunsLista = await res.json();
        setAlbuns(albunsLista.artists);
        console.log(albuns)
      } catch (error) {
        console.log('Erro ao buscar dados:', error);
      }
    };

    fetchData()
  }, [])

  return (
    <SecoesEstilizado>
      <Mensagem>Boa Tarde</Mensagem>
      <Titulo>Navegar por todas as seções</Titulo>

      <ContainerWrapper>

        <ListaAlbuns>
          {albuns?.map(album => {
            console.log(album);
            return (
              <Album key={album.id} {...album} />
            )
          })}
        </ListaAlbuns>

      </ContainerWrapper>
    </SecoesEstilizado>
  )
}

export default Secoes