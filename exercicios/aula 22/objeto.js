let amigo = {
    nome:'João',
    sexo:'Masculino',
    peso: 90.05, 
    altura: 1.75,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)