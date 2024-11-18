document.addEventListener("DOMContentLoaded", function () {
  let menuOpenBtn = document.querySelector(".menuToggle");
  let linkBtn = document.querySelectorAll(".topBar-menu a");
  let menu = document.querySelector(".topBar-menu");

  menuOpenBtn.addEventListener("click", menuToggle);

  linkBtn.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  function menuToggle() {
    menu.classList.toggle("openMenu");
  }

  function closeMenu() {
    menu.classList.remove("openMenu");
  }
});
