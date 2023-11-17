function tabuada() {
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');

    if (num.length === 0 || isNaN(num)) {
        console.log('Número inválido');
        window.alert('Por favor, digite um número válido');
        } else {
        num = Number(num);
        let c = 1;

        tab.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}