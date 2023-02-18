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
