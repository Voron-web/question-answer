let
   burgerButton = document.querySelector('.burger__menu-button'),
   burgerArrow = document.querySelector('.profile__arrow'),
   menu = document.querySelector('.burger-menu'),
   header = document.querySelector('.header'),
   link = document.querySelectorAll('.menu__item');



burgerButton.addEventListener('click', function () {
   burgerButton.classList.toggle('active');
   menu.classList.toggle('active');
   header.classList.toggle('active');
})

burgerArrow.addEventListener('click', function () {
   burgerArrow.classList.toggle('active');
   menu.classList.toggle('active');
   header.classList.toggle('active');
})
link.addEventListener('click', function () {
   burgerButton.classList.toggle('active');
   menu.classList.toggle('active');
   header.classList.toggle('active');
})
// }