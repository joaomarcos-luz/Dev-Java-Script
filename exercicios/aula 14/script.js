function carregar(){
    var img = document.getElementById('imagem')
    var msg = document.getElementById('frase')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
 
    if (hora >= 0 && hora < 12){
        img.src = 'dia.jpg'
        document.body.style.backgroundColor = "#beae84"
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = "#9c705d"
    }else{
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = "#444546"
    }
}