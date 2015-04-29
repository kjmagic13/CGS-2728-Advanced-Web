(function() {
  $(function() {
    var resizeAutoHeights;
    resizeAutoHeights = function() {
      var currentTallest;
      currentTallest = 0;
      $('.auto-height').each(function() {
        $(this).height('auto');
        if ($(this).height() > currentTallest) {
          currentTallest = $(this).height();
        }
      });
      return $('.auto-height').each(function() {
        $(this).height('auto');
        $(this).outerHeight(currentTallest);
      });
    };
    window.onload = resizeAutoHeights;
    return $(window).resize(function() {
      return resizeAutoHeights();
    });
  });

}).call(this);
