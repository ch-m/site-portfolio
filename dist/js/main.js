const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrading = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItens = document.querySelectorAll(".nav-item");

let mostrarMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!mostrarMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrading.classList.add("show");
    navItens.forEach(item => {
      item.classList.add("show");
    });

    mostrarMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrading.classList.remove("show");
    navItens.forEach(item => {
      item.classList.remove("show");
    });

    mostrarMenu = false;
  }
}
