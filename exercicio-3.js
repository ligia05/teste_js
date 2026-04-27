let nomeproduto = "notebook";
let preco = 2500;
let quantidade = 10;
let produtoAtivo = true;
let temDesconto = false;
let categoria = "Eletronico" && preco > 2000;

//1. mostrando os dados do produto
console.log("o produto é um " + nomeproduto);
console.log(
  "preço: R$ " + preco + "| Estoque disponivel: " + quantidade + " unidades"
);

//iten 2 mostrando quantidade
if (quantidade > 0) {
  console.log("Produto disponivel");
} else {
  console.log("Produto indisponivel");
}
// item 3
if (produtoAtivo && quantidade > 0) {
  console.log("Pode vender");
} else {
  console.log("nao pode vender");
}
if (preco > 1000) {
  console.log("maior que 1000");
} else {
  console.log("nao compre, muito barato");
}
if (!produtoAtivo || quantidade == 0) {
  console.log("esgotado");
} else {
  console.log("Produto disponivel");
}
if (categoria) {
  console.log("categoria: " + categoria);
  console.log("analise: produto premium ");
} else {
  console.log("produto popular");
}
