const burgerBtn = document.querySelector(".icon");

const miniMenu = document.querySelector(".mini-menu");
const miniNav = document.querySelector(".mini-nav");

burgerBtn.addEventListener("click", () => {
  miniMenu.classList.toggle("toggle-active");

  console.log(miniMenu.classList);
});
