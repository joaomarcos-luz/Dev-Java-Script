function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resp')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente Novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = `Homem`
            if(idade >=0 &&  idade <= 12){
                img.setAttribute('src' , 'crianca-me-00.jpg')
            }else if(idade < 21){
                img.setAttribute('src' , 'adole-me-03.jpg')
            }else if(idade < 50){
                img.setAttribute('src' , 'homem-05.jpg')
            }else{
                img.setAttribute('src' , 'idoso-hom-07.jpg')
            }
        }else if (fsex[1].checked){
            genero = `Mulher`
            if(idade >=0 &&  idade <= 12){
                img.setAttribute('src' , 'crianca-fe-02.jpg')
            }else if(idade < 21){
                img.setAttribute('src' , 'adole-fe-04.jpg')
            }else if(idade < 50){
                img.setAttribute('src' , 'mulher-06.jpg')
            }else{
                img.setAttribute('src' , 'idosa-mul-08.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos de ${genero} de ${idade} anos`
        res.appendChild(img)
    }
} 