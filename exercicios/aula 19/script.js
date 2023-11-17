let num = [9, 6, 2, 4]

num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`Vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é: ${num[0]}`)

let pos = num.indexOf(4) 
if (pos <= -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}
