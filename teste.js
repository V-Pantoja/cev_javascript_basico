var car = 69

if(car > 50 && car < 60) {
   console.log(`Sua velocidade atual é > ${car} < `)
} else if(car > 60 && car < 70) {
   console.log(`Você está um pouquinho rapido, ATENÇÃO!`)
} else if(car > 70) {
   console.log(`VELOCIDADE MAXIMA ULTRAPASSADA`)
   console.log(`Sua velocidade foi de > ${car} <`)
} else {
   console.log('BOA VIAGEM!')
}
