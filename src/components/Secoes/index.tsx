import styled from "styled-components"
import { useCallback, useEffect, useRef, useState } from "react"
import Artista from "../Artista"
import IArtist from "interfaces/IArtist"
import { useBusca } from "../../context/BuscaContext"
import Album from "../Album"
import IPlaylist from "interfaces/IPlaylist"
import { useDadosPlaylist } from "../../hooks/usePlaylist"
import { useDadosArtist, useDadosArtistTheme } from "../../hooks/useArtist"

const SecoesEstilizado = styled.section`
  background: var(--bg-header);
  border-radius: .8rem;
  color: var(--lighter);
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: 700;
  padding: 4rem 2.4rem .8rem 2.4rem;
  background-image: linear-gradient(var(--color-gray-darker-2) 0, var(--color-gray-darker-1) 40%);
`

const Mensagem = styled.span`
  font-size: 4rem;
`

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
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

const BtnBack = styled.button`
  align-self: center;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 5rem;
  border: 0;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    transform: scale(1.1);
  }
`

const Secoes: React.FC = () => {

  // States
  const [artistas, setArtistas] = useState<IArtist[] | undefined>()
  const [playlists, setPlaylists] = useState<IPlaylist[] | undefined>()
  const [columns, setColumns] = useState(0);
  const [boasVindas, setBoasVindas] = useState('')
  const [thema, setThema] = useState('');

  // Context
  const { termoBusca, setTermoBusca } = useBusca()

  // Refs
  const ref = useRef<HTMLDivElement>(null)
  const albunsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Dados API
  const { dados: artistasLista } = useDadosArtist({ parametro: termoBusca })
  const { dados: playlistLista } = useDadosPlaylist()
  const { dados: artistasListaTheme } = useDadosArtistTheme({ parametro: thema })

  // Funções auxilares/handles
  const hiddenAlbuns = useCallback(() => {
    albunsRef.current.forEach((album) => {
      album?.classList.toggle('hidden', ((termoBusca || thema) !== ""));
    });
  }, [termoBusca, thema])

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
  }, [termoBusca, artistasLista, thema, hiddenAlbuns]);

  useEffect(() => {
    if (playlistLista) setPlaylists(playlistLista)
    if (artistasLista) setArtistas(artistasLista)
  }, [playlistLista, artistasLista]);

  useEffect(() => {
    const elemento = handleRef()

    const resizeObserver = new ResizeObserver(() => {
      if (elemento) {
        const elementoWidth = elemento.getBoundingClientRect().width
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

  useEffect(() => {
    const currentHour = new Date().getHours()
    const messageGreetings = currentHour >= 5 && currentHour < 12
      ? "Bom dia"
      : currentHour >= 12 && currentHour < 18
        ? "Boa tarde"
        : "Boa noite";

    setBoasVindas(messageGreetings)
  }, [])

  useEffect(() => {
    if (thema && artistasListaTheme) {
      setArtistas(artistasListaTheme)
    }
  }, [thema, artistasListaTheme]);

  useEffect(() => {
    if (termoBusca === '') {
      setThema('');
    }
  }, [termoBusca]);

  return (
    <SecoesEstilizado>
      <Mensagem>{boasVindas}</Mensagem>
      <ContainerTitulo>
        <Titulo>Navegar por todas as seções {termoBusca}.</Titulo>
        {(termoBusca || thema) && <BtnBack onClick={() => {
          setThema('')
          setTermoBusca('')
        }}>Voltar</BtnBack>}
      </ContainerTitulo>

      <ContainerWrapper>

        <ListaAlbuns $colunas={columns} ref={ref}>
          {playlists?.map((album, index) => {
            return (
              <Album
                onClick={() => {
                  setThema(album.categoria)
                }}
                innerRef={(el) => handleAllRef(el, index)}
                key={index}
                {...album}
              />
            )
          })}

          {(termoBusca || thema) ? (
            artistas?.length === 0 ? (
              <NadaEncontrado>Nada encontrado para o termo de busca</NadaEncontrado>
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
