const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')

const relogio = setInterval(function time(){ 
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

   if (hr < 10) hr = '0' + hr
   if (min < 10) min = '0' + min
   if (sec < 10) sec = '0' + sec



    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})

//setInterval será a função tempo, que irá pegar as horas , minutos e segundos. Usamos dateToday e pegamos as horas, minutos e segundos usando o get

//textContent serve para mudar o texto

//usamos o if para ajustar os segundos, para que apareça o zero  antes, quando estiver de 0 a 9 segundos. E a mesma coisa com as horas.. quando for menor que 10.. vai aparecer o zero a esquerda.