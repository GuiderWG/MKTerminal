/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/jQueryScripts.js":
/*!***************************************!*\
  !*** ./resources/js/jQueryScripts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ($(document).ready(function () {
  // Do something when happened scroll
  $(window).scroll(function () {
    $('.top-menu').removeClass('fixed-top');
    var header = $('.header');

    if ($(this).scrollTop() > 0) {
      header.addClass('header_responsive');
    } else {
      header.removeClass('header_responsive');
    }
  }).scroll();
  /*---*/

  $('#fullpage').fullpage({
    anchors: ['otdely', 'napravleniya', 'preimushchestva', 'keysy', 'partnery', 'media', 'kontakty'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Просто и надёжно', 'Почему мы', 'О компании', 'Наши работы', 'Оставить заявку', 'Георгафия'],
    showActiveTooltip: false,
    responsiveWidth: 992,
    responsiveHeight: 920,
    verticalCentered: false,
    css3: true,
    onLeave: function onLeave(index, nextIndex, direction) {
      //after leaving section 1
      if (index === 1 && direction === 'down' && window.innerWidth > 767) {
        iconsPattern();
      }
    }
  });
  /* TOP MENU DROPDOWN 2LVL */

  $('.navbar-main__item_dropdown').hover(function () {
    $(this).addClass('navbar-main__item_dropdown_open').find('.navbar-main-level').stop().fadeIn('10');
  }, function () {
    $(this).removeClass('navbar-main__item_dropdown_open').find('.navbar-main-level').stop().fadeOut('10');
  });
  /*---*/

  /* Mobile menu */

  var menuLink = $('.mobile-menu-btn');
  $('#mobile-nav').hcOffcanvasNav({
    width: 300,
    disableAt: 992,
    customToggle: menuLink,
    labelClose: $('<img src="/images/Logo.svg" alt="" class="logo__img logo__img_mobile img-fluid">'),
    labelBack: 'Назад'
  });
  /* END Mobile menu */

  if ($.fn.slick) {
    /* Main slick slider */
    var mainSlider = $('.main-slider');
    mainSlider.slick({
      fade: true,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      dotsClass: 'main-slider__dots main-dots',
      customPaging: function customPaging(_, i) {
        return "<button type=\"button\" class=\"main-dots__item\">".concat(++i, "</button>");
      },
      appendDots: '.container-dots'
    });
    /* END Main slick slider */
  }
}));

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jQueryScripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jQueryScripts */ "./resources/js/jQueryScripts.js");
/* harmony import */ var _vanillaJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vanillaJS */ "./resources/js/vanillaJS.js");
//jQuery code
 // Vanilla JS code



/***/ }),

/***/ "./resources/js/vanillaJS.js":
/*!***********************************!*\
  !*** ./resources/js/vanillaJS.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (document.addEventListener('DOMContentLoaded', function () {
  /*Поиск в шапке*/
  (function () {
    var showSearchBtn = document.querySelector('.header__search-btn');
    var searchForm = document.querySelector('.header__search-form');
    var searchFormInputText = document.querySelector('.header__search-form .search-blum .search-blum__input');
    var searchFormClose = document.querySelector('.header__search-form .search-blum .close');

    var showSearchAnimation = function showSearchAnimation() {
      anime.timeline({
        easing: 'spring(1, 80, 15, 0)',
        duration: 500
      }).add({
        targets: searchForm,
        opacity: ['0', '1'],
        width: ['20%', '100%']
      }, 0).add({
        targets: searchFormInputText,
        color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, .8)']
      }, 500);
    };

    var hideSearchAnimation = function hideSearchAnimation() {
      anime.timeline({
        easing: 'spring(1, 80, 10, 0)',
        duration: 400
      }).add({
        targets: searchFormInputText,
        color: ['rgba(255, 255, 255, .8)', 'rgba(255, 255, 255, 0)']
      }, 0).add({
        targets: searchForm,
        width: ['100%', '0'],
        opacity: ['1', '0']
      }, 200);
    };

    showSearchBtn.addEventListener('click', showSearchAnimation);
    searchFormClose.addEventListener('click', hideSearchAnimation);
  })();
  /*--Поиск в шапке*/

  /*Отрисовка SVG иконок*/


  (function () {
    var btnAnimeStroke = document.querySelectorAll('.anime-stroke');
    btnAnimeStroke.forEach(function (el, idx) {
      el.addEventListener('mouseenter', function (e) {
        var target = e.target;

        if (target.closest('.anime-stroke')) {
          var svgStroke = target.querySelectorAll('svg path');
          anime.timeline({
            easing: 'easeInQuad',
            duration: 400
          }).add({
            targets: svgStroke,
            stroke: ['#fff', '#24CBB7']
          }, 0).add({
            targets: svgStroke,
            strokeDashoffset: [anime.setDashoffset, 0]
          }, 0);
        }
      });
      el.addEventListener('mouseleave', function (e) {
        var target = e.target;

        if (target.closest('.anime-stroke')) {
          var svgStroke = target.querySelectorAll('svg path');
          anime.timeline({
            easing: 'easeInQuad',
            duration: 400
          }).add({
            targets: svgStroke,
            stroke: ['#24CBB7', '#fff']
          }, 0);
        }
      });
    });
  })();
  /*--Отрисовка SVG кнопок*/

  /*Заполнение кнопок*/


  (function () {
    var elements = document.querySelectorAll('.blow');
    var elements_span = [];
    elements.forEach(function (element, index) {
      if (!elements_span[index]) elements_span[index] = element.querySelector('span');
      element.addEventListener('mouseover', function (e) {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + 'px';
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + 'px';
      });
      element.addEventListener('mouseout', function (e) {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + 'px';
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + 'px';
      });
    });
  })();
  /*--Заполнение кнопок*/

  /*ФОНОВЫЕ АНИМАЦИИ*/


  var commonAnimation = {
    // Логотип + Мерзкий Паттерн
    logoPattern: function logoPattern() {
      var gitPatternPath = document.querySelectorAll('.rand-anim .rand-anim__el');

      function randomValuesOpTran() {
        anime({
          targets: gitPatternPath,
          fillOpacity: function fillOpacity() {
            return anime.random(.3, .6);
          },
          translateX: function translateX() {
            return anime.random(-1, 3);
          },
          easing: 'easeInOutQuad',
          duration: 1200,
          complete: randomValuesOpTran
        });
      }

      anime.timeline({
        easing: 'easeInOutQuad',
        duration: 600
      }).add({
        targets: gitPatternPath,
        opacity: [0, 1],
        fillOpacity: [0, .4],
        delay: function delay(el, i) {
          return i * 100;
        },
        endDelay: function endDelay(el, i, l) {
          return (l - i) * 100;
        }
      }, 100).add({
        begin: randomValuesOpTran
      });
    },
    // Иконки и паттерн
    iconsPattern: function iconsPattern() {
      var bigPatternEl = document.querySelectorAll('.big-pattern svg line, .big-pattern svg rect, .big-pattern svg path');
      var blareIcon = document.querySelectorAll('.advantages-anima__group .col-anim');
      var blareIconSvg = document.querySelectorAll('.blare-advantage .blare-advantage__icon svg path');
      anime.timeline({
        duration: 950,
        delay: function delay(el, i) {
          return i * 300;
        },
        easing: 'easeInOutQuad'
      }).add({
        targets: blareIcon,
        translateY: [999, 0],
        easing: 'spring(1, 60, 10, 0)'
      }, 100).add({
        targets: blareIconSvg,
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function delay(el, i) {
          return i * 20;
        },
        duration: 700
      }, 800).add({
        targets: bigPatternEl,
        opacity: [0, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function delay(el, i) {
          return i * 50;
        },
        duration: 800
      }, 1000);
    }
  };
  window.logoPattern = commonAnimation.logoPattern;
  window.iconsPattern = commonAnimation.iconsPattern;
  logoPattern(); //iconsPattern();

  (function () {
    function Particles() {
      //particle colors
      this.colors = ['255, 255, 255', '1,62,97', '36,203,183']; //adds gradient to particles on true

      this.blurry = false; //adds white border

      this.border = false; //particle radius min/max

      this.minRadius = 10;
      this.maxRadius = 75; //particle opacity min/max

      this.minOpacity = .005;
      this.maxOpacity = .5; //particle speed min/max

      this.minSpeed = .05;
      this.maxSpeed = .5; //frames per second

      this.fps = 120; //number of particles

      this.numParticles = 350; //required canvas variables

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
      var self = this,
          wHeight = $(window).height(),
          wWidth = $(window).width();
      self.canvas.width = wWidth;
      self.canvas.height = wHeight;
      $(window).on('resize', self.render);
    };

    Particles.prototype.createCircle = function () {
      var particle = [];

      for (var i = 0; i < this.numParticles; i++) {
        var self = this,
            color = self.colors[~~self._rand(0, self.colors.length)];

        var vy = self._rand(self.minSpeed, self.maxSpeed);

        var vx = self._rand(self.minSpeed, self.maxSpeed);

        var r = 1; //Math.sqrt(Math.sqr(vx)+Math.sqr(vy));

        particle[i] = {
          radius: r,
          xPos: self._rand(0, canvas.width),
          yPos: self._rand(0, canvas.height),
          xVelocity: self._rand(self.minSpeed, self.maxSpeed),
          yVelocity: vy,
          color: 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
        }; //once values are determined, draw particle on canvas

        self.draw(particle, i);
      } //...and once drawn, animate the particle


      self.animate(particle);
    };

    Particles.prototype.draw = function (particle, i) {
      var self = this,
          ctx = self.ctx;

      if (self.blurry === true) {
        //creates gradient if blurry === true
        var grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius / 1.25);
        grd.addColorStop(1.000, particle[i].color);
        grd.addColorStop(0.000, 'rgba(34, 34, 34, 0)');
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
      var self = this,
          ctx = self.ctx;
      setInterval(function () {
        //clears canvas
        self.clearCanvas(); //then redraws particles in new positions based on velocity

        for (var i = 0; i < self.numParticles; i++) {
          particle[i].xPos += particle[i].xVelocity;
          particle[i].yPos -= particle[i].yVelocity; //if particle goes off screen call reset method to place it offscreen to the left/bottom

          if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
            self.resetParticle(particle, i);
          } else {
            self.draw(particle, i);
          }
        }
      }, 1000 / self.fps);
    };

    Particles.prototype.resetParticle = function (particle, i) {
      var self = this;

      var random = self._rand(0, 1);

      if (random > .5) {
        // 50% chance particle comes from left side of window...
        particle[i].xPos = -particle[i].radius;
        particle[i].yPos = self._rand(0, canvas.height);
      } else {
        //... or bottom of window
        particle[i].xPos = self._rand(0, canvas.width);
        particle[i].yPos = canvas.height + particle[i].radius;
      } //redraw particle with new values


      self.draw(particle, i);
    };

    Particles.prototype.clearCanvas = function () {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    var particle = new Particles();
    particle.init();
  })();
}));

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\MKTerminal\resources\js\main.js */"./resources/js/main.js");


/***/ })

/******/ });