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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Open Sans';\n}\n\nbody {\n  height: 100vh;\n}\n\n.bg {    \n  background: rgba(0, 0, 0, 0.2) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-blend-mode: darken;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n\n  z-index: -1; /* this is optional */\n}\n\n#content {\n  position: absolute;\n  height: 100%;\n  min-height: 100vh;\n  /* background-color: lightblue; */\n\n  left: 0px;\n  right: 0px;\n\n  \n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  height: 70px;\n  left: 0px;\n  right: 0px;\n  background-color: #17171790; /* neutral 900 */\n  color: white;\n  font-size: 1.4rem;\n  backdrop-filter: blur(8px);\n\n  display: flex;\n  align-items: end;\n  padding: 0px 16px;\n  position: fixed;\n\n  border-bottom: 4px solid rgb(9, 18, 24);\n}\n\n.restaurant {\n  font-size: 2.8rem;\n  font-family: 'Lobster';\n}\n\n.links {\n  margin-left: auto;\n  display: flex;\n  gap: 16px;\n}\n.links>* {\n  font-family: \"League Gothic\";\n  font-size: 2.4rem;\n}\n\n.main-content {\n  flex: 1;\n  color: white;\n  margin: 8%;\n  margin-top: 100px;\n  margin-bottom: 50px;\n}\n\n.home-content,\n.menu-content,\n.about-content {\n  height: 100%;\n  background-color: #29252490; /* stone 800 */\n  border-radius: 10px;\n  padding: 20px;\n  padding-bottom: 0px;\n\n  border-top: 8px solid rgb(9, 18, 24);\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg[src$=\".svg\"] {\n  \n  margin: 16px;\n  margin-bottom: 22px;\n  width: 260px;\n\n}\n\n.content-title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  \n}\n\n.title-span {\n  font-size: 1.1em;\n  font-weight: normal;\n  font-family: \"Lobster\";\n}\n\n.content-text {\n  font-size: 1.4rem;\n}\n\n.home-img {\n  width: 89%;\n  border-radius: 10px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n} \n\n.menu-img {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n}\n\n.home-img:nth-of-type(3) {\n  margin-top: 30px;\n}\n\n.footer {\n  color: cyan;\n  margin-top: 20px;\n\n  padding: 4px;\n  text-align: center;\n  background-color: #171717c9;\n}\n\n\n@media only screen and (max-width: 600px) {\n  .header {\n    flex-wrap: wrap;\n    height: 110px;\n  }\n\n  .main-content {\n    margin-top: 140px;\n  }\n\n  .content-title{\n    line-height: 95%;\n    padding-bottom: 10px;\n  }\n\n  .content-text {\n    font-size: 1.1rem;\n  }\n\n  img[src$=\".svg\"] {\n\n    width: 178px;  \n  }\n\n  .home-img {\n    width: 100%;\n    padding: 0;\n    outline: 3px solid rgba(9, 18, 24, 0.33);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAMA;EACE,UAAU;EACV,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sEAAiD;EACjD,6BAA6B;EAC7B,2BAA2B;EAC3B,4BAA4B;EAC5B,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,YAAY;;EAEZ,WAAW,EAAE,qBAAqB;AACpC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;;EAEjC,SAAS;EACT,UAAU;;;;EAIV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,UAAU;EACV,2BAA2B,EAAE,gBAAgB;EAC7C,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;;EAE1B,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;;EAEf,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;AACX;AACA;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;EACZ,2BAA2B,EAAE,cAAc;EAC3C,mBAAmB;EACnB,aAAa;EACb,mBAAmB;;EAEnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,YAAY;;AAEd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;;AAEnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;;EAEhB,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;AAC7B;;;AAGA;EACE;IACE,eAAe;IACf,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,YAAY;EACd;;EAEA;IACE,WAAW;IACX,UAAU;IACV,wCAAwC;EAC1C;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');\n\n@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');\n\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Open Sans';\n}\n\nbody {\n  height: 100vh;\n}\n\n.bg {    \n  background: rgba(0, 0, 0, 0.2) url(\"./steak.png\");\n  background-blend-mode: darken;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n\n  z-index: -1; /* this is optional */\n}\n\n#content {\n  position: absolute;\n  height: 100%;\n  min-height: 100vh;\n  /* background-color: lightblue; */\n\n  left: 0px;\n  right: 0px;\n\n  \n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  height: 70px;\n  left: 0px;\n  right: 0px;\n  background-color: #17171790; /* neutral 900 */\n  color: white;\n  font-size: 1.4rem;\n  backdrop-filter: blur(8px);\n\n  display: flex;\n  align-items: end;\n  padding: 0px 16px;\n  position: fixed;\n\n  border-bottom: 4px solid rgb(9, 18, 24);\n}\n\n.restaurant {\n  font-size: 2.8rem;\n  font-family: 'Lobster';\n}\n\n.links {\n  margin-left: auto;\n  display: flex;\n  gap: 16px;\n}\n.links>* {\n  font-family: \"League Gothic\";\n  font-size: 2.4rem;\n}\n\n.main-content {\n  flex: 1;\n  color: white;\n  margin: 8%;\n  margin-top: 100px;\n  margin-bottom: 50px;\n}\n\n.home-content,\n.menu-content,\n.about-content {\n  height: 100%;\n  background-color: #29252490; /* stone 800 */\n  border-radius: 10px;\n  padding: 20px;\n  padding-bottom: 0px;\n\n  border-top: 8px solid rgb(9, 18, 24);\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg[src$=\".svg\"] {\n  \n  margin: 16px;\n  margin-bottom: 22px;\n  width: 260px;\n\n}\n\n.content-title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  \n}\n\n.title-span {\n  font-size: 1.1em;\n  font-weight: normal;\n  font-family: \"Lobster\";\n}\n\n.content-text {\n  font-size: 1.4rem;\n}\n\n.home-img {\n  width: 89%;\n  border-radius: 10px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n} \n\n.menu-img {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  outline: 5px solid rgba(9, 18, 24, 0.33);\n}\n\n.home-img:nth-of-type(3) {\n  margin-top: 30px;\n}\n\n.footer {\n  color: cyan;\n  margin-top: 20px;\n\n  padding: 4px;\n  text-align: center;\n  background-color: #171717c9;\n}\n\n\n@media only screen and (max-width: 600px) {\n  .header {\n    flex-wrap: wrap;\n    height: 110px;\n  }\n\n  .main-content {\n    margin-top: 140px;\n  }\n\n  .content-title{\n    line-height: 95%;\n    padding-bottom: 10px;\n  }\n\n  .content-text {\n    font-size: 1.1rem;\n  }\n\n  img[src$=\".svg\"] {\n\n    width: 178px;  \n  }\n\n  .home-img {\n    width: 100%;\n    padding: 0;\n    outline: 3px solid rgba(9, 18, 24, 0.33);\n  }\n}"],"sourceRoot":""}]);
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

  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'About Us', 'content-title')
  const contentText = component('div', 'Ethics: (coming soon)', 'content-text');

  const aboutContent = component('div', '', 'about-content');
  
  aboutContent.appendChild(contentTitle);
  aboutContent.appendChild(contentText);
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

// this is really messy and I can definitely refactor it to stay DRY
const menuGen = () => {
  const mySteak = new Image();
  mySteak.src = _steak_png__WEBPACK_IMPORTED_MODULE_0__;
  mySteak.classList.add("menu-img");
  const mySteak2 = mySteak.cloneNode(true);
  mySteak2.src = _steakTwo_jpg__WEBPACK_IMPORTED_MODULE_1__;

  const menuOne = document.createElement('div');
  menuOne.classList.add('menu-item');
  const menuTwo = menuOne.cloneNode(true);
  const menuThree = menuOne.cloneNode(true);
  const menufour = menuOne.cloneNode(true);

  menuOne.appendChild(mySteak2);
  menuTwo.appendChild(mySteak);


  const mainContent = component('div', '', 'main-content');
  const contentTitle = component('div', 'Menu ', 'content-title')
  const contentText = component('div', 'Vegetarian Steaks:', 'content-text');
  const menuContent = component('div', '', 'menu-content');
  
  menuContent.append(contentTitle, contentText, menuOne, menuTwo);
  mainContent.appendChild(menuContent);
  return mainContent
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDZTtBQUNBO0FBQ0E7QUFDQTtBQUNFOztBQUV0QyxpREFBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0ZWFrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStHb3RoaWMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5iZyB7ICAgIFxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgei1pbmRleDogLTE7IC8qIHRoaXMgaXMgb3B0aW9uYWwgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICovXFxuXFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcblxcbiAgXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNzkwOyAvKiBuZXV0cmFsIDkwMCAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZzogMHB4IDE2cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDksIDE4LCAyNCk7XFxufVxcblxcbi5yZXN0YXVyYW50IHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuLmxpbmtzPioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZWFndWUgR290aGljXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDglO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LFxcbi5tZW51LWNvbnRlbnQsXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDkwOyAvKiBzdG9uZSA4MDAgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG5cXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2IoOSwgMTgsIDI0KTtcXG59XFxuXFxuLmhvbWUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcbiAgXFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbiAgd2lkdGg6IDI2MHB4O1xcblxcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxufVxcblxcbi50aXRsZS1zcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIjtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmhvbWUtaW1nIHtcXG4gIHdpZHRoOiA4OSU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG59IFxcblxcbi5tZW51LWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG59XFxuXFxuLmhvbWUtaW1nOm50aC1vZi10eXBlKDMpIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgY29sb3I6IGN5YW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbiAgcGFkZGluZzogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxN2M5O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgfVxcblxcbiAgLm1haW4tY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGl0bGV7XFxuICAgIGxpbmUtaGVpZ2h0OiA5NSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuXFxuICAgIHdpZHRoOiAxNzhweDsgIFxcbiAgfVxcblxcbiAgLmhvbWUtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCByZ2JhKDksIDE4LCAyNCwgMC4zMyk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNFQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZOztFQUVaLFdBQVcsRUFBRSxxQkFBcUI7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQ0FBaUM7O0VBRWpDLFNBQVM7RUFDVCxVQUFVOzs7O0VBSVYsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQixFQUFFLGdCQUFnQjtFQUM3QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQjs7RUFFMUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTs7RUFFZix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osMkJBQTJCLEVBQUUsY0FBYztFQUMzQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVix3Q0FBd0M7RUFDMUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGVhZ3VlK0dvdGhpYyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmcgeyAgICBcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKSB1cmwoXFxcIi4vc3RlYWsucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgei1pbmRleDogLTE7IC8qIHRoaXMgaXMgb3B0aW9uYWwgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICovXFxuXFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcblxcbiAgXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNzkwOyAvKiBuZXV0cmFsIDkwMCAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZzogMHB4IDE2cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiKDksIDE4LCAyNCk7XFxufVxcblxcbi5yZXN0YXVyYW50IHtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG59XFxuXFxuLmxpbmtzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuLmxpbmtzPioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMZWFndWUgR290aGljXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDglO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uaG9tZS1jb250ZW50LFxcbi5tZW51LWNvbnRlbnQsXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjUyNDkwOyAvKiBzdG9uZSA4MDAgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG5cXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2IoOSwgMTgsIDI0KTtcXG59XFxuXFxuLmhvbWUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZ1tzcmMkPVxcXCIuc3ZnXFxcIl0ge1xcbiAgXFxuICBtYXJnaW46IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbiAgd2lkdGg6IDI2MHB4O1xcblxcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxufVxcblxcbi50aXRsZS1zcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIjtcXG59XFxuXFxuLmNvbnRlbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmhvbWUtaW1nIHtcXG4gIHdpZHRoOiA4OSU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG59IFxcblxcbi5tZW51LWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3V0bGluZTogNXB4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG59XFxuXFxuLmhvbWUtaW1nOm50aC1vZi10eXBlKDMpIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgY29sb3I6IGN5YW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbiAgcGFkZGluZzogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxN2M5O1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgfVxcblxcbiAgLm1haW4tY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGl0bGV7XFxuICAgIGxpbmUtaGVpZ2h0OiA5NSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuXFxuICAgIHdpZHRoOiAxNzhweDsgIFxcbiAgfVxcblxcbiAgLmhvbWUtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCByZ2JhKDksIDE4LCAyNCwgMC4zMyk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgYWJvdXRUd28gPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0LmpzJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGFib3V0R2VuID0gKCkgPT4ge1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21haW4tY29udGVudCcpO1xuICBjb25zdCBjb250ZW50VGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdBYm91dCBVcycsICdjb250ZW50LXRpdGxlJylcbiAgY29uc3QgY29udGVudFRleHQgPSBjb21wb25lbnQoJ2RpdicsICdFdGhpY3M6IChjb21pbmcgc29vbiknLCAnY29udGVudC10ZXh0Jyk7XG5cbiAgY29uc3QgYWJvdXRDb250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ2Fib3V0LWNvbnRlbnQnKTtcbiAgXG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRleHQpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICByZXR1cm4gbWFpbkNvbnRlbnRcbn0iLCJpbXBvcnQgU3RlYWsgZnJvbSAnLi9zdGVhay5wbmcnO1xuaW1wb3J0IFN0ZWFrVHdvIGZyb20gJy4vc3RlYWtUd28uanBnJztcbmltcG9ydCBEYXNoIGZyb20gJy4vZGFzaC5zdmcnO1xuXG4vKiBjb25zdCBteVN0ZWFrID0gbmV3IEltYWdlKCk7XG5teVN0ZWFrLnNyYyA9IFN0ZWFrOyAqL1xuXG5leHBvcnQgY29uc3QgaG9tZVR3byA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3Rlc3QgaG9tZS5qcycpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQodHlwZSwgdGV4dCwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBob21lR2VuID0gKCkgPT4ge1xuICBjb25zdCBteVN0ZWFrID0gbmV3IEltYWdlKCk7XG4gIG15U3RlYWsuc3JjID0gU3RlYWs7XG4gIG15U3RlYWsuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1nXCIpO1xuICBjb25zdCBteVN0ZWFrMiA9IG15U3RlYWsuY2xvbmVOb2RlKHRydWUpO1xuICBteVN0ZWFrMi5zcmMgPSBTdGVha1R3bztcblxuICBjb25zdCBteURhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgbXlEYXNoLnNyYyA9IERhc2g7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGNvbXBvbmVudCgnZGl2JywgJ1dlbGNvbWUgdG8gJywgJ2NvbnRlbnQtdGl0bGUnKVxuICBjb25zdCB0aXRsZVNwYW4gPSBjb21wb25lbnQoJ3NwYW4nLCAnVmVnYW4gU3RlYWtzJywgJ3RpdGxlLXNwYW4nKVxuICBjb250ZW50VGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKVxuXG4gIGNvbnN0IGNvbnRlbnRUZXh0ID0gY29tcG9uZW50KCdkaXYnLCAnSG9tZSBvZiB0aGUgb25seSBWZWdhbiBTdGVha3MhIEhvdyBhcmUgb3VyIHN0ZWFrcyB2ZWdhbj8gV2UgdGF1Z2h0IG91ciBjYXR0bGUgdG8gb25seSBlYXQgb3JnYW5pYywgZXRoaWNhbGx5IHNvdXJjZWQsIHZlZ2FuIGZvb2RzLiBJdCB0b29rIG1hbnkgeWVhcnMgb2YgdHJhaW5pbmcgYW5kIGdlbmV0aWMgbW9kaWZpY2F0aW9ucyB1c2luZyBDUklTUFIgdG8gcmVhY2ggdGhpcyBwb2ludCwgYW5kIG5vdyB3ZSBhcmUgd2lsbGluZyB0byBzZWxsIHlvdSB0aGUgcmVzdWx0cyEnLCAnY29udGVudC10ZXh0Jyk7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ2hvbWUtY29udGVudCcpO1xuICBcbiAgaG9tZUNvbnRlbnQuYXBwZW5kKGNvbnRlbnRUaXRsZSwgY29udGVudFRleHQsIG15RGFzaCwgbXlTdGVhaywgbXlTdGVhazIpXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcbiAgcmV0dXJuIG1haW5Db250ZW50XG59IiwiaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWsucG5nJztcbmltcG9ydCBTdGVha1R3byBmcm9tICcuL3N0ZWFrVHdvLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtZW51VHdvID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygndGVzdCBtZW51LmpzJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuLy8gdGhpcyBpcyByZWFsbHkgbWVzc3kgYW5kIEkgY2FuIGRlZmluaXRlbHkgcmVmYWN0b3IgaXQgdG8gc3RheSBEUllcbmV4cG9ydCBjb25zdCBtZW51R2VuID0gKCkgPT4ge1xuICBjb25zdCBteVN0ZWFrID0gbmV3IEltYWdlKCk7XG4gIG15U3RlYWsuc3JjID0gU3RlYWs7XG4gIG15U3RlYWsuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBjb25zdCBteVN0ZWFrMiA9IG15U3RlYWsuY2xvbmVOb2RlKHRydWUpO1xuICBteVN0ZWFrMi5zcmMgPSBTdGVha1R3bztcblxuICBjb25zdCBtZW51T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVPbmUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIGNvbnN0IG1lbnVUd28gPSBtZW51T25lLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgbWVudVRocmVlID0gbWVudU9uZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IG1lbnVmb3VyID0gbWVudU9uZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgbWVudU9uZS5hcHBlbmRDaGlsZChteVN0ZWFrMik7XG4gIG1lbnVUd28uYXBwZW5kQ2hpbGQobXlTdGVhayk7XG5cblxuICBjb25zdCBtYWluQ29udGVudCA9IGNvbXBvbmVudCgnZGl2JywgJycsICdtYWluLWNvbnRlbnQnKTtcbiAgY29uc3QgY29udGVudFRpdGxlID0gY29tcG9uZW50KCdkaXYnLCAnTWVudSAnLCAnY29udGVudC10aXRsZScpXG4gIGNvbnN0IGNvbnRlbnRUZXh0ID0gY29tcG9uZW50KCdkaXYnLCAnVmVnZXRhcmlhbiBTdGVha3M6JywgJ2NvbnRlbnQtdGV4dCcpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGNvbXBvbmVudCgnZGl2JywgJycsICdtZW51LWNvbnRlbnQnKTtcbiAgXG4gIG1lbnVDb250ZW50LmFwcGVuZChjb250ZW50VGl0bGUsIGNvbnRlbnRUZXh0LCBtZW51T25lLCBtZW51VHdvKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICByZXR1cm4gbWFpbkNvbnRlbnRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVHZW4gfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgaG9tZVR3byB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBtZW51R2VuIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IG1lbnVUd28gfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgYWJvdXRHZW4gfSBmcm9tICcuL2Fib3V0LmpzJztcblxubWVudUdlbigpO1xuXG4vLyBjcmVhdGUgbWFpbiBlbGVtZW50LCBhcHBlbmQgdG8gJ2JvZHknXG5jb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudHMuaWQgPSAnY29udGVudCc7XG5cbi8vIGJhY2tncm91bmQgdGVzdGluZ1xuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmdcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50cyk7XG5cbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGVsZW1lbnRzXG5mdW5jdGlvbiBjb21wb25lbnQodHlwZSwgdGV4dCwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBlbGVtZW50XG59XG5cbi8vIGdlbmVyYXRlIHRoZSBiYXNpYyBlbGVtZW50cyBuZWVkZWQgZm9yIGhlYWRlclxuY29uc3QgaGVhZGVyID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ2hlYWRlcicpO1xuY29uc3QgcmVzdGF1cmFudCA9IGNvbXBvbmVudCgnZGl2JywgJ1ZlZ2FuIFN0ZWFrcycsICdyZXN0YXVyYW50JylcbmNvbnN0IGhvbWUgPSBjb21wb25lbnQoJ2RpdicsICdIb21lJywgJ2hvbWUnKTtcbmNvbnN0IG1lbnUgPSBjb21wb25lbnQoJ2RpdicsICdNZW51JywgJ21lbnUnKTtcbmNvbnN0IGFib3V0ID0gY29tcG9uZW50KCdkaXYnLCAnQWJvdXQgVXMnLCAnYWJvdXQtdXMnKTtcbi8vIHB1dCBsaW5rcyBpbiBzZXBlcmF0ZSBkaXZcbmNvbnN0IGxpbmtzID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ2xpbmtzJyk7XG5saW5rcy5hcHBlbmQoaG9tZSwgbWVudSwgYWJvdXQpO1xuaGVhZGVyLmFwcGVuZChyZXN0YXVyYW50LCBsaW5rcyk7XG4vLyBnZW5lcmF0ZSBjb250ZW50IGZyb20gaG9tZS5qc1xubGV0IG1haW5Db250ZW50ID0gaG9tZUdlbigpO1xuLy8gZ2VuZXJhdGUgZm9vdGVyXG5jb25zdCBmb290ZXIgPSBjb21wb25lbnQoJ2RpdicsICdEZXZlbG9wZWQgd2l0aCDimaUgYnkgY3JvaXhlZCcsICdmb290ZXInKTtcblxuY29udGVudHMuYXBwZW5kKGhlYWRlciwgbWFpbkNvbnRlbnQsIGZvb3Rlcik7XG5cblxuLy8gdGhlc2UgdGhyZWUgZnVuY3Rpb25zIHNob3VsZCBiZSBvbmUgZnVuY3Rpb24sIHRvIHN0YXkgRFJZXG5mdW5jdGlvbiBob21lRnVuYygpIHtcbiAgbWFpbkNvbnRlbnQgPSBob21lR2VuKCk7XG4gIGNvbnRlbnRzLmlubmVySFRNTCA9ICcnO1xuICAvLyB0aGlzIGFwcGVuZCBkb2Vzbid0IGZlZWwgdmVyeSBnb29kLCB0aGVyZSdzIHByb2JhYmx5IGEgYmV0dGVyIHdheSB0byBkbyB0aGlzXG4gIGNvbnRlbnRzLmFwcGVuZChoZWFkZXIsIG1haW5Db250ZW50LCBmb290ZXIpO1xuICBjb25zb2xlLmxvZygnY2xlYXJlZCcpO1xufVxuXG5mdW5jdGlvbiBtZW51RnVuYygpIHtcbiAgbWFpbkNvbnRlbnQgPSBtZW51R2VuKCk7XG4gIGNvbnRlbnRzLmlubmVySFRNTCA9ICcnO1xuICBjb250ZW50cy5hcHBlbmQoaGVhZGVyLCBtYWluQ29udGVudCwgZm9vdGVyKTtcbiAgY29uc29sZS5sb2coJ2NsZWFyZWQsIHcvIG1lbnUnKTtcbn1cblxuZnVuY3Rpb24gYWJvdXRGdW5jKCkge1xuICBtYWluQ29udGVudCA9IGFib3V0R2VuKCk7XG4gIGNvbnRlbnRzLmlubmVySFRNTCA9ICcnO1xuICBjb250ZW50cy5hcHBlbmQoaGVhZGVyLCBtYWluQ29udGVudCwgZm9vdGVyKTtcbiAgY29uc29sZS5sb2coJ2NsZWFyZWQgYWJvdXQnKTtcbn1cblxuaG9tZS5vbmNsaWNrID0gaG9tZUZ1bmM7XG5tZW51Lm9uY2xpY2sgPSBtZW51RnVuYztcbmFib3V0Lm9uY2xpY2sgPSBhYm91dEZ1bmM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9