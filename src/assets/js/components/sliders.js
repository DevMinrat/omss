const complectsSlider = new Swiper(".complects-slider", {
  slidesPerView: "auto",
  spaceBetween: 80,

  navigation: {
    nextEl: ".intro-slider__btn-next",
    prevEl: ".intro-slider__btn-prev",
  },

  //   breakpoints: {
  //     900: {
  //       spaceBetween: 50,
  //     },
  //     1350: {
  //       slidesPerView: "auto",
  //       spaceBetween: 80,
  //     },
  //   },
});
const aboutSlider = new Swiper(".about-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,

  navigation: {
    nextEl: ".intro-slider__btn-next",
    prevEl: ".intro-slider__btn-prev",
  },
});
