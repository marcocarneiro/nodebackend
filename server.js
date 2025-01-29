import { createServer } from "http";
import app from "./src/app.js";
import {swaggerDocs} from './swagger.js';

const PORT = process.env.PORT || 8800;

const server = createServer(app);

swaggerDocs(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger Docs disponível em http://localhost:${PORT}/api-docs`);
});
