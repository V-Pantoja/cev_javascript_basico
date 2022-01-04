function verificar() {
  let data, anoAtual, anoNasc, idade;
  let sexo, genero, resultado;
  let imagem;

  data = new Date()
  anoAtual = data.getFullYear() // FullYear pega os 4 digitos do ano
  anoNasc = Number(document.getElementById('ano-n').value)
  resultado = document.querySelector('div#res')

  if (anoNasc.length == 0 || anoNasc > anoAtual) {
    window.alert('Verifique os dados e tente novamente!')
  } else {
    sexo = document.getElementsByName('radsex') // [0] Masculino - [1] Feminino
    idade = anoAtual - anoNasc

    imagem = document.createElement('img') // Criou a tag <img> no html
    imagem.setAttribute('id', 'foto') // Adiciona na tag um id="foto"

    if (sexo[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        imagem.setAttribute('src', './img/bebe-m-1.png')
      } else if (idade < 21) {
        // Jovem
        imagem.setAttribute('src', './img/homem-jovem-1.png')
      } else if (idade < 50) {
        // Adulto
        imagem.setAttribute('src', './img/homem-adulto-1.png')
      } else {
        // Idoso
        imagem.setAttribute('src', './img/homem-idoso-1.png')
      }

    } else if (sexo[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        imagem.setAttribute('src', './img/bebe-f-1.png')
      } else if (idade < 21) {
        // Jovem
        imagem.setAttribute('src', './img/mulher-jovem-1.png')
      } else if (idade < 50) {
        // Adulto
        imagem.setAttribute('src', './img/mulher-adulta-negra-1.png')
      } else {
        // Idoso
        imagem.setAttribute('src', './img/mulher-idosa-1.png')
      }

    }

    resultado.innerHTML = `Detectado ${genero} com ${idade} anos.`
    resultado.appendChild(imagem)
  }
}
