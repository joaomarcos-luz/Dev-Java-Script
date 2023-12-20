/*Planejando Viagens pelo Tempo**
    
    Imagine que você está desenvolvendo um aplicativo para uma máquina do tempo. Neste contexto, você precisa criar uma função chamada **`calcularIdadeViajanteTempo`** que recebe o ano de nascimento e o ano em que a pessoa viajou no tempo, e retorna a idade da pessoa na época em que ela chegou.
    
    - Defina a função **`calcularIdadeViajanteTempo`** que aceita dois parâmetros: **`anoNascimento`** e **`anoViajado`**.
    - Dentro da função, calcule a idade da pessoa na época da viagem no tempo.
    - Considere que a máquina do tempo não leva em conta anos bissextos para simplificar o cálculo.*/

function calcularIdadeViajanteTempo(anoNascimento, anoViajado){
    let idade = anoViajado - anoNascimento
    return idade 
}

let idadeViajante = calcularIdadeViajanteTempo(1996, 2023)
console.log(`A idade do viajante na época da viagem no tempo: ${idadeViajante} `) 