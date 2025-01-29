import express from "express";

const router = express.Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Rota para teste inicial
 *     description: Endpoint que retorna uma mensagem simples.
 *     responses:
 *       200:
 *         description: Mensagem simples retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: "Uma mensagem qualquer"
 */

// Exemplo de rota
router.get("/example", (req, res) => {
  res.json({ message: "Rota de exemplo funcionando!" });
});

export default router;
