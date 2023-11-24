let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
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
    }e
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado,`
        
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else {
        window.alert('Valor invalido ou Já encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de começar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        media = soma / tot

        res.innerHTML = '';
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado é:${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado é; ${menor}</p>`;
        res.innerHTML += `<p>Somando todos valores temos: ${soma}</p>`;
        res.innerHTML += `<p>A media de todos os valore é: ${media}</p>`;
    }
}
