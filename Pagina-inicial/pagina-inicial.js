let time = 3000
let currentImageIndex = 0
let images = document.querySelectorAll("#mundos img")
let max = images.length

function nextImage() {

images[currentImageIndex].classList.remove("selected")

 currentImageIndex++
  if(currentImageIndex >= 7)
  currentImageIndex = 0
  images[currentImageIndex].classList.add("selected")
    
   
}
function start() {
    setInterval(() => {
        nextImage()
    },time)
        
        
}

window.addEventListener("load", start)
    
