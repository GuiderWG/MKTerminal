//jQuery code
import './jQueryScripts';

// Vanilla JS code
import './vanillaJS';

function preloaderAnimation() {}

(function () {
  let preloaderStart = document.getElementById('preloader-container');

  const preloader = document.querySelectorAll('.preloader__container');
  const preloaderBar = document.querySelectorAll('.preloader-load .preloader-load__bar');
  const preloaderBarEmpty = document.querySelectorAll('.preloader-load .preloader-load__bar_empty');
  const preloaderIcon = document.querySelectorAll('.preloader-load .preloader-load__icon');
  const preloaderLetter = document.querySelectorAll('.preloader__title .letter');
  const preloaderCluster = document.querySelectorAll('.preloader-bg .preloader-bg__cluster');

  if (preloaderStart) {
    document.body.classList.add('preloader');

    function startPreloader() {
      preloaderStart.classList.add('preloader__container_show');
      anime
        .timeline({
          easing: 'spring(1, 40, 10, 0)',
          duration: 1600,
        })
        .add(
          {
            targets: preloaderBarEmpty,
            opacity: [0, 1],
          },
          500
        )
        .add(
          {
            targets: preloaderLetter,
            opacity: 1,
            translateY: -50,
            delay: anime.stagger(100, { start: 1000 }),
            translateX: [-10, 0],
          },
          500
        )
        .add(
          {
            targets: preloaderCluster,
            opacity: 1,
            easing: 'spring(1, 30, 10, 0)',
            delay: anime.stagger(100, { start: 1000 }),
            translateY: ['100%', 0],
          },
          500
        )
        .add(
          {
            targets: preloaderBar,
            width: [
              { value: '10%', duration: 400 },
              { value: '30%', duration: 400, delay: 500 },
              { value: '60%', duration: 400, delay: 500 },
              { value: '100%', duration: 400, delay: 500 },
            ],
            direction: 'alternate',
            easing: 'spring(1, 40, 10, 0)',
            delay: function (el, i) {
              return i * 300;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 300;
            },
          },
          500
        );

      anime({
        targets: preloaderIcon,
        opacity: [0, 1],
        translateX: [
          { value: '-30%', duration: 1500 },
          { value: '30%', duration: 1500, delay: 500 },
          { value: '80%', duration: 1500, delay: 500 },
          { value: '100%', duration: 1500, delay: 500 },
        ],
        direction: 'alternate',
        loop: true,
        easing: 'spring(1, 40, 10, 0)',
        delay: function (el, i, l) {
          return i * 200;
        },
        endDelay: function (el, i, l) {
          return (l - i) * 200;
        },
      });
    }

    startPreloader();

    function fadeOutPreloader(el) {
      document.body.classList.remove('preloader');
      setTimeout(() => {
        anime
          .timeline({
            easing: 'easeOutSine',
            duration: 600,
          })
          .add(
            {
              targets: preloader,
              height: ['100%', '0%'],
              top: ['50%'],
            },
            200
          )
          .add(
            {
              complete: function (anim) {
                preloaderStart.classList.remove('preloader__container_show');
              },
            },
            300
          );
      }, 1000);
    }

    /*function fadeInPreloader() {
      preloaderStart.classList.add('preloader__container_show');
      anime
        .timeline({
          easing: 'spring(1, 40, 10, 0)',
          duration: 1600,
        })
        .add(
          {
            targets: preloader,
            easing: 'easeInSine',
            duration: 400,
            top: [0],
            height: ['0%', '100%'],
          },
          300
        )
        .add(
          {
            targets: preloaderBarEmpty,
            opacity: [0, 1],
          },
          500
        )
        .add(
          {
            targets: preloaderLetter,
            opacity: 1,
            translateY: -50,
            delay: anime.stagger(100, { start: 1000 }),
            translateX: [-10, 0],
          },
          500
        )
        .add(
          {
            targets: preloaderCluster,
            opacity: 1,
            easing: 'spring(1, 30, 10, 0)',
            delay: anime.stagger(100, { start: 1000 }),
            translateY: ['100%', 0],
          },
          500
        )
        .add(
          {
            targets: preloaderBar,
            width: [
              { value: '10%', duration: 400 },
              { value: '30%', duration: 400, delay: 500 },
              { value: '60%', duration: 400, delay: 500 },
              { value: '100%', duration: 400, delay: 500 },
            ],
            direction: 'alternate',
            easing: 'spring(1, 40, 10, 0)',
            delay: function (el, i) {
              return i * 300;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 300;
            },
          },
          500
        );

      anime({
        targets: preloaderIcon,
        opacity: [0, 1],
        translateX: [
          { value: '-30%', duration: 1500 },
          { value: '30%', duration: 1500, delay: 500 },
          { value: '80%', duration: 1500, delay: 500 },
          { value: '100%', duration: 1500, delay: 500 },
        ],
        direction: 'alternate',
        loop: true,
        easing: 'spring(1, 40, 10, 0)',
        delay: function (el, i) {
          return i * 200;
        },
        endDelay: function (el, i, l) {
          return (l - i) * 200;
        },
      });
    }*/

    window.onload = function () {
      setTimeout(function () {
        fadeOutPreloader(preloaderStart);
      }, 2000);
    };

    /*document.addEventListener('click', (event) => {
      let target = event.target,
        link = target.closest('.transition');
      if (link) {
        event.preventDefault();
        fadeInPreloader();
        setTimeout(() => {
          window.location.href = link.href;
        }, 1000);
      }
    });*/
  }
})();
