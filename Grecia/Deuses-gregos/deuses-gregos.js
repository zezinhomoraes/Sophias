

function openMenu(){
  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  }else{(menu.style.display == 'block')
  menu.style.display = 'none'
  }
}

// BARRA DE BUSCA

const pesquisa = document.getElementById("iPesquisa")
const busca = document.querySelector("#icone")
const conteudo_naoSelect = [...document.querySelectorAll(".conteudo")]
busca.addEventListener('click',(evt)=>{
  conteudo_naoSelect.map((e)=>{e.classList.add('nao_pesquisado')})

  const conteudo_select = [...document.querySelectorAll(".conteudo h3")]
  conteudo_select.filter((e)=>{
    const valorPesquisado= pesquisa.value.toLowerCase()
    const valorEncontrado =  e.innerHTML.toLowerCase()
    if(valorPesquisado === valorEncontrado ){
      e.parentElement.classList.remove("nao_pesquisado")
    }
  })
})

pesquisa.addEventListener("input", (evt)=>{ 
  conteudo_naoSelect.map((e)=>{
    if(pesquisa.value.length === 0){
      e.classList.remove('nao_pesquisado')
    }
  })
})

