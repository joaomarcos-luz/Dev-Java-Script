/*Desenvolva uma função somaImpares que recebe um array de números inteiros e retorna a soma de todos os números ímpares no array.*/ 

function somaImpares(numeros){
    for (const num of numeros) {
       if(num % 2 === 1){
        res += num 
       }
    }
    return res 
}


let res = 0

const numeros = [1, 2, 3, 4, 5, 6];
const soma = somaImpares(numeros);
console.log(soma); 