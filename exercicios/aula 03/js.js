function respostasAoUsuario(pergunta) {
    switch (pergunta.toLowerCase()) {
        case "qual é o horário de funcionamento?":
            return "Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h.";
        case "como faço para entrar em contato?":
            return "Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com.";
        case "onde fica a loja física?":
            return "Nossa loja física está localizada na Rua Principal, número 123, na cidade X.";
        default:
            return "Desculpe, não entendi sua pergunta. Pode tentar novamente?";
    }
}

console.log(respostasAoUsuario("Qual é o horário de funcionamento?"));
console.log(respostasAoUsuario("Como faço para entrar em contato?"));
console.log(respostasAoUsuario("Onde fica a loja física?"));