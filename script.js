function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

    if (hora >= 0 && hora <= 12 ) {
        //bom dia
        img.innerHTML = "<img src='images/manha.png'>"
        document.body.style.background = "#FDFEFF"
    } else if(hora > 12 && hora < 18) {
        //boa tarde
        img.innerHTML = "<img src='images/tarde.png'>"
        document.body.style.background ="#BC381E"
    } else{
        //boa noite
        img.innerHTML = "<img src ='images/noite.png'>"
        document.body.style.background = "#211F20"
    }
      
  }
  