let arr = ['joao', 27, 1.75, true]

console.log('Primeiro elemento', arr[0])
console.log('Primeiro elemento', arr[1])
console.log('Primeiro elemento', arr[2])
console.log('Primeiro elemento', arr[3])

console.log('Tamanho do Array:', arr.length)

console.clear()

for ( let i = 0; i <= arr.length; i++){
    console.log(arr[i])
}

console.clear()

for (elemento of arr){
    console.log(elemento)
}

console.clear()

for (let variavel in arr){
    console.log(variavel)
}

console.clear

for (let indice in arr){
    console.log(indice , arr[indice])
}
