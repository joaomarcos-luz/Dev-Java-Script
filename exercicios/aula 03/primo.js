function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;4
}

// Imprimir números primos no intervalo de 1 a 20
console.log("Números primos no intervalo de 1 a 20:");

for (let currentNumber = 1; currentNumber <= 20; currentNumber++) {
    if (isPrime(currentNumber)) {
        console.log(currentNumber);
    }
}