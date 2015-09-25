$(function() {

  var mql = window.matchMedia("(min-width: 800px)");
  var appReviewsCarousel = appReviewsSettings();
  var moreAppsCarousel = multiSlide();


  function singleSlide(dir, space, speed, auto) {
    return new Swiper (".swiper-1", {
      direction: dir,
      spaceBetween: space,
      speed: speed,
      autoplay: auto,
      pagination: ".swiper-pagination-1",
      paginationClickable: true,
      loop: true
    });
  }

  function multiSlide() {
    return new Swiper (".swiper-2", {
      direction: "horizontal",
      spaceBetween: 0,
      speed: 1000,
      autoplay: 5000,
      slidesPerView: "auto",
      pagination: ".swiper-pagination-2",
      paginationClickable: true,
      centeredSlides: false,
      loop: true
    });
  }

  function appReviewsSettings() {
    if (mql.matches) {
      return singleSlide("vertical", 0, 1000, 5000);
    }
    return singleSlide("horizontal", 30, 300, "");
  }

  function clearSwipers() {
    appReviewsCarousel.destroy(false, true);
  }

  function setSwipers() {
    appReviewsCarousel = appReviewsSettings();
  }

  function resetSwipers() {
    clearSwipers();
    setSwipers();
  }

  mql.addListener(resetSwipers);

});
