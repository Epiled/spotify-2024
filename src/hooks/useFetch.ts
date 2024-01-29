import http from "../http";
import { useEffect, useState } from "react";

const useFecth = <T>({ url }: { url: string }) => {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${http}${url}`)
        const dados = await res.json();
        setDados(dados);
      } catch (error) {
        if (error instanceof Error) {
          console.log("Erro ao buscar dados:", error);
          setErro(error.message);
        } else {
          console.log("Erro desconhecido ao buscar dados:", error);
          setErro(`Erro desconhecido ${error}`);
        }
      }
    };

    fetchData()

  }, [url])
  return { dados, erro };
};

export default useFecth;
