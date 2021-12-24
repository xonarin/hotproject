const swiper = new Swiper(".slider", {
  slidesPerView: 3,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 28,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 80,
    },
  },
});
