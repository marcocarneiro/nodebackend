# NodeBackend
 Boilerplate para projetos NODE JS

## Dependências
- express: Framework para criar o servidor.
- dotenv: Gerenciar variáveis de ambiente.
- morgan: Middleware para logar requisições no console.
- cors: Permitir requisições de diferentes origens.
- swagger: Cria automaticamente a documentação das rotas
<<<<<<< HEAD
- helmet: Configuração de cabeçalhos de segurança
- rateLimit: Limita solicitações repetidas para APIs públicas e/ou endpoints - mitiga ataques de força bruta
- passport, passport-google-oauth20, e jsonwebtoken:  Autenticação e geração de tokens.
- supabase: Banco de dados e storage de imagens

### Exemplo de arquivo .env com as variáveis de ambiente necessárias
```js
PORT=3000
SUPABASE_URL=https://suaurl.supabase.co
SUPABASE_KEY=suachavesupabase
```

### OAuth 2.0 no Google Cloud Console
Acesse o console do Google para configurar no seu projeto, as variáveis de ambiente GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET
=======
>>>>>>> parent of a7e5735 (Implementação do Helmet (segurança) e express-limit-rate (configura prevenção de ataque de força bruta))

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
