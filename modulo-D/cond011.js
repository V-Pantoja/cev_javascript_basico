let horarioSistema, hora, min, sec

horarioSistema = new Date() //Pegar informaçoes do sistema em que está rodando seu script

hora = horarioSistema.getHours()
min = horarioSistema.getMinutes()
sec = horarioSistema.getSeconds()

horaCompleta = `${hora}:${min}:${sec}`


console.log(`Agora são exatamente ${horaCompleta} Hrs`)

if (hora > 5 && hora < 12) {
  console.log('Good Morning!')
} else if (hora >= 12 && hora < 19) {
  console.log('Good Afternoon!')
} else if (hora >= 19 && hora < 24) {
  console.log('Good Night')
} else {
  console.log('Good Dawn')
}
