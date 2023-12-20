/*culadora de IMC (Índice de Massa Corporal)**
    
    Imagine que você está criando uma calculadora de IMC para um aplicativo de saúde. Desenvolva uma função chamada **`calcularIMC`** que recebe o peso (em quilogramas) e a altura (em metros) como parâmetros e retorna o IMC calculado.
    
    - Defina a função **`calcularIMC`** que aceita dois parâmetros: **`peso`** e **`altura`**.
    - Dentro da função, calcule o IMC usando a fórmula: IMC = peso / (altura * altura).*/

function calcularIMC(peso, altura){
    let imc = peso/ (altura * altura)
    return imc.toFixed(2)
}

imcCalculo  = calcularIMC(80, 1.75)
console.log(`O IMC é de ${imcCalculo }`)