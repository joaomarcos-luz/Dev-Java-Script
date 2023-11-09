function tabuada(){
    let res = document.getElementById('resp')
    let n1 = document.getElementById('n1').value

    if(n1 = n1){
        res.innerHTML = ` `
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `<p>${n1} x ${c} = ${n1 * c}</p>`
      }
    }else{
        alert('Digite um numero para continuar!')
    } 
}