$(function() {

  // var appReviews = new Swiper(".swiper-container", {
  //   direction: "horizontal",
  //   spaceBetween: 30,
  //   speed: 300,
  //   autoplay: 5000,
  //   pagination: ".swiper-pagination",
  //   paginationClickable: true,
  //   centeredSlides: true,
  //   loop: true
  // });



  function carousel(dir, space, speed, auto) {
    return new Swiper (".swiper-container", {
      direction: dir,
      spaceBetween: space,
      speed: speed,
      autoplay: auto,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      centeredSlides: true,
      loop: true
    });
  }

  function initSize() {
    if ($(document).width() > 800) {
      appReviews = carousel("vertical", 0, 1000, 5000);
    } else {
      appReviews = carousel("horizontal", 30, 300);
    }
  }

  function checkSize() {
    if ($(document).width() > 800) {
      // $(".swiper-container").each(function() {
      //   $(this).removeClass("swiper-container-horizontal");
      // })
      // $(".swiper-wrapper").removeAttr("style");
      // $(".swiper-slide").each(function() {
      //   $(this).removeAttr("style");
      // })
      // appReviews = "";
      appReviews.destroy(false, true);
      appReviews = carousel("vertical", 0, 1000, 5000);
      // console.log("large");
    } else {
      // $(".swiper-container").each(function() {
      //   $(this).removeClass("swiper-container-vertical");
      // })
      // $(".swiper-wrapper").removeAttr("style");
      // $(".swiper-slide").each(function() {
      //   $(this).removeAttr("style");
      // })
      // appReviews = "";
      appReviews.destroy(false, true);
      appReviews = carousel("horizontal", 30, 300);
      // console.log("small");
    }
  }

  initSize();

  $(window).resize(checkSize);

});
