import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { swaggerDocs } from "../swagger.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Configuração do Swagger
swaggerDocs(app);
console.log("Swagger configurado com sucesso!");

// Rotas
app.use("/api", routes);

// Rota padrão
app.get("/", (req, res) => {
  res.json({ 
    message: "Bem-vindo ao servidor Node.js com Express!" 
  });
});

// Rota para erros 404 (deve ser a última rota)
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export default app;