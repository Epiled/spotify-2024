import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router('db/playlist.json'); // Caminho absoluto para o JSON
const middlewares = jsonServer.defaults();

server.use(cors()); // Adiciona suporte a CORS
server.use(middlewares);
server.use(router);

// Definir as rotas para artists e playlist
server.get('/api/artists', (req, res) => {
  res.jsonp(router.db.get('artists').value());
});

server.get('/api/playlist', (req, res) => {
  res.jsonp(router.db.get('playlist').value());
});

export default (req, res) => {
  server(req, res);
};
