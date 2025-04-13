import { gerarProdutoFake } from './helpers/produtoHelper';

Cypress.Commands.add('validateSiteIsOnline', () => {
  cy.visit('https://tecnorise-qa-interview.pages.dev/');
  cy.title().should('eq', 'Teste automação QA');
  cy.get('h1.text-center.text-2xl').should('contain.text', 'Lista de Produtos');
  cy.contains('Produtos Cadastrados').should('be.visible');
  cy.get('button.bg-blue-500').should('have.text', 'Adicionar Produto');
});

Cypress.Commands.add('preencherFormularioProduto', (nome, preco, descricao) => {
  cy.get('input[name="name"]').clear().type(nome);
  cy.get('input[name="price"]').clear().type(preco);
  cy.get('textarea[name="description"]').clear().type(descricao);
});

Cypress.Commands.add('cadastrarProdutoAleatorio', () => {
  const { nome, preco, descricao } = gerarProdutoFake();

  cy.contains('button', 'Adicionar Produto').click();
  cy.get('h2.text-center.mb-4').should('have.text', 'Cadastrar Produto');
  cy.preencherFormularioProduto(nome, preco, descricao);
  cy.get('button[type="submit"]').should('have.text', 'Salvar').click();

  return cy.wrap({ nome, preco, descricao });
});

Cypress.Commands.add('validarProdutoNaLista', (produto) => {
  cy.contains('li', produto.nome)
    .should('be.visible')
    .within(() => {
      cy.contains(produto.preco).should('be.visible');
      cy.contains('button', 'Editar').should('be.visible');
      cy.contains('button', 'Excluir').should('be.visible');
    });
});

Cypress.Commands.add('validarProdutoAdicionado', (produto) => {
  cy.contains('li', produto.nome)
    .should('be.visible')
    .within(() => {
      cy.contains(produto.preco).should('be.visible');
    });
});

Cypress.Commands.add('excluirProduto', (produto) => {
  cy.contains('li', produto.nome)
    .should('be.visible')
    .within(() => {
      cy.contains('button', 'Excluir').should('be.visible').click();
    });
});

Cypress.Commands.add('editarProduto', (novoNome, novaDescricao) => {
  cy.contains('button', 'Editar').should('be.visible').click();
  cy.get('input[name="name"]').clear().type(novoNome);
  cy.get('textarea[name="description"]').clear().type(novaDescricao);
  cy.get('button[type="submit"]').should('have.text', 'Salvar').click();
});

Cypress.Commands.add('validarMensagensObrigatorias', () => {
  cy.contains('Nome é obrigatório').should('be.visible');
  cy.contains('Preço deve ser positivo').should('be.visible');
});
