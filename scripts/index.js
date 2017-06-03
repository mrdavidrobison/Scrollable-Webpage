// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {$('body').on('click', '.btn-md.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.button'})