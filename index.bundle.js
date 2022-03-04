/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./steak.png */ "./src/steak.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=League+Gothic&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Open Sans';\n}\n\nbody {\n  height: 100vh;\n}\n\n.bg {    \n  background: rgba(0, 0, 0, 0.2) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-blend-mode: darken;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n\n  z-index: -1; /* this is optional */\n}\n\n#content {\n  position: absolute;\n  height: 100%;\n  min-height: 100vh;\n  /* background-color: lightblue; */\n\n  left: 0px;\n  right: 0px;\n\n  \n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  height: 70px;\n  left: 0px;\n  right: 0px;\n  background-color: #17171790; /* neutral 900 */\n  color: white;\n  font-size: 1.4rem;\n  backdrop-filter: blur(8px);\n\n  display: flex;\n  align-items: end;\n  padding: 0px 16px;\n  position: fixed;\n\n  border-bottom: 4px solid rgb(9, 18, 24);\n}\n\n.restaurant {\n  font-size: 2.8rem;\n  font-family: 'Lobster';\n}\n\n.links {\n  margin-left: auto;\n  display: flex;\n  gap: 16px;\n}\n.links>* {\n  font-family: \"League Gothic\";\n  font-size: 2.4rem;\n}\n\n.main-content {\n  flex: 1;\n  color: white;\n  margin: 8%;\n  margin-top: 100px;\n  margin-bottom: 50px;\n}\n\n.home-content,\n.menu-content,\n.about-content {\n  height: 100%;\n  background-color: #29252490; /* stone 800 */\n  border-radius: 10px;\n  padding: 20px;\n  padding-bottom: 0px;\n\n  border-top: 8px solid rgb(9, 18, 24);\n}\n\n.home-content,\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg[src$=\".svg\"] {\n  \n  margin: 16px;\n  margin-bottom: 22px;\n  width: 260px;\n\n}\n\n.content-title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  \n}\n\n.title-span {\n  font-size: 1.1em;\n  font-weight: normal;\n  font-family: \"Lobster\";\n}\n\n.content-text {\n  font-size: 1.4rem;\n}\n\n.home-img {\n  width: 89%;\n  border-radius: 10px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n} \n\n.menu-img {\n  max-width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item-text {\n  display:flex;\n  flex-wrap: wrap;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.item-name,\n.item-price {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.item-desc {\n  margin: 7px 0px 12px 0;\n  text-align: center;\n}\n\n.item-price {\n  margin-left: auto;\n}\n\n.home-img:nth-of-type(3) {\n  margin-top: 30px;\n}\n\n.about-img {\n  width: min(500px, 80%);\n  height: auto;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n  border-radius: 10px;\n  margin-top: 20px;\n}\n\n.footer {\n  color: cyan;\n  margin-top: 20px;\n\n  padding: 4px;\n  text-align: center;\n  background-color: #171717c9;\n}\n\n\n@media only screen and (max-width: 500px) {\n  .header {\n    flex-wrap: wrap;\n    height: 110px;\n  }\n\n  .main-content {\n    margin-top: 140px;\n  }\n\n  .content-title {\n    line-height: 95%;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-text {\n    font-size: 1.1rem;\n  }\n\n  img[src$=\".svg\"] {\n\n    width: 178px;  \n  }\n\n  .home-img {\n    width: 100%;\n    padding: 0;\n    outline: 3px solid rgba(9, 18, 24, 0.33);\n  }\n\n  .menu-wrapper {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))\n  }\n\n  .item-text {\n    min-width: 200px;\n  }\n\n  .menu-img {\n    width: 200px;\n    height: 200px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAMA;EACE,UAAU;EACV,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sEAAiD;EACjD,6BAA6B;EAC7B,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,YAAY;;EAEZ,WAAW,EAAE,qBAAqB;AACpC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;;EAEjC,SAAS;EACT,UAAU;;;;EAIV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,UAAU;EACV,2BAA2B,EAAE,gBAAgB;EAC7C,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;;EAE1B,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;;EAEf,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;AACX;AACA;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;EACZ,2BAA2B,EAAE,cAAc;EAC3C,mBAAmB;EACnB,aAAa;EACb,mBAAmB;;EAEnB,oCAAoC;AACtC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,YAAY;;AAEd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;;AAEnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,wCAAwC;EACxC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;;EAEhB,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;AAC7B;;;AAGA;EACE;IACE,eAAe;IACf,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,YAAY;EACd;;EAEA;IACE,WAAW;IACX,UAAU;IACV,wCAAwC;EAC1C;;EAEA;IACE;EACF;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');\n\n@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');\n\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Open Sans';\n}\n\nbody {\n  height: 100vh;\n}\n\n.bg {    \n  background: rgba(0, 0, 0, 0.2) url(\"./steak.png\");\n  background-blend-mode: darken;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n\n  z-index: -1; /* this is optional */\n}\n\n#content {\n  position: absolute;\n  height: 100%;\n  min-height: 100vh;\n  /* background-color: lightblue; */\n\n  left: 0px;\n  right: 0px;\n\n  \n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  height: 70px;\n  left: 0px;\n  right: 0px;\n  background-color: #17171790; /* neutral 900 */\n  color: white;\n  font-size: 1.4rem;\n  backdrop-filter: blur(8px);\n\n  display: flex;\n  align-items: end;\n  padding: 0px 16px;\n  position: fixed;\n\n  border-bottom: 4px solid rgb(9, 18, 24);\n}\n\n.restaurant {\n  font-size: 2.8rem;\n  font-family: 'Lobster';\n}\n\n.links {\n  margin-left: auto;\n  display: flex;\n  gap: 16px;\n}\n.links>* {\n  font-family: \"League Gothic\";\n  font-size: 2.4rem;\n}\n\n.main-content {\n  flex: 1;\n  color: white;\n  margin: 8%;\n  margin-top: 100px;\n  margin-bottom: 50px;\n}\n\n.home-content,\n.menu-content,\n.about-content {\n  height: 100%;\n  background-color: #29252490; /* stone 800 */\n  border-radius: 10px;\n  padding: 20px;\n  padding-bottom: 0px;\n\n  border-top: 8px solid rgb(9, 18, 24);\n}\n\n.home-content,\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg[src$=\".svg\"] {\n  \n  margin: 16px;\n  margin-bottom: 22px;\n  width: 260px;\n\n}\n\n.content-title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  \n}\n\n.title-span {\n  font-size: 1.1em;\n  font-weight: normal;\n  font-family: \"Lobster\";\n}\n\n.content-text {\n  font-size: 1.4rem;\n}\n\n.home-img {\n  width: 89%;\n  border-radius: 10px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n} \n\n.menu-img {\n  max-width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item-text {\n  display:flex;\n  flex-wrap: wrap;\n  max-width: 300px;\n  margin-top: 10px;\n}\n\n.item-name,\n.item-price {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.item-desc {\n  margin: 7px 0px 12px 0;\n  text-align: center;\n}\n\n.item-price {\n  margin-left: auto;\n}\n\n.home-img:nth-of-type(3) {\n  margin-top: 30px;\n}\n\n.about-img {\n  width: min(500px, 80%);\n  height: auto;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n  border-radius: 10px;\n  margin-top: 20px;\n}\n\n.footer {\n  color: cyan;\n  margin-top: 20px;\n\n  padding: 4px;\n  text-align: center;\n  background-color: #171717c9;\n}\n\n\n@media only screen and (max-width: 500px) {\n  .header {\n    flex-wrap: wrap;\n    height: 110px;\n  }\n\n  .main-content {\n    margin-top: 140px;\n  }\n\n  .content-title {\n    line-height: 95%;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-text {\n    font-size: 1.1rem;\n  }\n\n  img[src$=\".svg\"] {\n\n    width: 178px;  \n  }\n\n  .home-img {\n    width: 100%;\n    padding: 0;\n    outline: 3px solid rgba(9, 18, 24, 0.33);\n  }\n\n  .menu-wrapper {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))\n  }\n\n  .item-text {\n    min-width: 200px;\n  }\n\n  .menu-img {\n    width: 200px;\n    height: 200px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutTwo": () => (/* binding */ aboutTwo),
/* harmony export */   "aboutGen": () => (/* binding */ aboutGen)
/* harmony export */ });
/* harmony import */ var _canned_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canned.jpeg */ "./src/canned.jpeg");


const aboutTwo = () => {
  console.log('test about.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

const aboutGen = () => {

  const myImage = new Image();
  myImage.src = _canned_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  myImage.classList.add("about-img");

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'About Us', 'content-title')
  const contentText = component('div', 'Don\'t live nearby? Order our Vegan Meats in the mail!', 'content-text');

  const aboutContent = component('div', '', 'about-content');
  
  aboutContent.appendChild(contentTitle);
  aboutContent.appendChild(contentText);
  aboutContent.appendChild(myImage);
  mainContent.appendChild(aboutContent);
  return mainContent
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeTwo": () => (/* binding */ homeTwo),
/* harmony export */   "homeGen": () => (/* binding */ homeGen)
/* harmony export */ });
/* harmony import */ var _steak_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.png */ "./src/steak.png");
/* harmony import */ var _steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steakTwo.jpg */ "./src/steakTwo.jpg");
/* harmony import */ var _dash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash.svg */ "./src/dash.svg");




/* const mySteak = new Image();
mySteak.src = Steak; */

const homeTwo = () => {
  console.log('test home.js');
}

function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

const homeGen = () => {
  const mySteak = new Image();
  mySteak.src = _steak_png__WEBPACK_IMPORTED_MODULE_0__;
  mySteak.classList.add("home-img");
  const mySteak2 = mySteak.cloneNode(true);
  mySteak2.src = _steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__;

  const myDash = new Image();
  myDash.src = _dash_svg__WEBPACK_IMPORTED_MODULE_2__;

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Welcome to ', 'content-title')
  const titleSpan = component('span', 'Vegan Steaks', 'title-span')
  contentTitle.appendChild(titleSpan)

  const contentText = component('div', 'Home of the only Vegan Steaks! How are our steaks vegan? We taught our cattle to only eat organic, ethically sourced, vegan foods. It took many years of training and genetic modifications using CRISPR to reach this point, and now we are willing to sell you the results!', 'content-text');
  const homeContent = component('div', '', 'home-content');
  
  homeContent.append(contentTitle, contentText, myDash, mySteak, mySteak2)
  mainContent.appendChild(homeContent);
  return mainContent
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/canned.jpeg":
/*!*************************!*\
  !*** ./src/canned.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6565e4d22db99216859f.jpeg";

/***/ }),

/***/ "./src/dash.svg":
/*!**********************!*\
  !*** ./src/dash.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dd6f803adc2cbc12fb0.svg";

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");







(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuGen)();

// create main element, append to 'body'
const contents = document.createElement('div');
contents.id = 'content';

// background testing
const background = document.createElement('div');
background.classList.add("bg");
document.body.appendChild(background);



document.body.appendChild(contents);

// function to generate elements
function component(type, text, className) {
  const element = document.createElement(type);
  element.textContent = text;
  element.classList.add(className);
  return element
}

// generate the basic elements needed for header
const header = component('div', '', 'header');
const restaurant = component('div', 'Vegan Steaks', 'restaurant')
const home = component('div', 'Home', 'home');
const menu = component('div', 'Menu', 'menu');
const about = component('div', 'About Us', 'about-us');
// put links in seperate div
const links = component('div', '', 'links');
links.append(home, menu, about);
header.append(restaurant, links);
// generate content from home.js
let mainContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeGen)();
// generate footer
const footer = component('div', 'Developed with ♥ by croixed', 'footer');

contents.append(header, mainContent, footer);


// these three functions should be one function, to stay DRY
function homeFunc() {
  mainContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeGen)();
  contents.innerHTML = '';
  // this append doesn't feel very good, there's probably a better way to do this
  contents.append(header, mainContent, footer);
  console.log('cleared');
}

function menuFunc() {
  mainContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuGen)();
  contents.innerHTML = '';
  contents.append(header, mainContent, footer);
  console.log('cleared, w/ menu');
}

function aboutFunc() {
  mainContent = (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutGen)();
  contents.innerHTML = '';
  contents.append(header, mainContent, footer);
  console.log('cleared about');
}

home.onclick = homeFunc;
menu.onclick = menuFunc;
about.onclick = aboutFunc;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDZTtBQUNBO0FBQ0E7QUFDQTtBQUNFOztBQUV0QyxpREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0ZWFrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStHb3RoaWMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5iZyB7ICAgIFxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgei1pbmRleDogLTE7IC8qIHRoaXMgaXMgb3B0aW9uYWwgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICovXFxuXFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcblxcbiAgXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNzkwOyAvKiBuZXV0cmFsIDkwMCAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZzogMHB4IDE2cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDksIDE4LCAyNCk7XFxufVxcblxcbi5yZXN0YXVyYW50IHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuLmxpbmtzPioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZWFndWUgR290aGljXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDglO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LFxcbi5tZW51LWNvbnRlbnQsXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDkwOyAvKiBzdG9uZSA4MDAgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG5cXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2IoOSwgMTgsIDI0KTtcXG59XFxuXFxuLmhvbWUtY29udGVudCxcXG4uYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcbiAgXFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbiAgd2lkdGg6IDI2MHB4O1xcblxcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxufVxcblxcbi50aXRsZS1zcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIjtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmhvbWUtaW1nIHtcXG4gIHdpZHRoOiA4OSU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG59IFxcblxcbi5tZW51LWltZyB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG91dGxpbmU6IDVweCBzb2xpZCByZ2JhKDksIDE4LCAyNCwgMC4zMyk7XFxufVxcblxcbi5tZW51LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpXFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lLFxcbi5pdGVtLXByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pdGVtLWRlc2Mge1xcbiAgbWFyZ2luOiA3cHggMHB4IDEycHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tcHJpY2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5ob21lLWltZzpudGgtb2YtdHlwZSgzKSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQtaW1nIHtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDgwJSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgY29sb3I6IGN5YW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbiAgcGFkZGluZzogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxN2M5O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgfVxcblxcbiAgLm1haW4tY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGl0bGUge1xcbiAgICBsaW5lLWhlaWdodDogOTUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuXFxuICAgIHdpZHRoOiAxNzhweDsgIFxcbiAgfVxcblxcbiAgLmhvbWUtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCByZ2JhKDksIDE4LCAyNCwgMC4zMyk7XFxuICB9XFxuXFxuICAubWVudS13cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSlcXG4gIH1cXG5cXG4gIC5pdGVtLXRleHQge1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLm1lbnUtaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzRUFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTs7RUFFWixXQUFXLEVBQUUscUJBQXFCO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUNBQWlDOztFQUVqQyxTQUFTO0VBQ1QsVUFBVTs7OztFQUlWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkIsRUFBRSxnQkFBZ0I7RUFDN0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7O0VBRTFCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7O0VBRWYsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLDJCQUEyQixFQUFFLGNBQWM7RUFDM0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCOztFQUVoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStHb3RoaWMmZGlzcGxheT1zd2FwJyk7XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmJnIHsgICAgXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMikgdXJsKFxcXCIuL3N0ZWFrLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIHotaW5kZXg6IC0xOyAvKiB0aGlzIGlzIG9wdGlvbmFsICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAqL1xcblxcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG5cXG4gIFxcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc5MDsgLyogbmV1dHJhbCA5MDAgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYig5LCAxOCwgMjQpO1xcbn1cXG5cXG4ucmVzdGF1cmFudCB7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxufVxcblxcbi5saW5rcyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxufVxcbi5saW5rcz4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGVhZ3VlIEdvdGhpY1xcXCI7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiA4JTtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmhvbWUtY29udGVudCxcXG4ubWVudS1jb250ZW50LFxcbi5hYm91dC1jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI1MjQ5MDsgLyogc3RvbmUgODAwICovXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuXFxuICBib3JkZXItdG9wOiA4cHggc29saWQgcmdiKDksIDE4LCAyNCk7XFxufVxcblxcbi5ob21lLWNvbnRlbnQsXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG4gIFxcbiAgbWFyZ2luOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcXG4gIHdpZHRoOiAyNjBweDtcXG5cXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIFxcbn1cXG5cXG4udGl0bGUtc3BhbiB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCI7XFxufVxcblxcbi5jb250ZW50LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5ob21lLWltZyB7XFxuICB3aWR0aDogODklO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IDVweCBzb2xpZCByZ2JhKDksIDE4LCAyNCwgMC4zMyk7XFxufSBcXG5cXG4ubWVudS1pbWcge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKVxcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tdGV4dCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLml0ZW0tbmFtZSxcXG4uaXRlbS1wcmljZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaXRlbS1kZXNjIHtcXG4gIG1hcmdpbjogN3B4IDBweCAxMnB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLXByaWNlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uaG9tZS1pbWc6bnRoLW9mLXR5cGUoMykge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmFib3V0LWltZyB7XFxuICB3aWR0aDogbWluKDUwMHB4LCA4MCUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGNvbG9yOiBjeWFuO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTdjOTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXRpdGxlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDk1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50LXRleHQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIGltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcblxcbiAgICB3aWR0aDogMTc4cHg7ICBcXG4gIH1cXG5cXG4gIC5ob21lLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdXRsaW5lOiAzcHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbiAgfVxcblxcbiAgLm1lbnUtd3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpXFxuICB9XFxuXFxuICAuaXRlbS10ZXh0IHtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5tZW51LWltZyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDYW5uZWQgZnJvbSAnLi9jYW5uZWQuanBlZyc7XG5cbmV4cG9ydCBjb25zdCBhYm91dFR3byA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3Rlc3QgYWJvdXQuanMnKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KHR5cGUsIHRleHQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XG5cbiAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBteUltYWdlLnNyYyA9IENhbm5lZDtcbiAgbXlJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaW1nXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21haW4tY29udGVudCcpO1xuICBjb25zdCBjb250ZW50VGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdBYm91dCBVcycsICdjb250ZW50LXRpdGxlJylcbiAgY29uc3QgY29udGVudFRleHQgPSBjb21wb25lbnQoJ2RpdicsICdEb25cXCd0IGxpdmUgbmVhcmJ5PyBPcmRlciBvdXIgVmVnYW4gTWVhdHMgaW4gdGhlIG1haWwhJywgJ2NvbnRlbnQtdGV4dCcpO1xuXG4gIGNvbnN0IGFib3V0Q29udGVudCA9IGNvbXBvbmVudCgnZGl2JywgJycsICdhYm91dC1jb250ZW50Jyk7XG4gIFxuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUZXh0KTtcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICByZXR1cm4gbWFpbkNvbnRlbnRcbn0iLCJpbXBvcnQgU3RlYWsgZnJvbSAnLi9zdGVhay5wbmcnO1xuaW1wb3J0IFN0ZWFrVHdvIGZyb20gJy4vc3RlYWtUd28uanBnJztcbmltcG9ydCBEYXNoIGZyb20gJy4vZGFzaC5zdmcnO1xuXG4vKiBjb25zdCBteVN0ZWFrID0gbmV3IEltYWdlKCk7XG5teVN0ZWFrLnNyYyA9IFN0ZWFrOyAqL1xuXG5leHBvcnQgY29uc3QgaG9tZVR3byA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3Rlc3QgaG9tZS5qcycpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQodHlwZSwgdGV4dCwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBob21lR2VuID0gKCkgPT4ge1xuICBjb25zdCBteVN0ZWFrID0gbmV3IEltYWdlKCk7XG4gIG15U3RlYWsuc3JjID0gU3RlYWs7XG4gIG15U3RlYWsuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1nXCIpO1xuICBjb25zdCBteVN0ZWFrMiA9IG15U3RlYWsuY2xvbmVOb2RlKHRydWUpO1xuICBteVN0ZWFrMi5zcmMgPSBTdGVha1R3bztcblxuICBjb25zdCBteURhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgbXlEYXNoLnNyYyA9IERhc2g7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGNvbXBvbmVudCgnZGl2JywgJ1dlbGNvbWUgdG8gJywgJ2NvbnRlbnQtdGl0bGUnKVxuICBjb25zdCB0aXRsZVNwYW4gPSBjb21wb25lbnQoJ3NwYW4nLCAnVmVnYW4gU3RlYWtzJywgJ3RpdGxlLXNwYW4nKVxuICBjb250ZW50VGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKVxuXG4gIGNvbnN0IGNvbnRlbnRUZXh0ID0gY29tcG9uZW50KCdkaXYnLCAnSG9tZSBvZiB0aGUgb25seSBWZWdhbiBTdGVha3MhIEhvdyBhcmUgb3VyIHN0ZWFrcyB2ZWdhbj8gV2UgdGF1Z2h0IG91ciBjYXR0bGUgdG8gb25seSBlYXQgb3JnYW5pYywgZXRoaWNhbGx5IHNvdXJjZWQsIHZlZ2FuIGZvb2RzLiBJdCB0b29rIG1hbnkgeWVhcnMgb2YgdHJhaW5pbmcgYW5kIGdlbmV0aWMgbW9kaWZpY2F0aW9ucyB1c2luZyBDUklTUFIgdG8gcmVhY2ggdGhpcyBwb2ludCwgYW5kIG5vdyB3ZSBhcmUgd2lsbGluZyB0byBzZWxsIHlvdSB0aGUgcmVzdWx0cyEnLCAnY29udGVudC10ZXh0Jyk7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ2hvbWUtY29udGVudCcpO1xuICBcbiAgaG9tZUNvbnRlbnQuYXBwZW5kKGNvbnRlbnRUaXRsZSwgY29udGVudFRleHQsIG15RGFzaCwgbXlTdGVhaywgbXlTdGVhazIpXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgcmV0dXJuIG1haW5Db250ZW50XG59IiwiaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWsucG5nJztcbmltcG9ydCBTdGVha1R3byBmcm9tICcuL3N0ZWFrVHdvLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtZW51VHdvID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygndGVzdCBtZW51LmpzJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuLy9uYW1lIC4uLiAuLi4gcHJpY2Vcbi8vLi4gZGVzY3JpcHRpb24gLi5cbi8vIC4uLiBpbWFnZSAuLi5cbmNvbnN0IG1lbnVHZW5lcmF0b3IgPSAoaW1hZ2UsIHByaWNlLCBuYW1lLCBkZXNjKSA9PiB7XG4gIGNvbnN0IE1lbnVJdGVtID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGl0ZW1OYW1lID0gY29tcG9uZW50KCdzcGFuJywgbmFtZSwgJ2l0ZW0tbmFtZScpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBjb21wb25lbnQoJ3NwYW4nLCBwcmljZSwgJ2l0ZW0tcHJpY2UnKTtcbiAgY29uc3QgaXRlbURlc2MgPSBjb21wb25lbnQoJ2RpdicsIGRlc2MsICdpdGVtLWRlc2MnKTtcbiAgY29uc3QgaXRlbVRleHQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnaXRlbS10ZXh0Jyk7XG4gIGl0ZW1UZXh0LmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzYyk7XG5cbiAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBteUltYWdlLnNyYyA9IGltYWdlO1xuICBteUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcblxuICBNZW51SXRlbS5hcHBlbmQoaXRlbVRleHQsIG15SW1hZ2UpO1xuICByZXR1cm4gTWVudUl0ZW07XG59XG5cblxuLy8gdGhpcyBpcyByZWFsbHkgbWVzc3kgYW5kIEkgY2FuIGRlZmluaXRlbHkgcmVmYWN0b3IgaXQgdG8gc3RheSBEUllcbmV4cG9ydCBjb25zdCBtZW51R2VuID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1lbnVPbmUgPSBtZW51R2VuZXJhdG9yKFN0ZWFrLCAnMzkuOTknLCAnZ3Jhc3MtZmVkIHN0ZWFrJywgJ2Rlc2NyaXB0aW9uIGdvZXMgaGVyZSB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcycpO1xuICBjb25zdCBtZW51VHdvID0gbWVudUdlbmVyYXRvcihTdGVha1R3bywgJzQ5Ljk5JywgJ2hheS1mZWQgc3RlYWsnLCAnZGVzY3JpcHRpb24gZ29lcyBoZXJlIHdvcmRzIHdvcmRzIHdvcmRzIHdvcmRzIHdvcmRzJyk7XG4gIGNvbnN0IG1lbnVUaHJlZSA9IG1lbnVHZW5lcmF0b3IoU3RlYWtUd28sICc3OS45OScsICdjaGlja2VuLWZlZCBzdGVhaycsICdkZXNjcmlwdGlvbiBnb2VzIGhlcmUgd29yZHMgd29yZHMgd29yZHMgd29yZHMgd29yZHMnKTtcbiAgY29uc3QgbWVudUZvdXIgPSBtZW51R2VuZXJhdG9yKFN0ZWFrLCAnMTQ5Ljk5JywgJ3BvcmstZmVkIHN0ZWFrJywgJ2Rlc2NyaXB0aW9uIGdvZXMgaGVyZSB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcyB3b3JkcycpO1xuXG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWFpbi1jb250ZW50JywgJ2dyYXNzLWZlZCBzdGVhaycpO1xuICBjb25zdCBjb250ZW50VGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdNZW51ICcsICdjb250ZW50LXRpdGxlJyk7XG4gIGNvbnN0IGNvbnRlbnRUZXh0ID0gY29tcG9uZW50KCdkaXYnLCAnVmVnYW4gU3RlYWtzOicsICdjb250ZW50LXRleHQnKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS1jb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudVdyYXBwZXIgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS13cmFwcGVyJyk7XG4gIG1lbnVXcmFwcGVyLmFwcGVuZChtZW51T25lLCBtZW51VHdvKTtcblxuICBjb25zdCBtZW51V3JhcHBlcjIgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWVudS13cmFwcGVyJyk7XG4gIG1lbnVXcmFwcGVyMi5hcHBlbmQobWVudVRocmVlLCBtZW51Rm91cik7XG4gIFxuICBtZW51Q29udGVudC5hcHBlbmQoY29udGVudFRpdGxlLCBjb250ZW50VGV4dCwgbWVudVdyYXBwZXIsIG1lbnVXcmFwcGVyMik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgcmV0dXJuIG1haW5Db250ZW50XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBob21lR2VuIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGhvbWVUd28gfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgbWVudUdlbiB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBtZW51VHdvIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGFib3V0R2VuIH0gZnJvbSAnLi9hYm91dC5qcyc7XG5cbm1lbnVHZW4oKTtcblxuLy8gY3JlYXRlIG1haW4gZWxlbWVudCwgYXBwZW5kIHRvICdib2R5J1xuY29uc3QgY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnRzLmlkID0gJ2NvbnRlbnQnO1xuXG4vLyBiYWNrZ3JvdW5kIHRlc3RpbmdcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJnXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuXG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBlbGVtZW50c1xuZnVuY3Rpb24gY29tcG9uZW50KHR5cGUsIHRleHQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudFxufVxuXG4vLyBnZW5lcmF0ZSB0aGUgYmFzaWMgZWxlbWVudHMgbmVlZGVkIGZvciBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGNvbXBvbmVudCgnZGl2JywgJycsICdoZWFkZXInKTtcbmNvbnN0IHJlc3RhdXJhbnQgPSBjb21wb25lbnQoJ2RpdicsICdWZWdhbiBTdGVha3MnLCAncmVzdGF1cmFudCcpXG5jb25zdCBob21lID0gY29tcG9uZW50KCdkaXYnLCAnSG9tZScsICdob21lJyk7XG5jb25zdCBtZW51ID0gY29tcG9uZW50KCdkaXYnLCAnTWVudScsICdtZW51Jyk7XG5jb25zdCBhYm91dCA9IGNvbXBvbmVudCgnZGl2JywgJ0Fib3V0IFVzJywgJ2Fib3V0LXVzJyk7XG4vLyBwdXQgbGlua3MgaW4gc2VwZXJhdGUgZGl2XG5jb25zdCBsaW5rcyA9IGNvbXBvbmVudCgnZGl2JywgJycsICdsaW5rcycpO1xubGlua3MuYXBwZW5kKGhvbWUsIG1lbnUsIGFib3V0KTtcbmhlYWRlci5hcHBlbmQocmVzdGF1cmFudCwgbGlua3MpO1xuLy8gZ2VuZXJhdGUgY29udGVudCBmcm9tIGhvbWUuanNcbmxldCBtYWluQ29udGVudCA9IGhvbWVHZW4oKTtcbi8vIGdlbmVyYXRlIGZvb3RlclxuY29uc3QgZm9vdGVyID0gY29tcG9uZW50KCdkaXYnLCAnRGV2ZWxvcGVkIHdpdGgg4pmlIGJ5IGNyb2l4ZWQnLCAnZm9vdGVyJyk7XG5cbmNvbnRlbnRzLmFwcGVuZChoZWFkZXIsIG1haW5Db250ZW50LCBmb290ZXIpO1xuXG5cbi8vIHRoZXNlIHRocmVlIGZ1bmN0aW9ucyBzaG91bGQgYmUgb25lIGZ1bmN0aW9uLCB0byBzdGF5IERSWVxuZnVuY3Rpb24gaG9tZUZ1bmMoKSB7XG4gIG1haW5Db250ZW50ID0gaG9tZUdlbigpO1xuICBjb250ZW50cy5pbm5lckhUTUwgPSAnJztcbiAgLy8gdGhpcyBhcHBlbmQgZG9lc24ndCBmZWVsIHZlcnkgZ29vZCwgdGhlcmUncyBwcm9iYWJseSBhIGJldHRlciB3YXkgdG8gZG8gdGhpc1xuICBjb250ZW50cy5hcHBlbmQoaGVhZGVyLCBtYWluQ29udGVudCwgZm9vdGVyKTtcbiAgY29uc29sZS5sb2coJ2NsZWFyZWQnKTtcbn1cblxuZnVuY3Rpb24gbWVudUZ1bmMoKSB7XG4gIG1haW5Db250ZW50ID0gbWVudUdlbigpO1xuICBjb250ZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29udGVudHMuYXBwZW5kKGhlYWRlciwgbWFpbkNvbnRlbnQsIGZvb3Rlcik7XG4gIGNvbnNvbGUubG9nKCdjbGVhcmVkLCB3LyBtZW51Jyk7XG59XG5cbmZ1bmN0aW9uIGFib3V0RnVuYygpIHtcbiAgbWFpbkNvbnRlbnQgPSBhYm91dEdlbigpO1xuICBjb250ZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29udGVudHMuYXBwZW5kKGhlYWRlciwgbWFpbkNvbnRlbnQsIGZvb3Rlcik7XG4gIGNvbnNvbGUubG9nKCdjbGVhcmVkIGFib3V0Jyk7XG59XG5cbmhvbWUub25jbGljayA9IGhvbWVGdW5jO1xubWVudS5vbmNsaWNrID0gbWVudUZ1bmM7XG5hYm91dC5vbmNsaWNrID0gYWJvdXRGdW5jOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==