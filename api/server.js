/* eslint-disable @typescript-eslint/no-var-requires */
import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router('../db/playlist.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Adiciona suporte a CORS
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("Okay");
})

export default (req, res) => {
  server(req, res);
};