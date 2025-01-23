# **Prisma Project**

Este é um projeto de exemplo utilizando **Node.js**, **Express.js** com **TypesCript** e **PrismaORM**.
O objetivo é demonstrar como configurar e utilizar o Prisma para interagir com um banco de dados PostgreSQL em um ambiente TypeScript.

## **Tecnologias Utilizadas**

- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Prisma**: ORM moderno e eficiente para Node.js e TypeScript.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

## **Configuração do Projeto**

### **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**: Ambiente de execução para JavaScript.
- **PostgreSQL**: Banco de dados relacional.

### **Passos para Configuração**

1. **Inicializar o projeto Node.js**:

   ```bash
   npm init -y
   ```

2. **Instalar dependências de desenvolvimento**:

   ```bash
   npm i -D typescript ts-node-dev @types/node prisma
   ```

3. **Inicializar o TypeScript**:

   ```bash
   npx tsc --init
   ```

4. **Inicializar o Prisma**:

   ```bash
   npx prisma init --datasource-provider postgresql
   ```

5. **Configurar a URL do banco de dados no arquivo `.env`**:

   ```properties
   DATABASE_URL="postgresql://<usuário>:<senha>@<host>:<porta>/<database>"
   ```

6. **Sincronizar o esquema do banco de dados com o Prisma**:

   - Para importar um esquema existente do banco de dados:

     ```bash
     npx prisma db pull
     ```

   - Para criar migrações e sincronizar o banco com os modelos definidos no Prisma:

     ```bash
     npx prisma migrate dev
     ```

7. **Gerar o cliente Prisma**:

   ```bash
   npx prisma generate
   ```

8. **Adicionar script de desenvolvimento no `package.json`**:

   ```json
   "scripts": {
     "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --clear src/index.ts"
   }
   ```

## **Estrutura do Projeto**

A organização básica do projeto é a seguinte:

```text
prisma-project/
├── prisma/
│   └── schema.prisma  # Define modelos e configurações do Prisma
├── src/
│   └── index.ts       # Arquivo principal do projeto
├── .env               # Variáveis de ambiente (URL do banco, etc.)
├── .gitignore         # Arquivos/pastas a serem ignorados pelo Git
├── .editorconfig      # Padrões de formatação do código
├── package.json       # Gerenciamento de dependências e scripts
├── tsconfig.json      # Configurações do TypeScript
└── node_modules/      # Dependências instaladas
```

## **Executando o Projeto**

Para iniciar o projeto em modo de desenvolvimento, execute o comando abaixo:

```bash
npm run dev
```

## **Licença**

Este projeto está licenciado sob a licença MIT.
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Com este projeto, você tem uma base sólida para começar a explorar o uso do **Node.js**, **Express.js** com **TypesCript** e **PrismaORM**.
