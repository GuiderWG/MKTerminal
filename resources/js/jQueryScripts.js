export default $(document).ready(() => {

  // Do something when happened scroll
  $(window).scroll(function() {
    $('.top-menu').removeClass('fixed-top');
    let header = $('.header');

    if ($(this).scrollTop() > 0) {
      header.addClass('header_responsive');
    } else {
      header.removeClass('header_responsive');
    }

  }).scroll();
  /*---*/

  $('#fullpage').fullpage({
    anchors: [ 'otdely', 'napravleniya', 'preimushchestva', 'keysy', 'partnery', 'media', 'kontakty' ],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: [ 'Просто и надёжно', 'Почему мы', 'О компании', 'Наши работы', 'Оставить заявку', 'Георгафия' ],
    showActiveTooltip: false,
    responsiveWidth: 992,
    responsiveHeight: 920,
    verticalCentered: false,
    css3: true,
    onLeave: function(index, nextIndex, direction) {

      if (direction === 'down' && window.innerWidth > 767) {
        switch (index) {
          case 1:
            iconsPattern();
          case 2:
            rightSide();
            break;
          case 3:
            downSide();
            break;
          case 4:
            onlyPattern('.feedback-us');
            break;
          case 5:
            mapDots();
            break;
        }
      }
    },
  });

  /* TOP MENU DROPDOWN 2LVL */
  $('.navbar-main__item_dropdown').hover(
    function() {
      $(this)
        .addClass('navbar-main__item_dropdown_open')
        .find('.navbar-main-level')
        .stop()
        .fadeIn('10');
    },
    function() {
      $(this)
        .removeClass('navbar-main__item_dropdown_open')
        .find('.navbar-main-level')
        .stop()
        .fadeOut('10');
    },
  );
  /*---*/

  /* Mobile menu */
  let menuLink = $('.mobile-menu-btn');
  $('#mobile-nav').hcOffcanvasNav({
    width: 300,
    disableAt: 992,
    customToggle: menuLink,
    labelClose: $('<img src="/images/Logo.svg" alt="" class="logo__img logo__img_mobile img-fluid">'),
    labelBack: 'Назад',
  });
  /* END Mobile menu */


  if ($.fn.slick) {
    /* Main slick slider */
    let mainSlider = $('.main-slider');
    mainSlider.slick({
      fade: true,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      dotsClass: 'main-slider__dots main-dots',
      customPaging: function(_, i) {
        return `<button type="button" class="main-dots__item">${++i}</button>`;
      },
      appendDots: '.container-dots',
    });
    /* END Main slick slider */


  }

});