/*Gerador de Senhas Aleatórias**
    
    Para um sistema de segurança, você precisa criar um gerador de senhas aleatórias. Desenvolva uma função chamada **`gerarSenhaAleatoria`** que não recebe parâmetros e retorna uma senha aleatória composta por letras maiúsculas, letras minúsculas e números.
    
    - Defina a função **`gerarSenhaAleatoria`** sem parâmetros.
    - Dentro da função, crie uma senha aleatória de oito digitos combinando letras maiúsculas, minúsculas e números.*/

function gerarSenhaAleatoria() {
    // Caracteres possíveis para a senha
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Tamanho da senha desejada
    const tamanhoSenha = 8;

    let senhaAleatoria = "";

    // Loop para gerar a senha
    for (let i = 0; i < tamanhoSenha; i++) {
        // Escolhe aleatoriamente um caractere da string de caracteres
        const caractereAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));

        // Adiciona o caractere à senha
        senhaAleatoria += caractereAleatorio;
    }

    return senhaAleatoria;
}

// Exemplo de uso
const senhaGerada = gerarSenhaAleatoria();
console.log(senhaGerada);