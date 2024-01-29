import styled from "styled-components"
import { useCallback, useEffect, useRef, useState } from "react"
import Artista from "../Artista"
import IArtist from "interfaces/IArtist"
import { useBusca } from "../../context/BuscaContext"
import Album from "../Album"
import IPlaylist from "interfaces/IPlaylist"
import useDadosPlaylist from "../../hooks/usePlaylist"
import useDadosArtist from "../../hooks/useArtist"

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

const ListaAlbuns = styled.div<{ $colunas: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  gap: 2.4rem;

  display: grid;
  grid-template-columns: repeat(${(props) => props.$colunas}, minmax(20rem, 1fr));
  align-content: flex-start;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const NadaEncontrado = styled.h3`
  font-size: 2rem;
  grid-column: 1 / span 3;
`

const Secoes: React.FC = () => {

  // States
  const [artistas, setArtistas] = useState<IArtist[] | undefined>()
  const [playlists, setPlaylists] = useState<IPlaylist[] | undefined>()
  const [columns, setColumns] = useState(0);

  // Context
  const { termoBusca } = useBusca()

  // Refs
  const ref = useRef<HTMLDivElement>(null)
  const albunsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Dados API
  const { dados: artistasLista } = useDadosArtist({ parametro: termoBusca })
  const { dados: playlistLista } = useDadosPlaylist()

  // Funções auxilares/handles
  const hiddenAlbuns = useCallback(() => {
    albunsRef.current.forEach((album) => {
      album?.classList.toggle('hidden', termoBusca !== "");
    });
  }, [termoBusca])

  const handleRef = () => {
    return ref.current
  }

  const handleAllRef = (el: HTMLDivElement | null, index: number) => {
    // Armazenar a referência na posição correta
    albunsRef.current[index] = el;
  }

  // useEffects 
  useEffect(() => {
    if (artistasLista) {
      hiddenAlbuns()
    }
  }, [termoBusca, artistasLista, hiddenAlbuns]);

  useEffect(() => {
    playlistLista ? setPlaylists(playlistLista) : ''
    artistasLista ? setArtistas(artistasLista) : ''

  }, [playlistLista, artistasLista]);

  useEffect(() => {
    const elemento = handleRef()

    const resizeObserver = new ResizeObserver(() => {
      if (elemento) {
        const elementoWidth = elemento.getBoundingClientRect().width
        console.log(elementoWidth)
        const numberColumns = Math.floor(elementoWidth / 200)
        const gap = 24
        const gaspWidth = numberColumns * gap
        const numberColumnsGap = Math.floor((elementoWidth - gaspWidth) / 200)
        setColumns(numberColumnsGap)
      }
    })

    if (elemento) {
      resizeObserver.observe(elemento)
    }

    return () => {
      // Limpar o observador quando o componente for desmontado
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <SecoesEstilizado>
      <Mensagem>Boa Tarde</Mensagem>
      <Titulo>Navegar por todas as seções</Titulo>

      <ContainerWrapper>

        <ListaAlbuns $colunas={columns} ref={ref}>
          {playlists?.map((album, index) => {
            return (
              <Album
                innerRef={(el) => handleAllRef(el, index)}
                key={index}
                {...album}
              />
            )
          })}

          {termoBusca && termoBusca.length != 0 ? (
            artistasLista?.length === 0 ? (
              <NadaEncontrado>Nada encontrado para o termo de busca {termoBusca}.</NadaEncontrado>
            ) : (
              artistas?.map(album => <Artista key={album.id} {...album} />)
            )
          ) : ''}

        </ListaAlbuns>

      </ContainerWrapper>
    </SecoesEstilizado>
  )
}

export default Secoes