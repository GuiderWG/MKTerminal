export function preloaderAnimation() {
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

    window.onload = function () {
      setTimeout(function () {
        fadeOutPreloader(preloaderStart);
        logoPattern();
      }, 2000);
    };
  }
}

export default document.addEventListener('DOMContentLoaded', () => {
  /*Поиск в шапке*/
  (() => {
    let showSearchBtn = document.querySelector('.header__search-btn');
    let searchForm = document.querySelector('.header__search-form');
    let searchFormInputText = document.querySelector('.header__search-form .search-blum .search-blum__input');
    let searchFormClose = document.querySelector('.header__search-form .search-blum .close');

    let showSearchAnimation = () => {
      anime
        .timeline({
          easing: 'spring(1, 80, 15, 0)',
          duration: 500,
        })
        .add(
          {
            targets: searchForm,
            opacity: ['0', '1'],
            width: ['20%', '100%'],
          },
          0
        )
        .add(
          {
            targets: searchFormInputText,
            color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, .8)'],
          },
          500
        );
    };

    let hideSearchAnimation = () => {
      anime
        .timeline({
          easing: 'spring(1, 80, 10, 0)',
          duration: 400,
        })
        .add(
          {
            targets: searchFormInputText,
            color: ['rgba(255, 255, 255, .8)', 'rgba(255, 255, 255, 0)'],
          },
          0
        )
        .add(
          {
            targets: searchForm,
            width: ['100%', '0'],
            opacity: ['1', '0'],
          },
          200
        );
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
          anime
            .timeline({
              easing: 'easeInQuad',
              duration: 400,
            })
            .add(
              {
                targets: svgStroke,
                stroke: ['#fff', '#24CBB7'],
              },
              0
            )
            .add(
              {
                targets: svgStroke,
                strokeDashoffset: [anime.setDashoffset, 0],
              },
              0
            );
        }
      });
      el.addEventListener('mouseleave', (e) => {
        let target = e.target;
        if (target.closest('.anime-stroke')) {
          let svgStroke = target.querySelectorAll('svg path');
          anime
            .timeline({
              easing: 'easeInQuad',
              duration: 400,
            })
            .add(
              {
                targets: svgStroke,
                stroke: ['#24CBB7', '#fff'],
              },
              0
            );
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
      if (!elements_span[index]) elements_span[index] = element.querySelector('span');
      element.addEventListener('mouseover', (e) => {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + 'px';
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + 'px';
      });
      element.addEventListener('mouseout', (e) => {
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
          fillOpacity: function () {
            return anime.random(0.3, 0.6);
          },
          translateX: function () {
            return anime.random(-1, 3);
          },
          easing: 'easeInOutQuad',
          duration: 1200,
          complete: randomValuesOpTran,
        });
      }

      anime
        .timeline({
          easing: 'easeInOutQuad',
          duration: 600,
        })
        .add(
          {
            targets: gitPatternPath,
            opacity: [0, 1],
            fillOpacity: [0, 0.4],
            delay: function (el, i) {
              return i * 50;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 50;
            },
          },
          50
        )
        .add({
          begin: randomValuesOpTran,
        });
    },

    // Иконки и паттерн
    iconsPattern: () => {
      const bigPatternEl = document.querySelectorAll('.big-pattern svg line, .big-pattern svg rect, .big-pattern svg path');
      const blareIcon = document.querySelectorAll('.advantages-anima__group .col-anim');
      const blareIconSvg = document.querySelectorAll('.blare-advantage .blare-advantage__icon svg path');

      anime
        .timeline({
          duration: 950,
          delay: function (el, i) {
            return i * 300;
          },
          easing: 'easeInOutQuad',
        })
        .add(
          {
            targets: blareIcon,
            translateY: [999, 0],
            easing: 'spring(1, 60, 10, 0)',
          },
          100
        )
        .add(
          {
            targets: blareIconSvg,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: function (el, i) {
              return i * 20;
            },
            duration: 700,
          },
          800
        )
        .add(
          {
            targets: bigPatternEl,
            opacity: [0, 1],
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: function (el, i) {
              return i * 50;
            },
            duration: 800,
          },
          1000
        );
    },

    onlyPattern: (parentClass) => {
      const bigPatternEl = document.querySelectorAll(`${parentClass} .big-pattern svg line, ${parentClass} .big-pattern svg rect, ${parentClass} .big-pattern svg path`);

      anime
        .timeline({
          duration: 950,
          delay: function (el, i) {
            return i * 300;
          },
          easing: 'easeInOutQuad',
        })
        .add(
          {
            targets: bigPatternEl,
            opacity: [0, 1],
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: function (el, i) {
              return i * 50;
            },
            duration: 800,
          },
          100
        );
    },

    rightSide: () => {
      const rightSide = document.querySelectorAll('.right-side');

      anime
        .timeline({
          duration: 950,
          delay: function (el, i) {
            return i * 300;
          },
          easing: 'easeInOutQuad',
        })
        .add(
          {
            targets: rightSide,
            translateX: [999, 0],
            easing: 'spring(1, 60, 10, 0)',
          },
          100
        );
    },
    downSide: () => {
      const downSide = document.querySelectorAll('.down-side');

      anime
        .timeline({
          duration: 950,
          delay: function (el, i) {
            return i * 300;
          },
          easing: 'easeInOutQuad',
        })
        .add(
          {
            targets: downSide,
            translateY: [999, 0],
            easing: 'spring(1, 40, 10, 0)',
          },
          100
        );
    },

    mapDots: () => {
      const mapElements = document.querySelectorAll('.map-static__object svg circle, .map-static__object svg .map-static__object-anim');
      const mapElementsCircle = document.querySelectorAll('.map-static__object svg circle');

      function randomValuesOpTran() {
        anime({
          targets: mapElementsCircle,
          translateY: function () {
            return anime.random(-2, 2);
          },
          easing: 'easeInOutQuad',
          duration: 1200,
          complete: randomValuesOpTran,
        });
      }

      anime
        .timeline({
          easing: 'easeInOutQuad',
          duration: 400,
        })
        .add(
          {
            targets: mapElements,
            opacity: [0, 1],
            fillOpacity: [0, 1],
            delay: function (el, i) {
              return i * 100;
            },
            endDelay: function (el, i, l) {
              return (l - i) * 100;
            },
          },
          100
        )
        .add({
          begin: randomValuesOpTran,
        });
    },
  };

  window.logoPattern = commonAnimation.logoPattern;
  window.iconsPattern = commonAnimation.iconsPattern;
  window.onlyPattern = commonAnimation.onlyPattern;
  window.rightSide = commonAnimation.rightSide;
  window.downSide = commonAnimation.downSide;
  window.mapDots = commonAnimation.mapDots;

  //logoPattern();
  downSide();

  (() => {
    function Particles() {
      //particle colors
      this.colors = ['255, 255, 255', '1,62,97', '36,203,183'];
      //adds gradient to particles on true
      this.blurry = false;
      //adds white border
      this.border = false;
      //particle radius min/max
      this.minRadius = 10;
      this.maxRadius = 75;
      //particle opacity min/max
      this.minOpacity = 0.005;
      this.maxOpacity = 0.5;
      //particle speed min/max
      this.minSpeed = 0.05;
      this.maxSpeed = 0.5;
      //frames per second
      this.fps = 120;
      //number of particles
      this.numParticles = 350;
      //required canvas variables
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
    }

    Particles.prototype.init = function () {
      this.render();
      this.createCircle();
    };

    Particles.prototype._rand = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    Particles.prototype.render = function () {
      let self = this,
        wHeight = $(window).height(),
        wWidth = $(window).width();

      self.canvas.width = wWidth;
      self.canvas.height = wHeight;

      $(window).on('resize', self.render);
    };

    Particles.prototype.createCircle = function () {
      let particle = [];

      for (let i = 0; i < this.numParticles; i++) {
        var self = this,
          color = self.colors[~~self._rand(0, self.colors.length)];
        let vy = self._rand(self.minSpeed, self.maxSpeed);
        let vx = self._rand(self.minSpeed, self.maxSpeed);
        let r = 1; //Math.sqrt(Math.sqr(vx)+Math.sqr(vy));
        particle[i] = {
          radius: r,
          xPos: self._rand(0, canvas.width),
          yPos: self._rand(0, canvas.height),
          xVelocity: self._rand(self.minSpeed, self.maxSpeed),
          yVelocity: vy,
          color: 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')',
        };

        //once values are determined, draw particle on canvas
        self.draw(particle, i);
      }
      //...and once drawn, animate the particle
      self.animate(particle);
    };

    Particles.prototype.draw = function (particle, i) {
      let self = this,
        ctx = self.ctx;

      if (self.blurry === true) {
        //creates gradient if blurry === true
        let grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius / 1.25);

        grd.addColorStop(1.0, particle[i].color);
        grd.addColorStop(0.0, 'rgba(34, 34, 34, 0)');
        ctx.fillStyle = grd;
      } else {
        //otherwise sets to solid color w/ opacity value
        ctx.fillStyle = particle[i].color;
      }

      if (self.border === true) {
        ctx.strokeStyle = '#fff';
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
      ctx.fill();
    };

    Particles.prototype.animate = function (particle) {
      let self = this,
        ctx = self.ctx;

      setInterval(function () {
        //clears canvas
        self.clearCanvas();
        //then redraws particles in new positions based on velocity
        for (let i = 0; i < self.numParticles; i++) {
          particle[i].xPos += particle[i].xVelocity;
          particle[i].yPos -= particle[i].yVelocity;

          //if particle goes off screen call reset method to place it offscreen to the left/bottom
          if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
            self.resetParticle(particle, i);
          } else {
            self.draw(particle, i);
          }
        }
      }, 1000 / self.fps);
    };

    Particles.prototype.resetParticle = function (particle, i) {
      let self = this;

      let random = self._rand(0, 1);

      if (random > 0.5) {
        // 50% chance particle comes from left side of window...
        particle[i].xPos = -particle[i].radius;
        particle[i].yPos = self._rand(0, canvas.height);
      } else {
        //... or bottom of window
        particle[i].xPos = self._rand(0, canvas.width);
        particle[i].yPos = canvas.height + particle[i].radius;
      }
      //redraw particle with new values
      self.draw(particle, i);
    };

    Particles.prototype.clearCanvas = function () {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const particle = new Particles();
    particle.init();
  })();
});
