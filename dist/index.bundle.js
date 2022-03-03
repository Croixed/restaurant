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

  const menuTextOne = component('div', 'Item 1... ... 189.99', 'menu-text');
  const menuTextTwo = component('div', 'Item 2... ... 189.99', 'menu-text');

  menuOne.append(menuTextOne, mySteak2);
  menuTwo.append(menuTextTwo, mySteak);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNlO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7O0FBRXRDLGlEQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQU87QUFDekI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGlEQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3RlYWsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGVhZ3VlK0dvdGhpYyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmJnIHsgICAgXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMikgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICB6LWluZGV4OiAtMTsgLyogdGhpcyBpcyBvcHRpb25hbCAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cXG5cXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuXFxuICBcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3OTA7IC8qIG5ldXRyYWwgOTAwICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nOiAwcHggMTZweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoOSwgMTgsIDI0KTtcXG59XFxuXFxuLnJlc3RhdXJhbnQge1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4ubGlua3M+KiB7XFxuICBmb250LWZhbWlseTogXFxcIkxlYWd1ZSBHb3RoaWNcXFwiO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogOCU7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5ob21lLWNvbnRlbnQsXFxuLm1lbnUtY29udGVudCxcXG4uYWJvdXQtY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNTI0OTA7IC8qIHN0b25lIDgwMCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcblxcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYig5LCAxOCwgMjQpO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuICBcXG4gIG1hcmdpbjogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XFxuICB3aWR0aDogMjYwcHg7XFxuXFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG59XFxuXFxuLnRpdGxlLXNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiO1xcbn1cXG5cXG4uY29udGVudC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uaG9tZS1pbWcge1xcbiAgd2lkdGg6IDg5JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbn0gXFxuXFxuLm1lbnUtaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbn1cXG5cXG4uaG9tZS1pbWc6bnRoLW9mLXR5cGUoMykge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBjb2xvcjogY3lhbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxuICBwYWRkaW5nOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3Yzk7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuXFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICB9XFxuXFxuICAuY29udGVudC10aXRsZXtcXG4gICAgbGluZS1oZWlnaHQ6IDk1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAuY29udGVudC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG5cXG4gICAgd2lkdGg6IDE3OHB4OyAgXFxuICB9XFxuXFxuICAuaG9tZS1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0VBQWlEO0VBQ2pELDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7O0VBRVosV0FBVyxFQUFFLHFCQUFxQjtBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlDQUFpQzs7RUFFakMsU0FBUztFQUNULFVBQVU7Ozs7RUFJVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCLEVBQUUsZ0JBQWdCO0VBQzdDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCOztFQUUxQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlOztFQUVmLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWiwyQkFBMkIsRUFBRSxjQUFjO0VBQzNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7OztBQUdBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MZWFndWUrR290aGljJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5iZyB7ICAgIFxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpIHVybChcXFwiLi9zdGVhay5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICB6LWluZGV4OiAtMTsgLyogdGhpcyBpcyBvcHRpb25hbCAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cXG5cXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuXFxuICBcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3OTA7IC8qIG5ldXRyYWwgOTAwICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nOiAwcHggMTZweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoOSwgMTgsIDI0KTtcXG59XFxuXFxuLnJlc3RhdXJhbnQge1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4ubGlua3M+KiB7XFxuICBmb250LWZhbWlseTogXFxcIkxlYWd1ZSBHb3RoaWNcXFwiO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogOCU7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5ob21lLWNvbnRlbnQsXFxuLm1lbnUtY29udGVudCxcXG4uYWJvdXQtY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNTI0OTA7IC8qIHN0b25lIDgwMCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcblxcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYig5LCAxOCwgMjQpO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nW3NyYyQ9XFxcIi5zdmdcXFwiXSB7XFxuICBcXG4gIG1hcmdpbjogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XFxuICB3aWR0aDogMjYwcHg7XFxuXFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG59XFxuXFxuLnRpdGxlLXNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiO1xcbn1cXG5cXG4uY29udGVudC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uaG9tZS1pbWcge1xcbiAgd2lkdGg6IDg5JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbn0gXFxuXFxuLm1lbnUtaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdXRsaW5lOiA1cHggc29saWQgcmdiYSg5LCAxOCwgMjQsIDAuMzMpO1xcbn1cXG5cXG4uaG9tZS1pbWc6bnRoLW9mLXR5cGUoMykge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBjb2xvcjogY3lhbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxuICBwYWRkaW5nOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3Yzk7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICB9XFxuXFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XFxuICB9XFxuXFxuICAuY29udGVudC10aXRsZXtcXG4gICAgbGluZS1oZWlnaHQ6IDk1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAuY29udGVudC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG5cXG4gICAgd2lkdGg6IDE3OHB4OyAgXFxuICB9XFxuXFxuICAuaG9tZS1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIHJnYmEoOSwgMTgsIDI0LCAwLjMzKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBhYm91dFR3byA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ3Rlc3QgYWJvdXQuanMnKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KHR5cGUsIHRleHQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGNvbXBvbmVudCgnZGl2JywgJ0Fib3V0IFVzJywgJ2NvbnRlbnQtdGl0bGUnKVxuICBjb25zdCBjb250ZW50VGV4dCA9IGNvbXBvbmVudCgnZGl2JywgJ0V0aGljczogKGNvbWluZyBzb29uKScsICdjb250ZW50LXRleHQnKTtcblxuICBjb25zdCBhYm91dENvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnYWJvdXQtY29udGVudCcpO1xuICBcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGV4dCk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG4gIHJldHVybiBtYWluQ29udGVudFxufSIsImltcG9ydCBTdGVhayBmcm9tICcuL3N0ZWFrLnBuZyc7XG5pbXBvcnQgU3RlYWtUd28gZnJvbSAnLi9zdGVha1R3by5qcGcnO1xuaW1wb3J0IERhc2ggZnJvbSAnLi9kYXNoLnN2Zyc7XG5cbi8qIGNvbnN0IG15U3RlYWsgPSBuZXcgSW1hZ2UoKTtcbm15U3RlYWsuc3JjID0gU3RlYWs7ICovXG5cbmV4cG9ydCBjb25zdCBob21lVHdvID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygndGVzdCBob21lLmpzJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGhvbWVHZW4gPSAoKSA9PiB7XG4gIGNvbnN0IG15U3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgbXlTdGVhay5zcmMgPSBTdGVhaztcbiAgbXlTdGVhay5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWdcIik7XG4gIGNvbnN0IG15U3RlYWsyID0gbXlTdGVhay5jbG9uZU5vZGUodHJ1ZSk7XG4gIG15U3RlYWsyLnNyYyA9IFN0ZWFrVHdvO1xuXG4gIGNvbnN0IG15RGFzaCA9IG5ldyBJbWFnZSgpO1xuICBteURhc2guc3JjID0gRGFzaDtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGNvbXBvbmVudCgnZGl2JywgJycsICdtYWluLWNvbnRlbnQnKTtcbiAgY29uc3QgY29udGVudFRpdGxlID0gY29tcG9uZW50KCdkaXYnLCAnV2VsY29tZSB0byAnLCAnY29udGVudC10aXRsZScpXG4gIGNvbnN0IHRpdGxlU3BhbiA9IGNvbXBvbmVudCgnc3BhbicsICdWZWdhbiBTdGVha3MnLCAndGl0bGUtc3BhbicpXG4gIGNvbnRlbnRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pXG5cbiAgY29uc3QgY29udGVudFRleHQgPSBjb21wb25lbnQoJ2RpdicsICdIb21lIG9mIHRoZSBvbmx5IFZlZ2FuIFN0ZWFrcyEgSG93IGFyZSBvdXIgc3RlYWtzIHZlZ2FuPyBXZSB0YXVnaHQgb3VyIGNhdHRsZSB0byBvbmx5IGVhdCBvcmdhbmljLCBldGhpY2FsbHkgc291cmNlZCwgdmVnYW4gZm9vZHMuIEl0IHRvb2sgbWFueSB5ZWFycyBvZiB0cmFpbmluZyBhbmQgZ2VuZXRpYyBtb2RpZmljYXRpb25zIHVzaW5nIENSSVNQUiB0byByZWFjaCB0aGlzIHBvaW50LCBhbmQgbm93IHdlIGFyZSB3aWxsaW5nIHRvIHNlbGwgeW91IHRoZSByZXN1bHRzIScsICdjb250ZW50LXRleHQnKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnaG9tZS1jb250ZW50Jyk7XG4gIFxuICBob21lQ29udGVudC5hcHBlbmQoY29udGVudFRpdGxlLCBjb250ZW50VGV4dCwgbXlEYXNoLCBteVN0ZWFrLCBteVN0ZWFrMilcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICByZXR1cm4gbWFpbkNvbnRlbnRcbn0iLCJpbXBvcnQgU3RlYWsgZnJvbSAnLi9zdGVhay5wbmcnO1xuaW1wb3J0IFN0ZWFrVHdvIGZyb20gJy4vc3RlYWtUd28uanBnJztcblxuZXhwb3J0IGNvbnN0IG1lbnVUd28gPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCd0ZXN0IG1lbnUuanMnKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KHR5cGUsIHRleHQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZWxlbWVudFxufVxuXG4vLyB0aGlzIGlzIHJlYWxseSBtZXNzeSBhbmQgSSBjYW4gZGVmaW5pdGVseSByZWZhY3RvciBpdCB0byBzdGF5IERSWVxuZXhwb3J0IGNvbnN0IG1lbnVHZW4gPSAoKSA9PiB7XG4gIGNvbnN0IG15U3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgbXlTdGVhay5zcmMgPSBTdGVhaztcbiAgbXlTdGVhay5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGNvbnN0IG15U3RlYWsyID0gbXlTdGVhay5jbG9uZU5vZGUodHJ1ZSk7XG4gIG15U3RlYWsyLnNyYyA9IFN0ZWFrVHdvO1xuXG4gIGNvbnN0IG1lbnVPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudU9uZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgY29uc3QgbWVudVR3byA9IG1lbnVPbmUuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBtZW51VGhyZWUgPSBtZW51T25lLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgbWVudWZvdXIgPSBtZW51T25lLmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBtZW51VGV4dE9uZSA9IGNvbXBvbmVudCgnZGl2JywgJ0l0ZW0gMS4uLiAuLi4gMTg5Ljk5JywgJ21lbnUtdGV4dCcpO1xuICBjb25zdCBtZW51VGV4dFR3byA9IGNvbXBvbmVudCgnZGl2JywgJ0l0ZW0gMi4uLiAuLi4gMTg5Ljk5JywgJ21lbnUtdGV4dCcpO1xuXG4gIG1lbnVPbmUuYXBwZW5kKG1lbnVUZXh0T25lLCBteVN0ZWFrMik7XG4gIG1lbnVUd28uYXBwZW5kKG1lbnVUZXh0VHdvLCBteVN0ZWFrKTtcblxuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21haW4tY29udGVudCcpO1xuICBjb25zdCBjb250ZW50VGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdNZW51ICcsICdjb250ZW50LXRpdGxlJylcbiAgY29uc3QgY29udGVudFRleHQgPSBjb21wb25lbnQoJ2RpdicsICdWZWdldGFyaWFuIFN0ZWFrczonLCAnY29udGVudC10ZXh0Jyk7XG4gIGNvbnN0IG1lbnVDb250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnJywgJ21lbnUtY29udGVudCcpO1xuICBcbiAgbWVudUNvbnRlbnQuYXBwZW5kKGNvbnRlbnRUaXRsZSwgY29udGVudFRleHQsIG1lbnVPbmUsIG1lbnVUd28pO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gIHJldHVybiBtYWluQ29udGVudFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZUdlbiB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBob21lVHdvIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IG1lbnVHZW4gfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgbWVudVR3byB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBhYm91dEdlbiB9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5tZW51R2VuKCk7XG5cbi8vIGNyZWF0ZSBtYWluIGVsZW1lbnQsIGFwcGVuZCB0byAnYm9keSdcbmNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50cy5pZCA9ICdjb250ZW50JztcblxuLy8gYmFja2dyb3VuZCB0ZXN0aW5nXG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJiZ1wiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG5cblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcblxuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgZWxlbWVudHNcbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuLy8gZ2VuZXJhdGUgdGhlIGJhc2ljIGVsZW1lbnRzIG5lZWRlZCBmb3IgaGVhZGVyXG5jb25zdCBoZWFkZXIgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnaGVhZGVyJyk7XG5jb25zdCByZXN0YXVyYW50ID0gY29tcG9uZW50KCdkaXYnLCAnVmVnYW4gU3RlYWtzJywgJ3Jlc3RhdXJhbnQnKVxuY29uc3QgaG9tZSA9IGNvbXBvbmVudCgnZGl2JywgJ0hvbWUnLCAnaG9tZScpO1xuY29uc3QgbWVudSA9IGNvbXBvbmVudCgnZGl2JywgJ01lbnUnLCAnbWVudScpO1xuY29uc3QgYWJvdXQgPSBjb21wb25lbnQoJ2RpdicsICdBYm91dCBVcycsICdhYm91dC11cycpO1xuLy8gcHV0IGxpbmtzIGluIHNlcGVyYXRlIGRpdlxuY29uc3QgbGlua3MgPSBjb21wb25lbnQoJ2RpdicsICcnLCAnbGlua3MnKTtcbmxpbmtzLmFwcGVuZChob21lLCBtZW51LCBhYm91dCk7XG5oZWFkZXIuYXBwZW5kKHJlc3RhdXJhbnQsIGxpbmtzKTtcbi8vIGdlbmVyYXRlIGNvbnRlbnQgZnJvbSBob21lLmpzXG5sZXQgbWFpbkNvbnRlbnQgPSBob21lR2VuKCk7XG4vLyBnZW5lcmF0ZSBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGNvbXBvbmVudCgnZGl2JywgJ0RldmVsb3BlZCB3aXRoIOKZpSBieSBjcm9peGVkJywgJ2Zvb3RlcicpO1xuXG5jb250ZW50cy5hcHBlbmQoaGVhZGVyLCBtYWluQ29udGVudCwgZm9vdGVyKTtcblxuXG4vLyB0aGVzZSB0aHJlZSBmdW5jdGlvbnMgc2hvdWxkIGJlIG9uZSBmdW5jdGlvbiwgdG8gc3RheSBEUllcbmZ1bmN0aW9uIGhvbWVGdW5jKCkge1xuICBtYWluQ29udGVudCA9IGhvbWVHZW4oKTtcbiAgY29udGVudHMuaW5uZXJIVE1MID0gJyc7XG4gIC8vIHRoaXMgYXBwZW5kIGRvZXNuJ3QgZmVlbCB2ZXJ5IGdvb2QsIHRoZXJlJ3MgcHJvYmFibHkgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXNcbiAgY29udGVudHMuYXBwZW5kKGhlYWRlciwgbWFpbkNvbnRlbnQsIGZvb3Rlcik7XG4gIGNvbnNvbGUubG9nKCdjbGVhcmVkJyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVGdW5jKCkge1xuICBtYWluQ29udGVudCA9IG1lbnVHZW4oKTtcbiAgY29udGVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnRzLmFwcGVuZChoZWFkZXIsIG1haW5Db250ZW50LCBmb290ZXIpO1xuICBjb25zb2xlLmxvZygnY2xlYXJlZCwgdy8gbWVudScpO1xufVxuXG5mdW5jdGlvbiBhYm91dEZ1bmMoKSB7XG4gIG1haW5Db250ZW50ID0gYWJvdXRHZW4oKTtcbiAgY29udGVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnRzLmFwcGVuZChoZWFkZXIsIG1haW5Db250ZW50LCBmb290ZXIpO1xuICBjb25zb2xlLmxvZygnY2xlYXJlZCBhYm91dCcpO1xufVxuXG5ob21lLm9uY2xpY2sgPSBob21lRnVuYztcbm1lbnUub25jbGljayA9IG1lbnVGdW5jO1xuYWJvdXQub25jbGljayA9IGFib3V0RnVuYzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=