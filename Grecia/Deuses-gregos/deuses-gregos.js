
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
const conteiner = document.querySelector(".conteiner")
const message = document.createElement("h1")
message.innerHTML="OPS! NÃO ENCONTRADO.</BR>VERIFIQUE OS ACENTOS."
message.style.cssText="color: #fff; font-size: 30px;"

// REALIZANDO BUSCA

const pesquisa = document.getElementById("iPesquisa")
const busca = document.querySelector("#icone")
const conteudo_naoSelect = [...document.querySelectorAll(".conteudo")]
const conteudo_select = [...document.querySelectorAll(".conteudo h3")]

busca.addEventListener('click',(evt)=>{
  conteudo_naoSelect.map((e)=>{e.classList.add("nao_pesquisado")})
  const resultadoBusca = conteudo_select.find((e)=>{
    const pR = pesquisa.value.toLowerCase()
    const pE = e.innerHTML.toLowerCase()
    if(pR === pE){
      return e
    }
  })
  
  try{
    resultadoBusca.parentElement.classList.remove("nao_pesquisado")
    conteiner.removeChild(message)
  }catch(error){
    if(!(resultadoBusca)){
      conteiner.appendChild(message)
    }
  }
})



pesquisa.addEventListener("input", (evt)=>{ 
  conteudo_naoSelect.map((e)=>{
    if(pesquisa.value.length === 0){
      e.classList.remove('nao_pesquisado')
      try{
        conteiner.removeChild(message)
      }catch(error){

      }
    }
  })
})