const minhaImagem = document.querySelectorAll('.icone')

minhaImagem.addEventListener("mouseover", function () {
  minhaImagem.classList.add("animar");
});
minhaImagem.addEventListener("mouseout", function () {
  minhaImagem.classList.remove("animar");
});