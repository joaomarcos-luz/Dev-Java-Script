var agora = new Date
var horas = agora.getHours()
    if (horas <= 5 && horas >= 0){
        console.log('Bom Madrugada')
    } else if (horas <= 12){
        console.log('Boa Dia')
    }   else if (horas <= 18){
            console.log('Boa Tarde')
    }       else {
                console.log('Boa Noite')
    }