const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__menu');
const body = document.body;

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle('active');
  body.classList.toggle('not-scroll');
});

const swiper = new Swiper('.swiper', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials-button-prev',
    prevEl: '.testimonials-button-next',
  }
});