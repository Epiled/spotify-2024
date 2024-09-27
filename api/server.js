import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router('db/playlist.json'); // Caminho absoluto para o JSON
const middlewares = jsonServer.defaults();

server.use(cors()); // Adiciona suporte a CORS
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

export default (req, res) => {
  server(req, res);
};
