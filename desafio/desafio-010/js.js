/*  
    Você está construindo um sistema de análise de dados e precisa criar uma função chamada **`analisarNumeros`** que recebe uma lista de números como parâmetro e retorna informações sobre essa lista, como soma, média e maior número.
    
    - Defina a função **`analisarNumeros`** que aceita um parâmetro **`numeros`**, uma lista de números.
    - Dentro da função, calcule e retorne a soma, a média e o maior número da lista.
*/

const analisarNumeros = (numeros) => { // Usando Arrow Functions
    let soma = 0
    let maiorNumero = numeros[0]

    for (const numero of numeros){ //Usando for Of para percorrer p array
        soma += numero 

        if(numero > maiorNumero){
            maiorNumero = numero
        }
    }

    let media = soma / numeros.length

    return{ 
        soma: soma,
        media: media.toFixed(2),
        maiorNumero: maiorNumero
    }
}

const resAnalise = analisarNumeros([2, 10, 20, 5, 8, 35, 1])

console.log(`Soma: ${resAnalise.soma}`)
console.log(`Media: ${resAnalise.media}`)
console.log(`Maior Número: ${resAnalise.maiorNumero}`)