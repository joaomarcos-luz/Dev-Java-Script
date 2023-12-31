/*Conversor de Temperatura**
    
    Em um aplicativo de clima, é necessário converter temperaturas entre Celsius e Fahrenheit. Crie uma função chamada **`converterTemperatura`** que recebe a temperatura e a unidade (Celsius ou Fahrenheit) como parâmetros e retorna a temperatura convertida.
    
    - Defina a função **`converterTemperatura`** que aceita dois parâmetros: **`temperatura`** e **`unidade`**.
    - Dentro da função, converta a temperatura de Celsius para Fahrenheit se a unidade for "C", e de Fahrenheit para Celsius se a unidade for "F".*/

    function converterTemperatura(temperatura, unidade){
        if (unidade === 'C'){
            return (temperatura * 9 / 5) + 32
        }else if (unidade === 'F'){
            return (temperatura - 32) * 5 / 9
        }else{
            return 'Únidade de temperatura invalida.'
        }  
    }

    const temperaturaConvertida = converterTemperatura(25, 'C')
    console.log(`Temperatura convertida: ${temperaturaConvertida} ºF`)