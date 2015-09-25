$(function() {

  var mql = window.matchMedia("(min-width: 800px)");
  var appReviewsCarousel = appReviewsSettings();
  var moreAppsCarousel = moreAppsSettings();


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

  function multiSlide(slides) {
    return new Swiper (".swiper-2", {
      direction: "horizontal",
      spaceBetween: 0,
      speed: 1000,
      autoplay: 5000,
      slidesPerView: slides,
      pagination: ".swiper-pagination-2",
      paginationClickable: true,
      centeredSlides: true,
      loop: true
    });
  }

  function appReviewsSettings() {
    if (mql.matches) {
      return singleSlide("vertical", 0, 1000, 5000);
    }
    return singleSlide("horizontal", 30, 300, "");
  }

  function moreAppsSettings() {
    if (mql.matches) {
      return multiSlide("auto");
    }
    return multiSlide(1);
  }

  function clearSwipers() {
    appReviewsCarousel.destroy(false, true);
    moreAppsCarousel.destroy(false, true);
  }

  function setSwipers() {
    appReviewsCarousel = appReviewsSettings();
    moreAppsCarousel = moreAppsSettings();
  }

  function resetSwipers() {
    clearSwipers();
    setSwipers();
  }

  mql.addListener(resetSwipers);

});
