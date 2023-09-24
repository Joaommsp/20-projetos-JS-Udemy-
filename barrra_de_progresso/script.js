let bar = document.querySelector('.progress')
let previosBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('nextBtn')

let progress = 0

function updateBar(percent) {
  progress += percent
  if(progress > 100) {
    progress = 100
  }
  else if(progress < 0) {
    progress = 0
  }
  console.log(progress)
  bar.style.setProperty("width", progress + "%")
}

nextBtn.addEventListener('click', () => {
  updateBar(10)
})
previosBtn.addEventListener('click', () => {
  updateBar(-10)
})