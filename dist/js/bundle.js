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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callRequest */ \"./modules/callRequest.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n(0,_modules_callRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/callRequest.js":
/*!********************************!*\
  !*** ./modules/callRequest.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callRequest = () => {\r\n  const callBtn = document.getElementById('callback');\r\n  const modal = document.querySelector('.header-modal');\r\n  const overlay = document.querySelector('.overlay');\r\n\r\n  document.body.addEventListener('click', e => {\r\n    if (e.target === callBtn) {\r\n      e.preventDefault();\r\n\r\n      modal.style.display = 'block';\r\n      overlay.style.display = 'block';\r\n    }\r\n\r\n    if (e.target.classList.contains('header-modal__close')) {\r\n      modal.style.display = 'none';\r\n      overlay.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callRequest);\r\n\n\n//# sourceURL=webpack:///./modules/callRequest.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.getElementById('benefits');\r\n  const slides = document.querySelectorAll('.benefits__item');\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = () => {\r\n    slides.forEach(slide => {\r\n      slide.style.transform = `translateX(${currentSlide * 190}px)`;\r\n    })\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    slides.forEach((slide) => {\r\n      slide.style.transform = `translateX(${currentSlide * -190}px)`;\r\n    });\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide();\r\n    currentSlide++;\r\n\r\n    if (\r\n      (currentSlide >= slides.length - 2 && document.body.clientWidth >= 576) ||\r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n    ) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide();\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    prevSlide();\r\n\r\n    if (e.target.closest('.benefits__arrow--left')) {\r\n      currentSlide--;\r\n    } else if (e.target.closest('.benefits__arrow--right')) {\r\n      currentSlide++;\r\n    }\r\n\r\n    if ((currentSlide >= slides.length - 2 && document.body.clientWidth >= 576) || \r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n     ) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0 && document.body.clientWidth < 576) {\r\n      currentSlide = slides.length - 1;\r\n    } else if (currentSlide < 0) {\r\n      currentSlide = slides.length - 3;\r\n    } nextSlide();\r\n  }, true);\r\n\r\n  startSlide(timeInterval)\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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