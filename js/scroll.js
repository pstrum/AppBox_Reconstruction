$(document).ready(function ()  {
    $('#nav .nav-link').smoothScroll({
      offset: -150,
      speed: 1000,
    });

    $('.to-top').smoothScroll({
      direction: 'top',
      speed: 1000
    });
});
