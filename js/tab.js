(function() {
  (function($) {
    var $lis;
    $lis = $("#navigation li");
    $lis.find('a').click(function() {
      var $selected, index;
      $lis.removeClass('selected');
      $selected = $(this).parent('li');
      $selected.addClass('selected');
      index = $lis.index($selected);
      $(".project").addClass('hidden');
      $('.tab' + index).removeClass('hidden');
      return false;
    });
  })(jQuery);
}).call(this);
