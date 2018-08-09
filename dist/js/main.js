const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrading = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItens = document.querySelectorAll(".nav-item");
const divFoto = document.querySelector(".foto");

let mostrarMenu = false;
let tempoAnimacao = 5000;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!mostrarMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrading.classList.add("show");
    divFoto.classList.add("show");
    navItens.forEach(item => {
      item.classList.add("show");
    });
    setTimeout(() => {
      menuNav.style.transitionDelay = "0.5s";
      menuBrading.style.transitionDelay = "0.5s";
    }, 500);
    mostrarMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    divFoto.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrading.classList.remove("show");
    navItens.forEach(item => {
      item.classList.remove("show");
    });

    setTimeout(() => {
      menuNav.style.transitionDelay = "0s";
      menuBrading.style.transitionDelay = "0s";
    }, 500);
    mostrarMenu = false;
  }
}
