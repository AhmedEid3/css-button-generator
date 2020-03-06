$j(document).ready(function() {
  // change sidenave width
  function changeBtnsTemplateWidth() {
    var width =
      $j("body").innerWidth() -
      $j(".main-section").innerWidth() -
      $j(".settings").outerWidth() -
      ($j("body").innerWidth() - $j("body .container").innerWidth()) / 2;
    $j(".btns-template").css("width", width);
  }
  if ($j("body").outerWidth() > 991) {
    changeBtnsTemplateWidth();
  }
  $(window).resize(function() {
    if ($j("body").outerWidth() > 991) {
      changeBtnsTemplateWidth();
      $j(".btns-template")
        .fadeIn(1)
        .css({ transform: "translate(0%)" });
    } else {
      $j(".btns-template").css("width", "300px");
      $j(".btns-template")
        .fadeIn(1)
        .css({ transform: "translate(-100%)" });
    }
  });
  // Open side nav
  $j(".trigger-btns-template").click(function() {
    $(".sidenav-overlay")
      .fadeIn(1)
      .css({ transform: "translate(0%)" });
    $(".btns-template")
      .fadeIn(1)
      .css({ transform: "translate(0%)" });
  });
  // close side nav
  $j(".sidenav-overlay, .btn-style-template").click(function() {
    if ($j(".sidenav-overlay").css("display") != "none") {
      $j(".sidenav-overlay").css({ transform: "translate(-100%)" });
      $j(".btns-template").css({ transform: "translate(-100%)" });
    }
  });
});

// spinner loading
$j(window).on("load", function() {
  // Spinner Loading
  $j(".spinner-loading").fadeOut(function() {
    $j(this).remove();
  });
});
