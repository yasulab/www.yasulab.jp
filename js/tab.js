(function() {
  (function($) {
    var $li;
    $li = $("#navigation li");
    $li.find('a').click(function() {
      $li.removeClass('selected');
      $(this).parent('li').addClass('selected');
      return false;
    });
  })(jQuery);
}).call(this);
