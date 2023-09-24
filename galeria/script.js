let galleryItem = document.querySelectorAll('.gallery-item')
let lightbox = document.querySelector('.lightbox')
let lightboxImg = document.querySelector('.lightbox-image')
let close = document.querySelector('.lightbox-close')

galleryItem.forEach((item) => {
  item.addEventListener('click', () => {
    let imgUrl = item.querySelector('.gallery-image').getAttribute('data-src')
    lightboxImg.setAttribute('src', imgUrl)
    lightbox.style.display = "flex"
  })
})

close.addEventListener('click', () => {
 lightbox.style.display = 'none' 
})