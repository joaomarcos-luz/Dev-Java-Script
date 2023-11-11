function contar() {
    let ini = document.getElementById('txti').value;
    let fim = document.getElementById('txtf').value;
    let passo = document.getElementById('txtp').value;
    let res = document.getElementById('res');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = '<p>Impossivel contar!</p>'
        //window.alert('[Erro] Faltam dados!');
    } else {
        res.innerHTML = '<p><br>Contando:</br></p>';
        let i = Number(ini);
        let f = Number(fim);
        let p = Number(passo);
        if (p <= 0){
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for ( let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //Contagem Regressiva
            for ( let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}