
const usuario = {
    nome: "Alice",
    idade: 28,
    email: "alice@example.com"
  };

for (let itens in usuario){
    console.log(itens + ": " + usuario[itens])
}