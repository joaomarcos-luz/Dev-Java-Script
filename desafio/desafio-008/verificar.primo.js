/*Verificador de Primo**
    
    Em um sistema matemático, é necessário verificar se um número é primo. Crie uma função chamada **`ehPrimo`** que recebe um número como parâmetro e retorna verdadeiro se o número for primo e falso se não for.
    
    - Defina a função **`ehPrimo`** que aceita um parâmetro **`numero`**.
    - Dentro da função, verifique se o número é primo. Se for, retorne **`true`**; caso contrário, retorne **`false`*/

function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(ehPrimo(17));
  console.log(ehPrimo(10));