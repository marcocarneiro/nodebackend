import express from "express";

const router = express.Router();

// Exemplo de rota
router.get("/example", (req, res) => {
  res.json({ message: "Rota de exemplo funcionando!" });
});

export default router;
