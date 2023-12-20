function saudacao(nome, curso='HTML'){
    console.log(`Ola, ${nome} seja bem vinda(o) ao curso de ${curso}`)
}

saudacao('joao')

//Retorno da funcao

function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(10, 10)

console.log(resultado / 2)

function maiorQue(numero){
    if(numero > 50){
        return true
    }
    return false
}

let res = maiorQue(20)

console.log(res)