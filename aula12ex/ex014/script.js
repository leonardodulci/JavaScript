function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    


    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'aula12ex/ex014/bomdia.png'
    } else if(hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'aula12ex/ex014/boatarde.png'
    } else {
        //boa noite
        img.src = 'boanoite.png'
    }
}

