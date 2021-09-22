$(document).ready(function () {
  const tab = $("#tabs li");
  const tabContent = $(".tabs-wrap .tabs__content");
  $("#tabs li:first ").addClass("active");
  $(".tabs-wrap .tabs__content:first").show();
  $("#tabs li").on("click", function (e) {
    index = $(this).index();
    e.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");
    tabContent.hide();
    tabContent.eq(index).show();
  });
});
