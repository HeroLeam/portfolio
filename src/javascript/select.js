const imagemIcone = document.querySelectorAll(".imagemIcone")
const imagemSelecao = document.querySelectorAll(".imagemSelecao")
const paragrafoTexto = document.querySelectorAll(".texto")

adicionaAnimacao()

removeAnimacao()

function removeAnimacao() {
  imagemIcone.forEach(function (item) {
    item.addEventListener("mouseout", function () {
      const imagemIconeAtivo = document.querySelector(".animarImagem")
      if (imagemIconeAtivo) {
        imagemIconeAtivo.classList.remove("animarImagem")
      }
    })
  })
}

function adicionaAnimacao() {
  imagemIcone.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      const imagemIconeAtivo = document.querySelector(".animarImagem")
      if (imagemIconeAtivo) {
        imagemIconeAtivo.classList.remove("animarImagem")
      }
      item.classList.add("animarImagem")
    })
  })
}
