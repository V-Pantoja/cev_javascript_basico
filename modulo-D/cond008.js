// F8 para executar o programa

let vel = 88

console.log(`Sua velocidade atual é: ${vel} Km/h`)
console.log(" - - - - - - - - - - - - - - - - - - ")

if (vel >= 50 && vel <= 60) {
   console.log(`Velocidade razoável de ${vel} Km/h`)
} else if (vel > 60 && vel <= 70) {
   console.log(`Cuidado com a sua velocidade de ${vel} km/h para via arterial (max 70)`)
}  else if (vel > 70) {
   console.log(`MULTADO!`)
   console.log('Velocidade max. permitida (70 Km/h)')
   console.log(`Sua velocidade é de ${vel} Km/h`)
} else {
   console.log('DIRIJA COM CUIDADO SEMPRE!')
}

console.log(" - - - - - - - - - - - - - - - - - - ")
console.log('Use SEMPRE o cinto de segurança!')
