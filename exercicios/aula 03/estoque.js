
const produtosEstoque = [
  { nome: "Camiseta", quantidadeEmEstoque: 15, precoUnitario: 25, disponivel: true },
  { nome: "Sapato", quantidadeEmEstoque: 8, precoUnitario: 80, disponivel: true },
  { nome: "Fone de Ouvido", quantidadeEmEstoque: 5, precoUnitario: 50, disponivel: true }
];

const fornecedores = [
  { nome: "Fornecedor1", idade: 20, produtosFornecidos: ["Camiseta", "Sapato"] },
  { nome: "Fornecedor2", idade: 35, produtosFornecidos: ["Fone de Ouvido"] },
  { nome: "Fornecedor3", idade: 40, produtosFornecidos: ["Camiseta", "Sapato", "Fone de Ouvido"] }
];

const fornecedorEncontrado = fornecedores.find(
  fornecedor => fornecedor.idade >= 25 && fornecedor.idade <= 40 && fornecedor.produtosFornecidos.length >= 2
);

if (fornecedorEncontrado) {
  console.log("Fornecedor Encontrado:", fornecedorEncontrado);
} else {
  console.log("Nenhum fornecedor encontrado.");
}

const todosDisponiveis = fornecedorEncontrado && fornecedorEncontrado.produtosFornecidos.every(
  produto => produtosEstoque.find(item => item.nome === produto)?.disponivel
);

if (todosDisponiveis) {
  console.log("Todos os produtos fornecidos estão disponíveis.");
} else {
  console.log("Alguns produtos fornecidos não estão disponíveis.");
}

const produtosDisponiveisEstoque = produtosEstoque.filter(
  produto => produto.disponivel && produto.quantidadeEmEstoque >= 10
);
console.log("Produtos Disponíveis com Estoque >= 10:", produtosDisponiveisEstoque)