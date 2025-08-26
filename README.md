# 📚 Community Library

O **Community Library** é um projeto de **biblioteca comunitária** onde usuários podem **compartilhar livros com outros membros** e também **realizar empréstimos de livros já cadastrados**.

A ideia é criar um espaço colaborativo onde todos possam contribuir e aproveitar o acervo da comunidade.

---

## 🚀 Instalação

### ✅ Pré-requisitos

* [Node.js](https://nodejs.org/) (v14.x ou superior)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 📦 Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/community-library.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd community-library
   ```

3. Instale as dependências:

   Com **npm**:

   ```bash
   npm install
   ```

   Com **yarn**:

   ```bash
   yarn install
   ```

4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

   ```env
   PORT=3000
   SECRET=your_jwt_secret
   ```

   🔑 **Gerando uma chave secreta segura**:
   Execute no terminal:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

   Isso retornará uma chave aleatória em **SHA256** para uso no JWT.

5. Inicie o servidor:

   Com **npm**:

   ```bash
   npm start
   ```

   Com **yarn**:

   ```bash
   yarn start
   ```

   O servidor estará disponível em:
   👉 [http://localhost:3000](http://localhost:3000)

---

## 📍 Rotas da API

### 👤 Usuários

* `POST /users` → Criar usuário
* `GET /users` → Listar todos os usuários
* `GET /users/:id` → Buscar usuário por ID
* `PUT /users/:id` → Atualizar usuário
* `DELETE /users/:id` → Remover usuário

### 📖 Livros

* `POST /books` → Adicionar novo livro
* `GET /books` → Listar todos os livros
* `GET /books/:id` → Buscar livro por ID
* `PUT /books/:id` → Atualizar informações de um livro
* `DELETE /books/:id` → Remover livro

### 🔄 Empréstimos

* `POST /loans` → Criar empréstimo
* `GET /loans` → Listar todos os empréstimos
* `GET /loans/:id` → Buscar empréstimo por ID
* `DELETE /loans/:id` → Encerrar empréstimo

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **SQLite** (ou outro banco de dados configurado)
* **JWT (JSON Web Tokens)** → autenticação
* **Zod** → validação de dados

---

## 🤝 Contribuindo

Contribuições são super bem-vindas! 💡
Se quiser ajudar a melhorar o projeto:

1. Faça um **fork** do repositório
2. Crie uma **branch** para sua feature/bugfix
3. Envie um **pull request**

Também pode abrir uma **issue** para sugerir melhorias ou reportar problemas.

---

## 💜 Agradecimentos

Obrigado por acessar o projeto! 🙌
Sua contribuição pode tornar essa biblioteca comunitária cada vez melhor. 🚀
