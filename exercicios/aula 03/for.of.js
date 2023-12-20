const transacoes = [120, -50, 30, -20, 40];
let somaTotal = 0;

for (const transao of transacoes) {
    somaTotal += transao;
}

console.log(`A soma total das transações é: ${somaTotal}`);