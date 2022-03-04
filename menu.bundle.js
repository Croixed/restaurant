/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/steak.png":
/*!***********************!*\
  !*** ./src/steak.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa8fe498d0909b25312c.png";

/***/ }),

/***/ "./src/steakTwo.jpg":
/*!**************************!*\
  !*** ./src/steakTwo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8e719812b8d266e1cb4.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTwo": () => (/* binding */ menuTwo),
/* harmony export */   "menuGen": () => (/* binding */ menuGen)
/* harmony export */ });
/* harmony import */ var _steak_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.png */ "./src/steak.png");
/* harmony import */ var _steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steakTwo.jpg */ "./src/steakTwo.jpg");



const menuTwo = () => {
  console.log('test menu.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

//name ... ... price
//.. description ..
// ... image ...
const menuGenerator = (image, price, name, desc) => {
  const MenuItem = component('div', '', 'menu-item');

  const itemName = component('span', name, 'item-name');
  const itemPrice = component('span', price, 'item-price');
  const itemDesc = component('div', desc, 'item-desc');
  const itemText = component('div', '', 'item-text');
  itemText.append(itemName, itemPrice, itemDesc);

  const myImage = new Image();
  myImage.src = image;
  myImage.classList.add("menu-img");

  MenuItem.append(itemText, myImage);
  return MenuItem;
}


// this is really messy and I can definitely refactor it to stay DRY
const menuGen = () => {

  const menuOne = menuGenerator(_steak_png__WEBPACK_IMPORTED_MODULE_0__, '39.99', 'grass-fed steak', 'description goes here words words words words words');
  const menuTwo = menuGenerator(_steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__, '49.99', 'hay-fed steak', 'description goes here words words words words words');
  const menuThree = menuGenerator(_steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__, '79.99', 'chicken-fed steak', 'description goes here words words words words words');
  const menuFour = menuGenerator(_steak_png__WEBPACK_IMPORTED_MODULE_0__, '149.99', 'pork-fed steak', 'description goes here words words words words words');


  const mainContent = component('div', '', 'main-content', 'grass-fed steak');
  const contentTitle = component('div', 'Menu ', 'content-title');
  const contentText = component('div', 'Vegan Steaks:', 'content-text');
  const menuContent = component('div', '', 'menu-content');

  const menuWrapper = component('div', '', 'menu-wrapper');
  menuWrapper.append(menuOne, menuTwo);

  const menuWrapper2 = component('div', '', 'menu-wrapper');
  menuWrapper2.append(menuThree, menuFour);
  
  menuContent.append(contentTitle, contentText, menuWrapper, menuWrapper2);
  mainContent.appendChild(menuContent);
  return mainContent
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFDTTs7QUFFL0I7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTzs7QUFFUCxnQ0FBZ0MsdUNBQUs7QUFDckMsZ0NBQWdDLDBDQUFRO0FBQ3hDLGtDQUFrQywwQ0FBUTtBQUMxQyxpQ0FBaUMsdUNBQUs7OztBQUd0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWsucG5nJztcbmltcG9ydCBTdGVha1R3byBmcm9tICcuL3N0ZWFrVHdvLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtZW51VHdvID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygndGVzdCBtZW51LmpzJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuLy9uYW1lIC4uLiAuLi4gcHJpY2Vcbi8vLi4gZGVzY3JpcHRpb24gLi5cbi8vIC4uLiBpbWFnZSAuLi5cbmNvbnN0IG1lbnVHZW5lcmF0b3IgPSAoaW1hZ2UsIHByaWNlLCBuYW1lLCBkZXNjKSA9PiB7XG4gIGNvbnN0IE1lbnVJdGVtID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGl0ZW1OYW1lID0gY29tcG9uZW50KCdzcGFuJywgbmFtZSwgJ2l0ZW0tbmFtZScpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBjb21wb25lbnQoJ3NwYW4nLCBwcmljZSwgJ2l0ZW0tcHJpY2UnKTtcbiAgY29uc3QgaXRlbURlc2MgPSBjb21wb25lbnQoJ2RpdicsIGRlc2MsICdpdGVtLWRlc2MnKTtcbiAgY29uc3QgaXRlbVRleHQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnaXRlbS10ZXh0Jyk7XG4gIGl0ZW1UZXh0LmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzYyk7XG5cbiAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBteUltYWdlLnNyYyA9IGltYWdlO1xuICBteUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcblxuICBNZW51SXRlbS5hcHBlbmQoaXRlbVRleHQsIG15SW1hZ2UpO1xuICByZXR1cm4gTWVudUl0ZW07XG59XG5cblxuLy8gdGhpcyBpcyByZWFsbHkgbWVzc3kgYW5kIEkgY2FuIGRlZmluaXRlbHkgcmVmYWN0b3IgaXQgdG8gc3RheSBEUllcbmV4cG9ydCBjb25zdCBtZW51R2VuID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1lbnVPbmUgPSBtZW51R2VuZXJhdG9yKFN0ZWFrLCAnMzkuOTknLCAnZ3Jhc3MtZmVkIHN0ZWFrJywgJ2Rlc2NyaXB0aW9uIGdvZXMgaGVyZSB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcycpO1xuICBjb25zdCBtZW51VHdvID0gbWVudUdlbmVyYXRvcihTdGVha1R3bywgJzQ5Ljk5JywgJ2hheS1mZWQgc3RlYWsnLCAnZGVzY3JpcHRpb24gZ29lcyBoZXJlIHdvcmRzIHdvcmRzIHdvcmRzIHdvcmRzIHdvcmRzJyk7XG4gIGNvbnN0IG1lbnVUaHJlZSA9IG1lbnVHZW5lcmF0b3IoU3RlYWtUd28sICc3OS45OScsICdjaGlja2VuLWZlZCBzdGVhaycsICdkZXNjcmlwdGlvbiBnb2VzIGhlcmUgd29yZHMgd29yZHMgd29yZHMgd29yZHMgd29yZHMnKTtcbiAgY29uc3QgbWVudUZvdXIgPSBtZW51R2VuZXJhdG9yKFN0ZWFrLCAnMTQ5Ljk5JywgJ3BvcmstZmVkIHN0ZWFrJywgJ2Rlc2NyaXB0aW9uIGdvZXMgaGVyZSB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcycpO1xuXG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWFpbi1jb250ZW50JywgJ2dyYXNzLWZlZCBzdGVhaycpO1xuICBjb25zdCBjb250ZW50VGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdNZW51ICcsICdjb250ZW50LXRpdGxlJyk7XG4gIGNvbnN0IGNvbnRlbnRUZXh0ID0gY29tcG9uZW50KCdkaXYnLCAnVmVnYW4gU3RlYWtzOicsICdjb250ZW50LXRleHQnKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS1jb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudVdyYXBwZXIgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS13cmFwcGVyJyk7XG4gIG1lbnVXcmFwcGVyLmFwcGVuZChtZW51T25lLCBtZW51VHdvKTtcblxuICBjb25zdCBtZW51V3JhcHBlcjIgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS13cmFwcGVyJyk7XG4gIG1lbnVXcmFwcGVyMi5hcHBlbmQobWVudVRocmVlLCBtZW51Rm91cik7XG4gIFxuICBtZW51Q29udGVudC5hcHBlbmQoY29udGVudFRpdGxlLCBjb250ZW50VGV4dCwgbWVudVdyYXBwZXIsIG1lbnVXcmFwcGVyMik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgcmV0dXJuIG1haW5Db250ZW50XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9