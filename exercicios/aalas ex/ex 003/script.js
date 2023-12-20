let arr = [30, 12, 45, 34, 29]
let arr2 = []

console.log(arr.slice)

console.clear()

arr2.push(10)

console.log('Vai adicionar ao final',arr2)

arr2.unshift(0)

console.log('Vai adicionar ao iniio', arr2)

console.clear

console.log('Antes de remover com o pop', arr2)

let inicioremovido = arr2.pop()

console.log('Removeu o final', inicioremovido)

let remove = arr2.shift()

console.log('Remove o inicio', remove)

console.clear()

let arr1 = [1, 2, 3]

console.log(arr)
console.log(arr1)

console.log(arr.concat(arr1))

console.log(arr1.concat(arr))

console.clear()

console.log(arr1)

let indiceDoElemento3 = arr1.indexOf(3)

console.log(indiceDoElemento3)

console.clear()

let arr3 = [1, 2, 3, 3, 3]

console.log(arr3)

console.log(arr3.lastIndexOf(3))

console.clear()

console.log(arr3)
//retorna falso
console.log(arr3.includes(10))
//retorna verdadeiro
console.log(arr3.includes(1))


//inverter o array
console.log(arr3)

let inverterArr3 = arr3.reverse()

console.log(inverterArr3)

