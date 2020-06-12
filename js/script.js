var menu = document.querySelector(".header__mobile");
var overlay = document.querySelector(".modal-overlay");
var openMenu = document.querySelector(".header__toggle");
var closeMenu = document.querySelector(".header__mobile-close");

var loginBtn = document.querySelector(".login-btn");
var loginModal = document.querySelector(".modal-login");
var loginClose = document.querySelector(".login-close");

var registerBtn = document.querySelector(".register-btn");
var registerModal = document.querySelector(".modal-register");
var registerClose = document.querySelector(".register-close");

var loginBtnMob = document.querySelector(".login-btn-mob");
var registerBtnMob = document.querySelector(".register-btn-mob");



// menu
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

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-show");
  overlay.classList.remove("modal-show");
});

// login popup

loginBtnMob.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginModal.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

loginBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginModal.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginModal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginModal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

// register popup

registerBtnMob.addEventListener("click", function (evt) {
  evt.preventDefault();
  registerModal.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

registerBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  registerModal.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

registerClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  registerModal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  registerModal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});



var header = document.querySelector('.header');
window.onscroll = function showHeader() {

    if(window.pageYOffset > 0){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}
