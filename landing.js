const appMenu = document.querySelector(".app-menu");
const container = document.querySelector(".container");

appMenu.addEventListener("click", () => {
    container.classList.toggle("active");
  });