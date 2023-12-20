//Remover ultimo item de um array
const torreDeCartas = ["A", "2", "3", "4", "5", "J"];
const removido = torreDeCartas.pop()
console.log(torreDeCartas)
console.log(removido)

//Encontra a palavra tesouro dentro do array
const mapa = ["Floresta", "Montanha", "Caverna", "Tesouro", "Rio"];
console.log(mapa.find(o => o == 'Tesouro'))

//remover primeiro item do array
const pilhaDomino = [ [3, 6], [1, 4], [5, 5], [2, 3] ];
const remover = pilhaDomino.shift()
console.log(pilhaDomino)
console.log(remover)

//Organizar array em ordem alfabetica
const livros = ["Harry Potter", "Senhor dos Anéis", "1984", "A Revolução dos Bichos"];
livros.sort()
console.log(livros)

//Removendo itens indesejados
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = numeros.splice(4, 1)
console.log(numeros)


/*# If/Else
Verificando acesso a festa*/

let idadeClient = 19

if (idadeClient >= 18){
    console.log('Acesso Permitido.')
}else{
    console.log('Acesso Negado.')
}

//decidir o caminho dia de chuva e de sol.

let dia = 'Chuva'

if (dia == 'Chuva') {
    console.log('Leve um guarda-chuva!')
} else {
    console.log("Vá de bicicleta!")
}

//Consultor Financeiro
let saldo = 1000
let compra = 100

posCompra = 1000- 100

if (saldo > compra) {
    console.log(`Compra no valor ${compra}, saldo restamte ${posCompra}.`)
}else{
    console.log('Compa não altorizada!')
}

//Nivel de energia do atleta
 
let energia = 5

if (energia <= 3){
    console.log('Periodo de descasar')
} else if (energia <= 6){
    console.log('Treino moderado')
} else {
    console.log('Treino normal')
}


//Switch

let fruta = 'banana'

switch (fruta) {
    case 'maçã':
        console.log('maçã: As maçãs são ricas em fibras e antioxidantes.')
        break
    case 'banana':
        console.log('banana: Bananas são uma excelente fonte de potássio.')
        break
    case 'uva':
        console.log('uva: Uvas contêm antioxidantes e são boas para o coração.')
        break
    case 'laranja':
        console.log('laranja: Laranjas são ricas em vitamina C, ótima para o sistema imunológico.')
        break
        default:
            console.log('Todas as frutas são saudaveis.')
}

//Qual atividade fazer
let começaDia = 'cozinhar'

switch (começaDia){
    case 'ler um livro':
        console.log('Aproveitar para ler um bom livro')
        break
    case 'praticar esportes':
        console.log('Aproveitar para exercitar o corpo')
        break
    case 'assistir a um filme':
        console.log('Aproveitar para ver um bom filme')
        break
    default:
        console.log('Aproveitar para testar uma boa receita ')
}

//Desconto na compra
let client ='vip'
let cmpr = 200
let valor 

switch (client){
    case 'normal':
        let des1 = cmpr / 5
        valor = cmpr - des1
        console.log(`Valor da compra ${cmpr}, valor com desconto de 5%: ${valor.toFixed(2)}`)
        break
    case 'premium':
        let des2 = cmpr / 10
        valor = cmpr - des2
        console.log(`Valor da compra ${cmpr}, valor com desconto de 10%: ${valor.toFixed(2)}`)
        break
    case 'vip':
        let des3 = cmpr / 15
        valor = cmpr - des3
        console.log(`Valor da compra ${cmpr}, valor com desconto de 15%: ${valor.toFixed(2)}`)
        break
}
//faixa de numero
let numero = 10

switch (true){
    case numero >= 1 && numero <= 10:
        console.log('Faixa 1: Números de 1 a 10.')
        break
    case numero >= 11 && numero <= 20:
        console.log('Faixa 2: Números de 11 a 20.')
        break
    case numero >= 21 && numero <= 30:
        console.log('Faixa 3: Números de 21 a 30.')
        break
    case numero > 30:
        console.log('Faixa 4: Números maiores que 30.')
        break
    default:
        console.log('Valor não inforado.')
}

//Coalescência
//Compra de livro

let numeroDeLivros = null
let quantidadeTotal = numeroDeLivros ?? 1;

console.log(`Quantidade total de livros: ${quantidadeTotal}`);

//nome produto
let nomeProduto = null
let nomeFinal = nomeProduto ?? "Produto sem Nome";

console.log(`Nome do produto: ${nomeFinal}`);
