# 🧪 Projeto de Testes Automatizados - Teste Técnico

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar as funcionalidades principais de um sistema de cadastro de produtos.

---

## 📂 Estrutura do Projeto

```
teste_tecnico/
│
├── cypress/
│   ├── e2e/
│   │   └── home.cy.js                 # Casos de teste principais
│   ├── fixtures/                      # Dados mockados (não utilizado neste exemplo)
│   └── support/
│       ├── commands.js                # Comandos customizados do Cypress
│       └── helpers/
│           └── produtoHelper.js      # Gerador de dados fake usando Faker
│
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Dependências e metadados do projeto
├── yarn.lock                         # Lockfile de dependências
└── README.md                         # Instruções de uso
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (recomendado: versão 18+)
- [Yarn](https://classic.yarnpkg.com/lang/en/) ou [npm](https://www.npmjs.com/)
- Git

---

## 📦 Instalação

1. Clone este repositório:

```bash
git clone https://github.com/WesleyCouti/teste_tecnico_tecnorise-qa-interview
cd teste_tecnico_tecnorise-qa-interview
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

---

## ▶️ Executando os Testes

### Modo Interativo (UI do Cypress)

```bash
npx cypress open
```

Selecione o arquivo `home.cy.js` dentro da aba **E2E Testing**.

### Modo Headless (via terminal)

```bash
npx cypress run
```

---

## 🧪 Funcionalidades Testadas

Os testes cobrem:

- ✅ Verificação de carregamento correto do sistema
- ✅ Cadastro de produtos com dados aleatórios
- ✅ Validação de campos obrigatórios
- ✅ Cancelamento de cadastro
- ✅ Edição e exclusão de produtos
- ✅ Validação de preço negativo

---

## 📚 Tecnologias Utilizadas

- **Cypress** `^14.3.0`
- **Faker** `@faker-js/faker` `^9.6.0`

---

## 👨‍💻 Autor

Wesley Coutinho - *Analista de Qualidade de Software*  
Contato: [LinkedIn](https://www.linkedin.com)

---

## 📝 Licença

Este projeto está licenciado sob os termos da licença MIT.
