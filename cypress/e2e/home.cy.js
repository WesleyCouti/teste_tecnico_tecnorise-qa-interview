import { faker } from '@faker-js/faker';
import { gerarProdutoFake } from '../support/helpers/produtoHelper';

describe('initial application validations', () => {
  beforeEach(() => {
    cy.validateSiteIsOnline();
  });

  it('register a new product successfully', () => {
    cy.cadastrarProdutoAleatorio().then((produto) => {
      cy.validarProdutoNaLista(produto);
      cy.excluirProduto(produto);
      cy.contains(produto.nome).should('not.exist');
    });
  });

  it('edit information for an existing product', () => {
    const nometrocado = faker.commerce.productName();
    const trocardescricao = faker.lorem.words(10);

    cy.cadastrarProdutoAleatorio().then((produto) => {
      cy.validarProdutoNaLista(produto);
      cy.editarProduto(nometrocado, trocardescricao);
      cy.contains(nometrocado).should('be.visible');
      cy.contains(trocardescricao).should('be.visible');
      cy.excluirProduto({ nome: nometrocado });
      cy.contains(nometrocado).should('not.exist');
    });
  });

  it('validate mandatory fields', () => {
    const { nome, preco, descricao } = gerarProdutoFake();
    
    cy.contains('button', 'Adicionar Produto').click();
    cy.get('h2.text-center.mb-4').should('have.text', 'Cadastrar Produto');
    cy.get('button[type="submit"]').should('have.text', 'Salvar').click();
    cy.validarMensagensObrigatorias();
    cy.preencherFormularioProduto(nome, preco, descricao);
    cy.get('button[type="submit"]').click();
    cy.contains('li', nome).should('be.visible');
    cy.contains('button', 'Excluir').click();
  });

  it('should not register product when clicking cancel', () => {
    const { nome, preco, descricao } = gerarProdutoFake();
    
    cy.contains('button', 'Adicionar Produto').click();
    cy.get('h2.text-center.mb-4').should('have.text', 'Cadastrar Produto');
    cy.preencherFormularioProduto(nome, preco, descricao);
    cy.get('input[name="name"]').should('have.value', nome);
    cy.get('input[name="price"]').should('have.value', preco);
    cy.get('textarea[name="description"]').should('have.value', descricao);
    cy.contains('button', 'Cancelar')
      .should('be.visible')
      .click();
    cy.contains(nome).should('not.exist');
  });

  it('displays error and blocks submission when price is negative', () => {
    const { nome, preco, descricao } = gerarProdutoFake();
    
    cy.contains('button', 'Adicionar Produto').click();
    cy.get('h2.text-center.mb-4').should('have.text', 'Cadastrar Produto');
    cy.get('input[name="name"]').clear().type(nome);
    cy.get('input[name="price"]').clear().type(-1);
    cy.get('textarea[name="description"]').clear().type(descricao);
    cy.get('button[type="submit"]').should('have.text', 'Salvar').click();
    cy.contains('Preço deve ser positivo').should('be.visible');
    cy.get('input[name="price"]').clear().type(preco);
    cy.contains('button', 'Cancelar')
      .should('be.visible')
      .click();
    cy.contains(nome).should('not.exist');
  });

});
