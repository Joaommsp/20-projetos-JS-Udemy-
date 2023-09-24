function clock () {
  let hours = document.getElementById('hora')
  let minutes = document.querySelector('.min')
  let seconds = document.querySelector('.sec')

  let date = new Date()
  let hour = date.getHours().toString().padStart(2, '0')
  let min = date.getMinutes().toString().padStart(2, '0')
  let sec = date.getSeconds().toString().padStart(2, '0')
  
  hours.textContent = hour
  minutes.textContent = min
  seconds.innerText= sec

  console.log(hour, min, minutes)
}

setInterval( clock , 1000)