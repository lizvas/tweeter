$(document).ready(function() {
  $(".new-tweet textarea").on("keyup", function(event) {
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
});
