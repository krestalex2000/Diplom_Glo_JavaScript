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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n  modalOpen: '#callback',\r\n  modalSelector: '.header-modal',\r\n  modalClose: 'header-modal__close',\r\n  list: false\r\n});\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n  modalOpen: '.service-modal-btn',\r\n  modalSelector: '.services-modal',\r\n  modalClose: 'services-modal__close',\r\n  list: true,\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  sliderSelector: '#benefits',\r\n  slidesSelector: '.benefits__item',\r\n  arrowRightSelector: '.benefits__arrow--right',\r\n  arrowLeftSelector: '.benefits__arrow--left',\r\n  countSlideDesktop: 3,\r\n  countSlideMobile: 1,\r\n  auto: true,\r\n  timeInterval: 2000,\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  sliderSelector: '#services .row',\r\n  slidesSelector: '.service__item',\r\n  arrowRightSelector: '.services__arrow--right',\r\n  arrowLeftSelector: '.services__arrow--left',\r\n  countSlideDesktop: 2,\r\n  countSlideMobile: 1,\r\n  auto: false,\r\n  timeInterval: 2000,\r\n});\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n  deadline: new Date().getTime() + 1.728e8,\r\n  selector: '#order_1'\r\n});\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n  deadline: new Date().getTime() + 1.728e8,\r\n  selector: '#order_2'\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId: 'form-1',\r\n  someElement: [\r\n    {\r\n      type: 'input',\r\n      id: 'calc-total'\r\n    }\r\n  ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId: 'form-2',\r\n  someElement: [\r\n    {\r\n      type: 'input',\r\n      id: 'calc-total'\r\n    }\r\n  ]\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = ({modalSelector, modalOpen, modalClose, list}) => {\r\n  const modal = document.querySelector(modalSelector);\r\n  const overlay = document.querySelector('.overlay');\r\n  // const callBtn = document.querySelectorAll(modalOpen);\r\n  let btn;\r\n\r\n  if (list) {\r\n    btn = document.querySelectorAll(modalOpen);\r\n  } else {\r\n    btn = document.querySelector(modalOpen);\r\n  }\r\n \r\n  document.body.addEventListener('click', e => {\r\n    if (btn.length > 1) {\r\n      btn.forEach(element => {\r\n        if (e.target === element) {\r\n          e.preventDefault();\r\n\r\n          modal.style.display = 'block';\r\n          overlay.style.display = 'block';\r\n        }\r\n      });\r\n    } else {\r\n      if (e.target === btn) {\r\n        e.preventDefault();\r\n  \r\n        modal.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n      }\r\n    }\r\n\r\n    if (e.target.classList.contains(modalClose) || e.target === overlay) {\r\n      modal.style.display = 'none';\r\n      overlay.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formId, someElement = []}) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement('div');\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжется';\r\n\r\n  const sendData = (data) =>\r\n    fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    }).then((res) => res.json());\r\n\r\n  const validate = list => {\r\n    let success = true;\r\n    const PATTERN_PHONE = /^\\+\\d{11,16}/;\r\n    const PATTERN_NAME = /[а-яА-ЯЁёa-zA-Z]/;\r\n\r\n    list.forEach((input) => {\r\n      if (\r\n        (input.name === 'phone' && !PATTERN_PHONE.test(input.value)) ||\r\n        (input.name === 'fio' && !PATTERN_NAME.test(input.value)) ||\r\n        (input.value === '')\r\n      ) {\r\n        success = false;\r\n        input.classList.add('error');\r\n      } else {\r\n        success = true;\r\n        input.classList.remove('error');\r\n      }\r\n    });\r\n\r\n    return success;\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input[type=\"text\"]');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    form.append(statusBlock);\r\n    setInterval(() => {\r\n      statusBlock.remove();\r\n    },3000)\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElement.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      \r\n      if (elem.type === 'block' && element) {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === 'input' && element) {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(() => {\r\n          statusBlock.textContent = successText;\r\n          formElements.forEach((input) => {\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch(() => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert('Данные не валидны');\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму на место');\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({sliderSelector, slidesSelector, arrowLeftSelector, arrowRightSelector, countSlideDesktop, countSlideMobile, timeInterval, auto}) => {\r\n  \r\n  const sliderBlock = document.querySelector(sliderSelector);\r\n  const slides = sliderBlock.querySelectorAll(slidesSelector);\r\n  let currentSlide = 0;\r\n  let interval;\r\n  \r\n  const prevSlide = () => {\r\n    slides.forEach((slide) => {\r\n      slide.style.transform = `translateX(${currentSlide * slide.clientWidth}px)`;\r\n    })\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    slides.forEach((slide) => {\r\n      slide.style.transform = `translateX(${currentSlide * -slide.clientWidth}px)`;\r\n    });\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide();\r\n    currentSlide++;\r\n\r\n    if (\r\n      (currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) ||\r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n    ) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide();\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    prevSlide();\r\n\r\n    if (e.target.closest(arrowLeftSelector)) {\r\n      currentSlide--;\r\n    } else if (e.target.closest(arrowRightSelector)) {\r\n      currentSlide++;\r\n    }\r\n\r\n    if ((currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) || \r\n      (document.body.clientWidth < 576 && currentSlide >= slides.length)\r\n     ) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0 && document.body.clientWidth < 576) {\r\n      currentSlide = slides.length - countSlideMobile;\r\n    } else if (currentSlide < 0) {\r\n      currentSlide = slides.length - countSlideDesktop;\r\n    } nextSlide();\r\n  }, true);\r\n\r\n  if (auto) {\r\n    startSlide(timeInterval);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = ({deadline, selector}) => {\r\n  const timerDays = document.querySelector(`${selector} .count_1 span`);\r\n  const timerHours = document.querySelector(`${selector} .count_2 span`);\r\n  const timerMinutes = document.querySelector(`${selector} .count_3 span`);\r\n  const timerSeconds = document.querySelector(`${selector} .count_4 span`);\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60) % 24;\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    days.toString().length === 1 ? days = '0' + days : days;\r\n    hours.toString().length === 1 ? hours = '0' + hours : hours;\r\n    minutes.toString().length === 1 ? minutes = '0' + minutes : minutes;\r\n    seconds.toString().length === 1 ? seconds = '0' + seconds : seconds;\r\n\r\n    return {\r\n      timeRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimeRemaining();\r\n\r\n    timerDays.textContent = getTime.days\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n  };\r\n\r\n  if (getTimeRemaining().timeRemaining > 0) {\r\n    setInterval(updateClock, 1000);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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