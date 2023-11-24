let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado,`

        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert('Valor invalido ou já existente na lista!')
    }
    num.value = ``
    num.focus()
}

function finalizar(){
    if(valores.length === 0){
        window.alert('Adicione um valor para iniciar.')
    }else{
        let dados = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let total = 0
        let media = 0

        for(let i in valores){
            total += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }

        media = total / dados

        res.innerHTML += ``
        res.innerHTML += `<p>Temos ${dados} de dados adicionados</p>`
        res.innerHTML += `<p>O maior valor informado é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos valores é: ${total}</p>`
        res.innerHTML += `<p>A media de todos valores é: ${media}</p>`
    }
}