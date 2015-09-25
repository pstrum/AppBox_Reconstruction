$(document).ready(function ()  {
  $('#nav a').smoothScroll({
    offset: -150,
    speed: 1000
  });

  $('.to-top').smoothScroll({
    direction: 'top',
    speed: 1000
  });
});
