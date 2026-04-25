document.addEventListener("DOMContentLoaded", () => {
  initSelectableCards();
  initScrollReveal();
  initHeaderActiveLinks();
  initRandomCharacter();
});

function calcularAnos(inicio) {
  const hoje = new Date();
  const [ano, mes] = inicio.split("-");
  const dataInicio = new Date(ano, mes - 1);

  let anos = hoje.getFullYear() - dataInicio.getFullYear();

  const diffMes = hoje.getMonth() - dataInicio.getMonth();

  if (diffMes < 0 || (diffMes === 0 && hoje.getDate() < dataInicio.getDate())) {
    anos--;
  }

  return anos;
}

const anosDesign = calcularAnos("2010-01");
const anosFront = calcularAnos("2023-01");

document.getElementById("design-exp").textContent =
  `${anosDesign}+ anos em Design`;
document.getElementById("front-exp").textContent =
  `${anosFront}+ anos em Front-End`;
document.getElementById("design-exp-number").textContent = anosDesign;

function initSelectableCards() {
  const wrappers = document.querySelectorAll(".is-selectable");
  let activeItem = null;

  wrappers.forEach((wrapper) => {
    injectSelectionAssets(wrapper);

    wrapper.addEventListener("mouseenter", () => {
      if (activeItem && activeItem !== wrapper) {
        activeItem.classList.remove("is-active");
      }
      wrapper.classList.add("is-active");
      activeItem = wrapper;
    });

    wrapper.addEventListener("mouseleave", () => {
      wrapper.classList.remove("is-active");
      if (activeItem === wrapper) {
        activeItem = null;
      }
    });

    wrapper.addEventListener("focusin", () => {
      if (activeItem && activeItem !== wrapper) {
        activeItem.classList.remove("is-active");
      }
      wrapper.classList.add("is-active");
      activeItem = wrapper;
    });

    wrapper.addEventListener("focusout", () => {
      wrapper.classList.remove("is-active");
      if (activeItem === wrapper) {
        activeItem = null;
      }
    });
  });
}

function injectSelectionAssets(wrapper) {
  if (!wrapper.querySelector(".selection-arrow")) {
    const arrow = document.createElement("img");
    arrow.className = "selection-arrow";
    arrow.src = "./src/image/select.gif";
    arrow.alt = "";
    arrow.setAttribute("aria-hidden", "true");
    wrapper.appendChild(arrow);
  }

  if (!wrapper.querySelector(".selection-frame")) {
    const frame = document.createElement("img");
    frame.className = "selection-frame";
    frame.src = "./src/image/box-selection.gif";
    frame.alt = "";
    frame.setAttribute("aria-hidden", "true");
    wrapper.appendChild(frame);
  }
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .about > div, .about-card, .is-selectable",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal-element");
    observer.observe(element);
  });
}

function initHeaderActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.header nav a[href^="#"]');

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 140;
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("nav-active");
      } else {
        link.classList.remove("nav-active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}

function initRandomCharacter() {
  const heroImageElement = document.querySelector(".hero-image img");
  if (!heroImageElement) return;

  const totalDeImagens = 3;
  const randomIndex = Math.floor(Math.random() * totalDeImagens) + 1;
  const newSrc = `./src/image/character/${randomIndex}.png`;

  const tempImg = new Image();
  tempImg.src = newSrc;

  tempImg.onload = () => {
    heroImageElement.src = newSrc;
    heroImageElement.classList.remove("is-loading");
  };
}
