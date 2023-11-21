const imagemIcone = document.querySelectorAll('.imagemIcone')
const imagemSelecao = document.querySelectorAll('.imagemSelecao')

imagemIcone.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const imagemIconeAtivo = document.querySelector(".animarImagem")
    if (imagemIconeAtivo) {
      imagemIconeAtivo.classList.remove("animarImagem")
    }
    item.classList.add("animarImagem")
  })
})

imagemSelecao.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const imagemSelecaoAtivo = document.querySelector(".esconder")
    if (imagemSelecaoAtivo) {
      imagemSelecaoAtivo.classList.remove("esconder")
    }
    item.classList.add("esconder")
  })
})