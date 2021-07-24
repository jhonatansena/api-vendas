## API de Vendas
Projeto realizado para estudo da tecnologia Node


### DESENVOLVIDO COM

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Typeorm](https://typeorm.io/#/)
* [Mysql](https://www.mysql.com/)
* [JWT](https://jwt.io/)
* [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/)
* [Etherel Mail](https://ethereal.email/)


### Funcionalidades

- Cadastro de usuários
- Listar usuários
- Somente usuário administrador

- Cadastro de produtos
- ID do produto
- Preço
- Quantidade
- Data da criação

- Autenticação de usuário
- Gerar token JWT
- Validar usuário logado nas rotas necessárias

- Listagem de usuários
- Listagem de produtos
- Listagem de clientes


### Comandos necessários

> yarn init -y

> yarn add typescript -D (instala o ts apenas em desenvolvimento)

> yarn tsc --init (inicializa o ts)

> yarn add express

> yarn add @types/express -D

> yarn add ts-node-dev -D (converte automaticamente ts para js)

>

### Dicas gerais

1) Comandos úteis:

> yarn tsc (converte ts para js)

> yarn dev (utilizado para rodar o projeto após a instalação do **ts-node-dev**)

2) Configurações package.json para fazer com que o ts-node-dev instalado anteriormente transforme o código ts para js de forma automática

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```
