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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/css/styles.css */ \"./src/styles/css/styles.css\");\n/* harmony import */ var _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/Меню.svg */ \"./src/assets/images/Меню.svg\");\n/* harmony import */ var _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/Сравение.svg */ \"./src/assets/images/Сравение.svg\");\n/* harmony import */ var _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/Поиск.svg */ \"./src/assets/images/Поиск.svg\");\n/* harmony import */ var _src_assets_images_Group_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/assets/images/Group.svg */ \"./src/assets/images/Group.svg\");\n/* harmony import */ var _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/images/Лого.svg */ \"./src/assets/images/Лого.svg\");\n\n\n\n\n\n\nconst menu = document.querySelector(\".header__nav-menu\");\nconst sravn = document.querySelector(\".header__nav-sravn\");\nconst poisk = document.querySelector(\".header__nav-poisk\");\nconst logo = document.querySelector(\".header__nav-logo\");\nconst texts = document.querySelectorAll('.inputs__text');\nconst textarea = document.querySelector('.textarea');\nconst LogoImage = document.createElement('img');\nLogoImage.src = _src_assets_images_Group_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nlogo.appendChild(LogoImage);\nconst sravnImage = document.createElement('img');\nsravnImage.src = _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nsravn.appendChild(sravnImage);\nconst poiskImage = document.createElement('img');\npoiskImage.src = _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\npoisk.appendChild(poiskImage);\nconst img = document.createElement('img');\nimg.src = _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nmenu.appendChild(img);\nwindow.addEventListener(\"resize\", function () {\n  if (window.matchMedia(\"(min-width:400px) and (max-width: 800px)\").matches) {\n    LogoImage.src = _src_assets_images_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  } else if (window.matchMedia(\"(min-width:800px)\").matches) {\n    LogoImage.src = _src_assets_images_Group_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  } else if (window.matchMedia(\"(max-width:400px)\").matches) {\n    LogoImage.src = _src_assets_images_Group_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  }\n});\ndocument.querySelector('form').onsubmit = function (event) {\n  event.preventDefault();\n  for (let text of texts) {\n    if (text.firstElementChild.value === \"\") {\n      text.firstElementChild.classList.add(\"error\");\n      text.firstElementChild.classList.remove(\"blur\");\n      text.lastElementChild.classList.add(\"error\");\n    }\n    if (textarea.value === \"\") {\n      textarea.classList.add(\"error\");\n      textarea.classList.remove(\"blur\");\n    }\n  }\n};\nfor (let text of texts) {\n  text.firstElementChild.addEventListener('input', function () {\n    if (text.firstElementChild.value !== \"\") {\n      text.firstElementChild.classList.add(\"check\");\n      text.lastElementChild.classList.add(\"template\");\n      text.firstElementChild.classList.remove(\"error\");\n      text.lastElementChild.classList.remove(\"error\");\n    } else {\n      text.firstElementChild.classList.remove(\"check\");\n      text.lastElementChild.classList.remove(\"template\");\n    }\n  });\n  text.firstElementChild.addEventListener('blur', function () {\n    if (text.firstElementChild.value !== \"\") {\n      text.firstElementChild.classList.add(\"blur\");\n    } else {\n      text.firstElementChild.classList.remove(\"blur\");\n    }\n  });\n}\ntextarea.addEventListener('input', function () {\n  if (textarea.value !== \"\") {\n    textarea.classList.add(\"check\");\n    textarea.classList.remove(\"error\");\n  } else {\n    textarea.classList.remove(\"check\");\n  }\n});\ntextarea.addEventListener('click', function () {\n  textarea.classList.remove(\"blur\");\n  textarea.classList.add(\"check\");\n  textarea.classList.remove(\"error\");\n});\ntextarea.addEventListener('blur', function () {\n  textarea.classList.remove(\"check\");\n  textarea.classList.add(\"blur\");\n});\n\n//# sourceURL=webpack://webpack-course/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/Group.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Group.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5c92fa153d485d05f31b05689ca42511.svg\");\n\n//# sourceURL=webpack://webpack-course/./src/assets/images/Group.svg?");

/***/ }),

/***/ "./src/assets/images/Лого.svg":
/*!************************************!*\
  !*** ./src/assets/images/Лого.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2cb5bfce2b47d0d180444af5dd8431e3.svg\");\n\n//# sourceURL=webpack://webpack-course/./src/assets/images/%D0%9B%D0%BE%D0%B3%D0%BE.svg?");

/***/ }),

/***/ "./src/assets/images/Меню.svg":
/*!************************************!*\
  !*** ./src/assets/images/Меню.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7fcd9f3b808c6cf31feab04277d43c0c.svg\");\n\n//# sourceURL=webpack://webpack-course/./src/assets/images/%D0%9C%D0%B5%D0%BD%D1%8E.svg?");

/***/ }),

/***/ "./src/assets/images/Поиск.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Поиск.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dac56ef4669e3e4a82be50c9e9a59225.svg\");\n\n//# sourceURL=webpack://webpack-course/./src/assets/images/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA.svg?");

/***/ }),

/***/ "./src/assets/images/Сравение.svg":
/*!****************************************!*\
  !*** ./src/assets/images/Сравение.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"89f6e2d959e83b1bdae760da3bdd8529.svg\");\n\n//# sourceURL=webpack://webpack-course/./src/assets/images/%D0%A1%D1%80%D0%B0%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5.svg?");

/***/ }),

/***/ "./src/styles/css/styles.css":
/*!***********************************!*\
  !*** ./src/styles/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-course/./src/styles/css/styles.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_course"] = self["webpackChunkwebpack_course"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;