$(document).ready(function () {
  var slickOpts = {
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: "swing",
    speed: 700,
    dots: true,
    customPaging: function (slick, index) {
      return "<a href='#'>" + (index + 1) + "</a>";
    },
    arrows: false,
  };
  // Init slick carousel
  $("#carousel").slick(slickOpts);
});
