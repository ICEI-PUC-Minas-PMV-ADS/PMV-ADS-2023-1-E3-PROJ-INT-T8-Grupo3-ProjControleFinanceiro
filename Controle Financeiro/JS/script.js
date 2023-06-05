const sidemenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Mostrar Painel
menuBtn.addEventListener("click", () => {
  sidemenu.style.display = "block";
});

// Fechar Painel
closeBtn.addEventListener("click", () => {
  sidemenu.style.display = "none";
});

// Mudar Tema
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});