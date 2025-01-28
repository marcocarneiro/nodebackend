import { Router } from "express";
const router = Router();

// Exemplo de rota
router.get("/example", (req, res) => {
    res.json({ message: "Rota de exemplo funcionando!" });
        module.exports = router;
});