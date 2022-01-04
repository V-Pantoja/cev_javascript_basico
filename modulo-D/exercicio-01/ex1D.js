function carregar() {  
  let msg, img, sistemaInf, hora, min;

  msg = document.getElementById('msg')
  img = document.getElementById('imagem')

  sistemaInf = new Date()
  hora = sistemaInf.getHours()
  min = sistemaInf.getMinutes()

  msg.innerHTML = `Agora são <strong>${hora}:${min}</strong>`

  if (hora >= 5 && hora <= 12) {
    //Manhã
    img.src = './img/manha-sol-peq.png'
    document.body.style.background = '#fdc100'

  } else if (hora > 12 && hora <= 17) {
    //Tarde
    img.src = './img/tarde-flor-peq.png'
    document.body.style.background = '#3faabc'

  } else if (hora > 17 && hora <= 19) {
    //+Tarde
    img.src = './img/noite-passaros-lago-peq.png'
    document.body.style.background = '#391d33'

  } else if (hora > 19 && hora <= 24) {
    //Noite
    img.src = './img/noite-cidade-lua-peq.png'
    document.body.style.background = '#002e30'

  } else {
    //Madrugada
    img.src = './img/madrugada-ceu-peq.png'
    document.body.style.background = '#051024'

  }
}
