(function() {
  $(function() {
    var eventExpire, nowTime;
    $("#copyYear").text((new Date).getFullYear());
    eventExpire = new Date(1432870200000);
    nowTime = new Date;
    return $(".btn-register").each(function() {
      if (nowTime < eventExpire) {
        return $(this).removeClass('disabled');
      }
    });
  });

}).call(this);
