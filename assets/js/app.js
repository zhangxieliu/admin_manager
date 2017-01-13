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
