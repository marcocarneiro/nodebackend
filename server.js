require("dotenv").config();
import { createServer } from "http";
import app from "./src/app";
const PORT = process.env.PORT || 3000;
const server = createServer(app);
server.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});