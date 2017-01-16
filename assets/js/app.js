(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);

$('.theme-panel').click(function () {

})

$('.theme-bar').find('span').on('click', function () {
    $('body').attr('class', $(this).attr('data-color'));
    saveSelector.color = $(this).attr('data-color');
    storageSave(saveSelector);
})

$('.switch-btn').click(function () {
    if ($(window).width() > 1024) {
        $('.left-sidebar').toggleClass('left-sidebar-nav-hide');
        $('.content-wrapper').toggleClass('content-wrapper-active');
    } else {
        $('.left-sidebar').toggleClass('left-sidebar-nav-hide-xs');
        $('.content-wrapper').toggleClass('content-wrapper-active-xs');
    }

    if ($(window).width() < 1024) {
        $('.left-sidebar').addClass('left-sidebar-nav-hide');
    } else {
        $('.left-sidebar').removeClass('left-sidebar-nav-hide');
    }
});