# NodeBackend
 Boilerplate para projetos NODE JS

## Dependências
- express: Framework para criar o servidor.
- dotenv: Gerenciar variáveis de ambiente.
- morgan: Middleware para logar requisições no console.
- cors: Permitir requisições de diferentes origens.
- swagger: Cria automaticamente a documentação das rotas

### Exemplo de documentação de rota com o Swagger
Você deve construir um comentário estruturado que descreve uma rota.<br>
Por exemplo, para a rota "/example" você pode construir o seguinte comentário para
que seja exibido na página da documentação da API:
```js
/**
 * @swagger
 * /api/example:
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

```
