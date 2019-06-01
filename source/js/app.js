$('.js-nav').removeClass('nav--nojs');
$('.js-nav-btn').click(function() {
  $(this).toggleClass('nav__btn--opened');
  $('.js-nav-menu').slideToggle('fast');
});

$('.js-btn-before').click(function() {
  $('.toggle-button').addClass('toggle-button--off').removeClass('toggle-button--on');
  $('.js-img-before').css('width', '100%');
  $('.js-img-after').css('width', '0');
  $('.js-btn-scale').css('left', '0');
});

$('.js-btn-after').click(function() {
  $('.toggle-button').addClass('toggle-button--on').removeClass('toggle-button--off');
  $('.js-img-after').css('width', '100%');
  $('.js-img-before').css('width', '0');
  $('.js-btn-scale').css('left', '100%');
});

$('.toggle-button').click(function() {
  $(this).toggleClass('toggle-button--off toggle-button--on');
  if ($('.js-img-before').width() === 0) {
    $('.js-img-before').css('width', 'auto');
    $('.js-img-after').css('width', '0');
  } else if ($('.js-img-after').width() === 0) {
    $('.js-img-after').css('width', 'auto');
    $('.js-img-before').css('width', '0');
  }
});

$('.js-btn-scale').mousedown(function(event) {
  var startPosition = event.pageX;
  var left = $(this).position().left + $(this).outerWidth() / 2;
  $(this).mousemove(function(event) {
    left += event.pageX - startPosition;
    $(this).css('left', left);
    $('.js-img-before').width($('.js-img-before').width() + (event.pageX - startPosition));
    $('.js-img-after').width($('.js-img-after').width() - (event.pageX - startPosition));
    startPosition = event.pageX;
  });
}).mouseup(function() {
  $(this).off('mousemove');
}).mouseout(function() {
  $(this).off('mousemove');
});
