const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials-button-prev',
    prevEl: '.testimonials-button-next',
  }
});