// MENU MOBILE

const headerMobile = document.getElementById("header-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("visivel");
  const visivel = nav.classList.contains("visivel");
  event.currentTarget.setAttribute("aria-expanded", visivel);
}

headerMobile.addEventListener("click", toggleMenu);
headerMobile.addEventListener("touchstart", toggleMenu);

// HEADER FIXO

window.onscroll = function () {
  headerFixo();
};

var header = document.getElementById("header-fixo");
var sticky = header.offsetTop;

function headerFixo() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixo");
  } else {
    header.classList.remove("fixo");
  }
}
