function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    var hora = 10
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'bomdia.png'
        document.body.style.background = "#e2cd9f"

    } else if(hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'boatarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = "imagens/boanoite.png"
        document.body.style.background = '#515154'
    }
}

