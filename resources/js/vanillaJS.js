export default document.addEventListener('DOMContentLoaded', () => {

  /*Поиск в шапке*/
  (() => {
    let showSearchBtn = document.querySelector('.header__search-btn');
    let searchForm = document.querySelector('.header__search-form');
    let searchFormInputText = document.querySelector('.header__search-form .search-blum .search-blum__input');
    let searchFormClose = document.querySelector('.header__search-form .search-blum .close');

    let showSearchAnimation = () => {
      anime.timeline({
        easing: 'spring(1, 80, 15, 0)',
        duration: 500,
      })
        .add({
          targets: searchForm,
          opacity: [ '0', '1' ],
          width: [ '20%', '100%' ],
        }, 0)
        .add({
          targets: searchFormInputText,
          color: [ 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, .8)' ],
        }, 500);
    };

    let hideSearchAnimation = () => {
      anime.timeline({
        easing: 'spring(1, 80, 10, 0)',
        duration: 400,
      })
        .add({
          targets: searchFormInputText,
          color: [ 'rgba(255, 255, 255, .8)', 'rgba(255, 255, 255, 0)' ],
        }, 0)
        .add({
          targets: searchForm,
          width: [ '100%', '0' ],
          opacity: [ '1', '0' ],
        }, 200);
    };

    showSearchBtn.addEventListener('click', showSearchAnimation);

    searchFormClose.addEventListener('click', hideSearchAnimation);
  })();
  /*--Поиск в шапке*/


  /*Отрисовка SVG иконок*/
  (() => {
    let btnAnimeStroke = document.querySelectorAll('.anime-stroke');
    btnAnimeStroke.forEach((el, idx) => {
      el.addEventListener('mouseenter', (e) => {
        let target = e.target;
        if (target.closest('.anime-stroke')) {
          let svgStroke = target.querySelectorAll('svg path');
          anime.timeline({
            easing: 'easeInQuad',
            duration: 400,
          })
            .add({
              targets: svgStroke,
              stroke: [ '#fff', '#24CBB7' ],
            }, 0)
            .add({
              targets: svgStroke,
              strokeDashoffset: [ anime.setDashoffset, 0 ],
            }, 0);
        }
      });
      el.addEventListener('mouseleave', (e) => {
        let target = e.target;
        if (target.closest('.anime-stroke')) {
          let svgStroke = target.querySelectorAll('svg path');
          anime.timeline({
            easing: 'easeInQuad',
            duration: 400,
          })
            .add({
              targets: svgStroke,
              stroke: [ '#24CBB7', '#fff' ],
            }, 0);
        }
      });
    });
  })();
  /*--Отрисовка SVG кнопок*/


  /*Заполнение кнопок*/
  (() => {
    const elements = document.querySelectorAll('.blow');
    const elements_span = [];
    elements.forEach((element, index) => {
      if (!elements_span[index])
        elements_span[index] = element.querySelector('span');
      element.addEventListener('mouseover', e => {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + 'px';
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + 'px';
      });
      element.addEventListener('mouseout', e => {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + 'px';
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + 'px';
      });
    });
  })();
  /*--Заполнение кнопок*/

  /*ФОНОВЫЕ АНИМАЦИИ*/
  const commonAnimation = {
    // Логотип + Мерзкий Паттерн
    logoPattern: () => {
      const gitPatternPath = document.querySelectorAll('.rand-anim .rand-anim__el');

      function randomValuesOpTran() {
        anime({
          targets: gitPatternPath,
          fillOpacity: function() {
            return anime.random(.3, .6);
          },
          translateX: function() {
            return anime.random(-1, 3);
          },
          easing: 'easeInOutQuad',
          duration: 1200,
          complete: randomValuesOpTran,
        });
      }

      anime.timeline({
        easing: 'easeInOutQuad',
        duration: 600,
      })
        .add({
          targets: gitPatternPath,
          opacity: [ 0, 1 ],
          fillOpacity: [ 0, .4 ],
          delay: function(el, i) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          },
        }, 100)
        .add({
          begin: randomValuesOpTran,
        });
    },

    // Иконки и паттерн
    iconsPattern: () => {
      const bigPatternEl = document.querySelectorAll('.big-pattern svg line, .big-pattern svg rect, .big-pattern svg path');
      const blareIcon = document.querySelectorAll('.advantages-anima__group .col-anim');
      const blareIconSvg = document.querySelectorAll('.blare-advantage .blare-advantage__icon svg path');

      anime.timeline({
        duration: 950,
        delay: function(el, i) {
          return i * 300;
        },
        easing: 'easeInOutQuad',
      })
        .add({
          targets: blareIcon,
          translateY: [ 999, 0 ],
          easing: 'spring(1, 60, 10, 0)',
        }, 100)
        .add({
          targets: blareIconSvg,
          strokeDashoffset: [ anime.setDashoffset, 0 ],
          delay: function(el, i) {
            return i * 20;
          },
          duration: 700,
        }, 800)
        .add({
          targets: bigPatternEl,
          opacity: [ 0, 1 ],
          strokeDashoffset: [ anime.setDashoffset, 0 ],
          delay: function(el, i) {
            return i * 50;
          },
          duration: 800,
        }, 1000);
    },
  };

  window.logoPattern = commonAnimation.logoPattern;
  window.iconsPattern = commonAnimation.iconsPattern;


  logoPattern();
  //iconsPattern();


});
