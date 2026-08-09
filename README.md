# CRUD de Pessoas com React e localStorage

Projeto desenvolvido para praticar os fundamentos do React através de um CRUD de pessoas.

Esta versão funciona somente no frontend. Os dados são armazenados no próprio navegador utilizando `localStorage`, portanto não é necessário executar uma API ou banco de dados.

## Funcionalidades

- Cadastrar pessoas
- Listar pessoas cadastradas
- Editar pessoas
- Excluir pessoas
- Cancelar edição
- Confirmar antes de excluir
- Cadastro de nome, e-mail e telefone
- Validação de campos obrigatórios
- Impedir cadastro de e-mails duplicados
- Buscar por nome, e-mail ou telefone
- Persistência dos dados utilizando localStorage

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- localStorage

## Como os dados são armazenados

Os dados são armazenados no navegador utilizando:

```javascript
localStorage
```

Isso significa que não existe banco de dados ou backend nesta versão.

O fluxo funciona assim:

```text
React
  ↓
localStorage do navegador
  ↓
React
```

Os dados continuam disponíveis mesmo depois de atualizar ou fechar a página.

Porém, eles ficam salvos somente naquele navegador/computador.

Se o localStorage do navegador for apagado, os registros também serão apagados.

## Estrutura principal

```text
src/
├── components/
│   ├── FormularioPessoa.jsx
│   └── TabelaPessoas.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Pré-requisitos

É necessário ter instalado:

- Node.js
- npm

Para conferir:

```bash
node -v
npm -v
```

## Como executar

Clone o projeto:

```bash
git clone https://github.com/Edy10/crud-react.git
```

Entre na pasta:

```bash
cd crud-react
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

O Vite mostrará um endereço parecido com:

```text
http://localhost:5173
```

Abra esse endereço no navegador.
