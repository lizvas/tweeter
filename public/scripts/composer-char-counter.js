$(document).ready(function() {
  $("textarea").keyup(function(event) {
    const max = 140;
    const tUp = $(this).val().length;
    const tDown = max - tUp;
    if (tUp > max) {
      $(".counter")
        .text(tDown)
        .css("color", "red");
    } else {
      const char = max - tUp;
      $(".counter")
        .text(char)
        .css("color", "black");
    }
  });

  $(".btn-compose").click(function() {
    $(".new-tweet").slideToggle(function() {
      $(".new-tweet").focus();
    });
  });
});
