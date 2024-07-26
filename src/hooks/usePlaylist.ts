import IPlaylist from "interfaces/IPlaylist";
import useFetch from "./useFetch";

const useDadosPlaylist = () => {
  return useFetch<IPlaylist[]>({ url: "playlist" });
};

export {useDadosPlaylist};
