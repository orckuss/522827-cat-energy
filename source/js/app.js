$('.js-nav').removeClass('nav--nojs');
$('.js-nav-btn').click(function() {
  $(this).toggleClass('nav__btn--opened');
  $('.js-nav-menu').slideToggle('fast');
});

$('.js-btn-before').click(function() {
  $('.toggle-button').addClass('toggle-button--off').removeClass('toggle-button--on');
  $('.js-img-before').css('width', '100%');
  $('.js-img-after').css('width', '0');
  $('.js-btn-scale').css('left', '100%');
});

$('.js-btn-after').click(function() {
  $('.toggle-button').addClass('toggle-button--on').removeClass('toggle-button--off');
  $('.js-img-after').css('width', '100%');
  $('.js-img-before').css('width', '0');
  $('.js-btn-scale').css('left', '0');
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
  var startCursorPosition = event.pageX;
  var left = $(this).position().left + $(this).outerWidth() / 2;
  $(this).mousemove(function(event) {
    left += event.pageX - startCursorPosition;
    if ((left >= 0) && (left <= $(this).parent().width())) {
      $(this).css('left', left);
    }
    $('.js-img-before').width(
      $('.js-img-before').parent().width() * left / $('.js-btn-scale').parent().width()
    );
    $('.js-img-after').width(
      $('.js-img-after').parent().width() * (1 - left / $('.js-btn-scale').parent().width())
    );
    startCursorPosition = event.pageX;
  });
}).mouseup(function() {
  $(this).off('mousemove');
}).mouseout(function() {
  $(this).off('mousemove');
});

var btnScale = document.querySelector('.js-btn-scale');

btnScale.addEventListener('touchstart', function(event) {
  event.preventDefault();
  var startPosition = event.touches[0].pageX;
  var left = $(this).position().left + $(this).outerWidth() / 2;
  this.addEventListener('touchmove', function(event) {
    left += event.touches[0].pageX - startPosition;
    if ((left >= 0) && (left <= $(this).parent().width())) {
      $(this).css('left', left);
    }
    $('.js-img-before').width(
      $('.js-img-before').parent().width() * left / $('.js-btn-scale').parent().width()
    );
    $('.js-img-after').width(
      $('.js-img-after').parent().width() * (1 - left / $('.js-btn-scale').parent().width())
    );
    startPosition = event.touches[0].pageX;
  });
});
