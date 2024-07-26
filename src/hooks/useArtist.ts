import IArtist from "interfaces/IArtist"
import useFetch from "./useFetch"

const useDadosArtist = ({parametro} : { parametro? : string  }) => {
  return useFetch<IArtist[]>({url:`artists/?name_like=${parametro || ''}`})
}

const useDadosArtistTheme = ({parametro} : {parametro : string}) => {
  return useFetch<IArtist[]>({ url: `artists/?genre_like=${parametro}` });
}

export {useDadosArtist, useDadosArtistTheme}