import IArtist from "interfaces/IArtist"
import useFetch from "./useFetch"

const useDadosArtist = ({parametro} : { parametro? : string  }) => {
  return useFetch<IArtist[]>({url:`artists/?name=${parametro || ''}`})
}

export default useDadosArtist