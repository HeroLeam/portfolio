document.addEventListener("DOMContentLoaded", function () {

  const imagensIcone = document.querySelectorAll(".imagemIcone")
  const imagensSelecao = document.querySelectorAll(".imagemIconeSelecao")
  const paragrafoTexto = document.querySelectorAll(".texto")

  let imagemSelecionadaIndex = null;

  imagemSelecionadaIndex = selecaoDosItens(imagensIcone, imagemSelecionadaIndex, imagensSelecao, paragrafoTexto);

  imagemSelecionadaIndex = removeSelecaoDosItens(imagensSelecao, paragrafoTexto, imagemSelecionadaIndex);

})

function removeSelecaoDosItens(imagensSelecao, paragrafoTexto, imagemSelecionadaIndex) {
  document.addEventListener("mouseout", function () {
    // Adiciona a classe esconder
    imagensSelecao.forEach((imagemSelecao) => {
      imagemSelecao.classList.add("esconder");
    });
    paragrafoTexto.forEach((paragrafo) => {
      paragrafo.classList.add("esconder");
    });
    // Resetar o índice da imagem selecionada
    imagemSelecionadaIndex = null;
  });
  return imagemSelecionadaIndex;
}

function selecaoDosItens(imagensIcone, imagemSelecionadaIndex, imagensSelecao, paragrafoTexto) {
  imagensIcone.forEach((imagemIcone, index) => {
    imagemIcone.addEventListener("mouseover", function () {
      // Adicionar a classe esconder
      if (imagemSelecionadaIndex !== null) {
        imagensSelecao[imagemSelecionadaIndex].classList.add("esconder");
        paragrafoTexto[imagemSelecionadaIndex].classList.add("esconder");
      }

      // Remover a classe esconder
      imagensSelecao[index].classList.remove("esconder");
      paragrafoTexto[index].classList.remove("esconder");

      // Atualizar o índice da imagem selecionada
      imagemSelecionadaIndex = index;
    });
  });
  return imagemSelecionadaIndex;
}
