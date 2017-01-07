$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['header', 'skills','portfolio','contacts'],
  });

  $(window).onLoad, function () {
    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');



});
});
