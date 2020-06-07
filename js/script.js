var menu = document.querySelector(".header__mobile");
var overlay = document.querySelector(".modal-overlay");
var openMenu = document.querySelector(".header__toggle");
var closeMenu = document.querySelector(".header__mobile-close");


openMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("menu-show");
  overlay.classList.add("modal-show");
});

closeMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-show");
  overlay.classList.remove("modal-show");
});
