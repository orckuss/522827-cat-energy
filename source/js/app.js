$('.js-nav').removeClass('nav--nojs');
$('.js-nav-btn').click(function() {
  $(this).toggleClass('nav__btn--opened');
  $('.js-nav-menu').slideToggle('fast');
});
