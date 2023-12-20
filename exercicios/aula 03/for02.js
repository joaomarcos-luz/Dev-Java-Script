const notas = [8, 7, 6, 9, 5]
let soma = 0
let med = 0

for (cont = 0 ; cont < notas.length ; cont++){
    soma += notas[cont]
    med = soma / notas.length
}
console.log(`A media do aluno é ${med}`)