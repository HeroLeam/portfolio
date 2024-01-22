document.addEventListener("DOMContentLoaded", function () {

  const imagensIcone = document.querySelectorAll(".imagemIcone")
  const imagensSelecao = document.querySelectorAll(".imagemIconeSelecao")
  const paragrafoTexto = document.querySelectorAll(".texto")

  let imagemSelecionadaIndex = null

  imagemSelecionadaIndex = selecaoDosItens(imagensIcone, imagemSelecionadaIndex, imagensSelecao, paragrafoTexto)

  imagemSelecionadaIndex = removeSelecaoDosItens(imagensSelecao, paragrafoTexto, imagemSelecionadaIndex)

  trocaImagemWacom()

  trocaImagemKeyboard()
})

function selecaoDosItens(imagensIcone, imagemSelecionadaIndex, imagensSelecao, paragrafoTexto) {
  imagensIcone.forEach((imagemIcone, index) => {
    imagemIcone.addEventListener("mouseover", function () {
      // Adicionar a classe esconder
      if (imagemSelecionadaIndex !== null) {
        imagensSelecao[imagemSelecionadaIndex].classList.add("esconder")
        paragrafoTexto[imagemSelecionadaIndex].classList.add("esconder")
      }

      // Remover a classe esconder
      imagensSelecao[index].classList.remove("esconder")
      paragrafoTexto[index].classList.remove("esconder")

      // Atualizar o índice da imagem selecionada
      imagemSelecionadaIndex = index
    })
  })
  return imagemSelecionadaIndex
}

function removeSelecaoDosItens(imagensSelecao, paragrafoTexto, imagemSelecionadaIndex) {
  document.addEventListener("mouseout", function () {
    // Adiciona a classe esconder
    imagensSelecao.forEach((imagemSelecao) => {
      imagemSelecao.classList.add("esconder")
    });
    paragrafoTexto.forEach((paragrafo) => {
      paragrafo.classList.add("esconder")
    });
    // Resetar o índice da imagem selecionada
    imagemSelecionadaIndex = null
  });
  return imagemSelecionadaIndex
}

function trocaImagemKeyboard() {
  document.getElementById('imagemIconeKeyboard').addEventListener('mouseover', function () {
    // Substitua 'imagem2.jpg' pelo caminho da sua segunda imagem
    this.src = './src/images/icons/keyboard.gif'
  });

  document.getElementById('imagemIconeKeyboard').addEventListener('mouseout', function () {
    // Substitua 'imagem1.jpg' pelo caminho da sua primeira imagem
    this.src = './src/images/icons/keyboard.png'
  });
}

function trocaImagemWacom() {
  document.getElementById('imagemIconeWacom').addEventListener('mouseover', function () {
    // Substitua 'imagem2.jpg' pelo caminho da sua segunda imagem
    this.src = './src/images/icons/wacom.gif'
  });

  document.getElementById('imagemIconeWacom').addEventListener('mouseout', function () {
    // Substitua 'imagem1.jpg' pelo caminho da sua primeira imagem
    this.src = './src/images/icons/wacom.png'
  });
}