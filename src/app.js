import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import authRoutes from "./routes/auth.js";
import { swaggerDocs } from "../swagger.js";
<<<<<<< HEAD
import helmet from "helmet";
import passport from "passport";

const app = express();

app.use(helmet());
=======

const app = express();

// Middlewares
>>>>>>> parent of a7e5735 (Implementação do Helmet (segurança) e express-limit-rate (configura prevenção de ataque de força bruta))
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(passport.initialize());

swaggerDocs(app);
console.log("Swagger configurado com sucesso!");

app.use("/api", routes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.json({ 
    message: "Bem-vindo ao servidor Node.js com Express!" 
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export default app;