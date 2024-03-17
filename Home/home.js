


// Evento Click para Abrir Menu

function clickMenu(){
  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  }else{(menu.style.display == 'block')
    menu.style.display = 'none'
}
}

// Evento Click nos Cards

const mitologyCard = [...document.querySelectorAll('main')]
mitologyCard.map((e,) => {
   e.addEventListener('click', (card) => {
  const cardClick = card.target.parentNode.parentNode
    cardClick.classList.toggle('cardJS')
 })
})


