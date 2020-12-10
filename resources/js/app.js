/*
 * Сборка проекта: зависимости, начальная загрузка
 */
import $ from 'jquery';
window.$ = window.jQuery = $;

// Bootstrap 4
import 'popper.js';
import 'bootstrap';

// Fancybox 3
require('@fancyapps/fancybox');

// Slick slider
import 'slick-carousel';

// Глобальный код проекта: фреймворк, другой минифицируемый код.
console.log('ASMFM project: application has been started.');
