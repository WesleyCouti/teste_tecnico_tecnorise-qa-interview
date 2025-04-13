import { faker } from '@faker-js/faker';

export function gerarProdutoFake() {
  const nome = faker.commerce.productName();
  const preco = faker.commerce.price({ min: 1, max: 1000, dec: 2 });
  const descricao = faker.lorem.words(10);

  return { nome, preco, descricao };
}
