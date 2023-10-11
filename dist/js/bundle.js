/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n  modalOpen: '#callback',\r\n  modalSelector: '.header-modal',\r\n  modalClose: 'header-modal__close',\r\n  list: false\r\n});\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n  modalOpen: '.service-modal-btn',\r\n  modalSelector: '.services-modal',\r\n  modalClose: 'services-modal__close',\r\n  list: true,\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  sliderSelector: '#benefits',\r\n  slidesSelector: '.benefits__item',\r\n  arrowRightSelector: '.benefits__arrow--right',\r\n  arrowLeftSelector: '.benefits__arrow--left',\r\n  countSlideDesktop: 3,\r\n  countSlideMobile: 1,\r\n  auto: true,\r\n  timeInterval: 2000,\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  sliderSelector: '#services .row',\r\n  slidesSelector: '.service__item',\r\n  arrowRightSelector: '.services__arrow--right',\r\n  arrowLeftSelector: '.services__arrow--left',\r\n  countSlideDesktop: 2,\r\n  countSlideMobile: 1,\r\n  auto: false,\r\n  timeInterval: 2000,\r\n});\r\n\r\n// sliderBlock, slides, step, countSlideDesktop, countSlideMobile, timeInterval;\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = ({modalSelector, modalOpen, modalClose, list}) => {\r\n  const modal = document.querySelector(modalSelector);\r\n  const overlay = document.querySelector('.overlay');\r\n  // const callBtn = document.querySelectorAll(modalOpen);\r\n  let btn;\r\n\r\n  if (list) {\r\n    btn = document.querySelectorAll(modalOpen);\r\n  } else {\r\n    btn = document.querySelector(modalOpen);\r\n  }\r\n \r\n  document.body.addEventListener('click', e => {\r\n    if (btn.length > 1) {\r\n      btn.forEach(element => {\r\n        if (e.target === element) {\r\n          e.preventDefault();\r\n\r\n          modal.style.display = 'block';\r\n          overlay.style.display = 'block';\r\n        }\r\n      });\r\n    } else {\r\n      if (e.target === btn) {\r\n        e.preventDefault();\r\n  \r\n        modal.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n      }\r\n    }\r\n\r\n    if (e.target.classList.contains(modalClose) || e.target === overlay) {\r\n      modal.style.display = 'none';\r\n      overlay.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({sliderSelector, slidesSelector, arrowLeftSelector, arrowRightSelector, countSlideDesktop, countSlideMobile, timeInterval, auto}) => {\r\n  \r\n  const sliderBlock = document.querySelector(sliderSelector);\r\n  const slides = sliderBlock.querySelectorAll(slidesSelector);\r\n  let currentSlide = 0;\r\n  let interval;\r\n  \r\n  const prevSlide = () => {\r\n    slides.forEach((slide) => {\r\n      slide.style.transform = `translateX(${currentSlide * slide.clientWidth}px)`;\r\n    })\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    slides.forEach((slide) => {\r\n      slide.style.transform = `translateX(${currentSlide * -slide.clientWidth}px)`;\r\n    });\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide();\r\n    currentSlide++;\r\n\r\n    if (\r\n      (currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) ||\r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n    ) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide();\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    prevSlide();\r\n\r\n    if (e.target.closest(arrowLeftSelector)) {\r\n      currentSlide--;\r\n    } else if (e.target.closest(arrowRightSelector)) {\r\n      currentSlide++;\r\n    }\r\n\r\n    if ((currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) || \r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n     ) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0 && document.body.clientWidth < 576) {\r\n      currentSlide = slides.length - countSlideMobile;\r\n    } else if (currentSlide < 0) {\r\n      currentSlide = slides.length - countSlideDesktop;\r\n    } nextSlide();\r\n  }, true);\r\n\r\n  if (auto) {\r\n    startSlide(timeInterval);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;