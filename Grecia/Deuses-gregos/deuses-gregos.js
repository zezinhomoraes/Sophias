
const abrirMenu = document.getElementById("menu-icon")
abrirMenu.addEventListener('click', (evt)=>{

  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  }else{(menu.style.display == 'block')
  menu.style.display = 'none'
  }
})


// PROGRAMANDO BARRA DE BUSCA.........

// BUSCA NAO ENCONTRADA
const messageError = document.querySelector(".conteiner")
const message = document.createElement("h1")
message.innerHTML="OPS! NÃO ENCONTRADO.</BR>VERIFIQUE OS ACENTOS."
message.style.cssText="color: #fff; font-size: 30px;"

// REALIZANDO BUSCA
const pesquisa = document.getElementById("iPesquisa")
const busca = document.querySelector("#icone")
const conteudo_naoSelect = [...document.querySelectorAll(".conteudo")]
busca.addEventListener('click',(evt)=>{
  conteudo_naoSelect.map((e)=>{e.classList.add('nao_pesquisado')})
  let valorError = [] 
  const conteudo_select = [...document.querySelectorAll(".conteudo h3")]
  conteudo_select.find((e)=>{
    const valorPesquisado= pesquisa.value.toLowerCase()
    const valorEncontrado =  e.innerHTML.toLowerCase()
    if(valorPesquisado === valorEncontrado ){
      messageError.appendChild(message)
      e.parentElement.classList.remove("nao_pesquisado")
      messageError.removeChild(message)
    }else{
     valorError.push(e)
    }
  })
  if(valorError.length == 11){
    messageError.appendChild(message)
  }
})

pesquisa.addEventListener("input", (evt)=>{ 
  conteudo_naoSelect.map((e)=>{
    if(pesquisa.value.length === 0){
      e.classList.remove('nao_pesquisado')
    }
  })
  if(pesquisa.value.length === 0){
    messageError.appendChild(message)
    messageError.removeChild(message)
  }
})