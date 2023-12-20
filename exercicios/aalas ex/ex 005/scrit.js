let = pessoa = {
    nome: 'joao',
    idade: 27,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa['nome'])

pessoa.altura = 1.77

console.log(pessoa.altura)

delete pessoa.altura

console.log(pessoa)

for (let chave in pessoa){
    console.log(chave)
}