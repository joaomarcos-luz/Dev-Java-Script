function contar(){
    let ini = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let pas = Number(document.getElementById('passe').value);
    let res = document.getElementById('resp')

    res.innerHTML = '<p>Contando...</p>'

    while (ini <= fim){
        res.innerHTML += `${ini} 👉 `
        ini += pas
    }
    res.innerHTML += '&#127937; '
}