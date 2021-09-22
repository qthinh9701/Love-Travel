$(document).ready(function () {
  // --SHOW MENU ---\

  const subMenu = $(".header-nav__right-options");
  const toggleBtn = $(".header-nav__right-toggle .toggle-btn");
  const toggleBtnMobile = $(".header-nav__right-toggle .toggle-btn-mobile");
  console.log(toggleBtnMobile)
  const overlayMenuIsShow = $(".overlay-menu-is-show");
  const slider = $(".slider");
  const sliderHeight = slider.outerHeight();
  const navMoblie = $(".nav")
  toggleBtn.on("click", function (e) {
    e.preventDefault();
    const closeMenu = $(".close-menu");
    subMenu.addClass("active");
    overlayMenuIsShow.addClass("active");
    slider.addClass("menu-is-show");
    closeMenu.on("click", function () {
      subMenu.removeClass("active");
      overlayMenuIsShow.removeClass("active");
      slider.removeClass("menu-is-show");
    });
    overlayMenuIsShow.on("click", function () {
      subMenu.removeClass("active");
      overlayMenuIsShow.removeClass("active");
      slider.removeClass("menu-is-show");
    });
  });
  toggleBtnMobile.on("click", function (e) {
    e.preventDefault();
  })
  const header = $("header");
  const heightHeader = header.outerHeight();
  const backToTop = $(".backtotop");

  $(document).on("scroll", function () {
    const scrollY = $(window).scrollTop();
    if (scrollY > sliderHeight) {
      header.addClass("active");
      backToTop.addClass("active");
    } else {
      header.removeClass("active");
      backToTop.removeClass("active");
    }
  });
  backToTop.on("click", function () {
    $(window).scrollTop(0);
  });
  const carousel = $(".images-box");
  carousel.flickity({
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: true,
    prevNextButtons: false,
    autoPlay: 5000,
  });
  console.log(heightHeader);
});

