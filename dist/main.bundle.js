/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nmain .newBookBtn, .modalWrapper form button {\n  padding: 0.5em;\n  outline: none;\n  border: none;\n  background-color: rgb(208, 158, 83);\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\nmain .newBookBtn:hover, .modalWrapper form button:hover {\n  filter: brightness(1.1);\n}\n\nmain .newBookBtn:focus, .modalWrapper form button:focus {\n  filter: brightness(1.3);\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  color: #e1e1e1;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(34, 36, 38);\n}\n\n.modalWrapper {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n.modalWrapper form {\n  background-color: rgb(34, 36, 38);\n  padding: 1rem;\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 1.5rem repeat(5, 3rem);\n  gap: 0.5rem;\n  align-items: stretch;\n}\n.modalWrapper form h2 {\n  justify-self: center;\n  font-size: 1.5rem;\n}\n.modalWrapper form label {\n  color: rgb(200, 200, 200);\n}\n.modalWrapper form input[type=text],\n.modalWrapper form input[type=number] {\n  display: block;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  padding: 0 7px;\n  background-color: rgb(48, 48, 48);\n  font: \"Roboto\", sans-serif;\n  height: 1.8rem;\n  font-size: 0.9rem;\n  color: #e1e1e1;\n  width: 15rem;\n  -moz-appearance: textfield;\n}\n.modalWrapper form input::-webkit-outer-spin-button,\n.modalWrapper form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.modalWrapper form .read {\n  align-self: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.modalWrapper form .read .round {\n  height: 1.5rem;\n  position: relative;\n}\n.modalWrapper form .read .round label {\n  background-color: rgb(34, 36, 38);\n  border: 2px solid rgb(48, 48, 48);\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.modalWrapper form .read .round label:hover {\n  filter: brightness(1.1);\n}\n.modalWrapper form .read .round label::after {\n  content: \"\";\n  border: 2px solid rgb(34, 36, 38);\n  border-top: none;\n  border-right: none;\n  transform: rotate(-45deg);\n  height: 6px;\n  width: 12px;\n  opacity: 0;\n  position: absolute;\n  top: 5px;\n  left: 3.5px;\n}\n.modalWrapper form .read .round input[type=checkbox] {\n  visibility: hidden;\n}\n.modalWrapper form .read .round input[type=checkbox]:checked + label {\n  background-color: rgb(208, 158, 83);\n  border-color: rgb(208, 158, 83);\n}\n.modalWrapper form .read .round input[type=checkbox]:checked + label::after {\n  opacity: 1;\n}\n.modalWrapper form button {\n  border-radius: 10px;\n}\n\nheader {\n  flex: 0 1 auto;\n  padding: 0.3em 8%;\n  background-color: rgb(24, 26, 27);\n  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.7);\n}\n\nmain {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\nmain .newBookBtn {\n  flex: 0 1 auto;\n  align-self: center;\n  display: flex;\n  align-items: center;\n  border-radius: 2em;\n  padding-right: 0.9em;\n  margin: 1.5em;\n}\nmain .newBookBtn svg {\n  height: 1.5rem;\n}\nmain .gridWrapper {\n  flex: 1 1 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n  padding: 0 1rem;\n}\nmain .gridWrapper .bookCard {\n  padding: 1rem;\n  border-radius: 5px;\n  background-color: rgb(48, 48, 48);\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);\n  display: grid;\n  justify-items: stretch;\n  align-items: center;\n  text-align: center;\n  gap: 1em;\n  grid-template-rows: repeat(4, 1fr);\n}\nmain .gridWrapper .bookCard p:first-child {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\nmain .gridWrapper .bookCard .buttonsWrapper {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 15%;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round {\n  height: 1.5rem;\n  position: relative;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round label {\n  background-color: rgb(48, 48, 48);\n  border: 2px solid #e1e1e1;\n  border-radius: 50%;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round label:hover {\n  filter: brightness(1.1);\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round label::after {\n  content: \"\";\n  border: 2px solid rgb(48, 48, 48);\n  border-top: none;\n  border-right: none;\n  transform: rotate(-45deg);\n  height: 6px;\n  width: 12px;\n  opacity: 0;\n  position: absolute;\n  top: 5px;\n  left: 3.5px;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox] {\n  visibility: hidden;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox]:checked + label {\n  background-color: #e1e1e1;\n  border-color: #e1e1e1;\n}\nmain .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox]:checked + label::after {\n  opacity: 1;\n}\nmain .gridWrapper .bookCard .buttonsWrapper button {\n  border: none;\n  outline: none;\n  background: none;\n  color: #e1e1e1;\n  cursor: pointer;\n}\nmain .gridWrapper .bookCard .buttonsWrapper button svg {\n  height: 1.5rem;\n}\nmain .gridWrapper .bookCard .buttonsWrapper button svg:hover {\n  filter: brightness(1.1);\n}\n\nfooter {\n  flex: 0 1 auto;\n  text-align: center;\n  padding: 0.8rem;\n  font-size: 0.8rem;\n}\nfooter a {\n  text-decoration: none;\n  color: rgb(208, 158, 83);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n$font-stack: \"Roboto\", sans-serif;\n$font-color-primary: rgb(225, 225, 225);\n$font-color-secondary: rgb(208, 158, 83);\n\n$font-color-primary: #e1e1e1;\n\n$color-primary: rgb(34, 36, 38);\n$color-secondary: rgb(48, 48, 48);\n$color-dark: rgb(24, 26, 27);\n\n%mainButtonsShared {\n  padding: 0.5em;\n  outline: none;\n  border: none;\n  background-color: $font-color-secondary;\n  font-family: $font-stack;\n  font-size: 1rem;\n  cursor: pointer;\n}\n%mainButtonsShared:hover {\n  filter: brightness(1.1);\n}\n%mainButtonsShared:focus {\n  filter: brightness(1.3);\n}\n\n// custom rounded checkbox\n@mixin roundCheckbox(\n  $border-color: yellow,\n  $background-color: green,\n  $tick-color: red,\n  $checked-background-color: blue\n) {\n  position: relative;\n  label {\n    // background and border\n    background-color: $background-color;\n    border: 2px solid $border-color;\n    border-radius: 50%;\n    height: 1.5rem;\n    width: 1.5rem;\n    cursor: pointer;\n\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n  label:hover {\n    filter: brightness(1.1);\n  }\n  label::after {\n    // the tick\n    content: \"\";\n    border: 2px solid $tick-color;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-45deg);\n    height: 6px;\n    width: 12px;\n    opacity: 0; // the tick is hidden by default\n\n    position: absolute;\n    top: 5px;\n    left: 3.5px;\n  }\n  input[type=\"checkbox\"] {\n    visibility: hidden; // hides the default checkbox\n  }\n  input[type=\"checkbox\"]:checked + label {\n    background-color: $checked-background-color;\n    border-color: $checked-background-color; // optionally, checked border can have different color\n  }\n  input[type=\"checkbox\"]:checked + label::after {\n    opacity: 1; // shows the tick when checked\n  }\n}\n\nbody {\n  font-family: $font-stack;\n  color: $font-color-primary;\n\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  flex-direction: column;\n\n  background-color: $color-primary;\n}\n\n.modalWrapper {\n  display: none; // hidden by default\n  position: fixed;\n  z-index: 1; // sit on top\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  //overflow: auto; // enable scroll if needed\n  background-color: rgba(0, 0, 0, 0.4);\n\n  justify-content: center;\n  align-items: center;\n\n  form {\n    background-color: $color-primary;\n    padding: 1rem;\n    border-radius: 5px;\n\n    display: grid;\n    grid-template-rows: 1.5rem repeat(5, 3rem);\n    gap: 0.5rem;\n    align-items: stretch;\n\n    h2 {\n      justify-self: center;\n      font-size: 1.5rem;\n    }\n\n    label {\n      color: rgb(200, 200, 200);\n    }\n\n    input[type=\"text\"],\n    input[type=\"number\"] {\n      display: block;\n      border: none;\n      outline: none;\n      border-radius: 5px;\n      padding: 0 7px;\n\n      background-color: $color-secondary;\n\n      font: $font-stack;\n      height: 1.8rem;\n      font-size: 0.9rem;\n      color: $font-color-primary;\n      width: 15rem;\n\n      -moz-appearance: textfield; // remove number arrows\n    }\n\n    // remove number arrows\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n\n    .read {\n      align-self: center;\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n\n      .round {\n        height: 1.5rem;\n        @include roundCheckbox(\n          $color-secondary,\n          $color-primary,\n          $color-primary,\n          $font-color-secondary\n        );\n      }\n    }\n\n    button {\n      @extend %mainButtonsShared;\n      border-radius: 10px;\n    }\n  }\n}\n\nheader {\n  flex: 0 1 auto;\n\n  padding: 0.3em 8%;\n\n  background-color: $color-dark;\n  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.7);\n}\n\nmain {\n  flex: 1 1 auto;\n\n  display: flex;\n  flex-direction: column;\n\n  .newBookBtn {\n    @extend %mainButtonsShared;\n    flex: 0 1 auto;\n    align-self: center;\n\n    display: flex;\n    align-items: center;\n    border-radius: 2em;\n    padding-right: 0.9em;\n    margin: 1.5em;\n\n    svg {\n      height: 1.5rem;\n    }\n  }\n\n  .gridWrapper {\n    flex: 1 1 auto;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n    padding: 0 1rem;\n\n    .bookCard {\n      padding: 1rem;\n\n      border-radius: 5px;\n      background-color: $color-secondary;\n\n      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);\n\n      display: grid;\n      justify-items: stretch;\n      align-items: center;\n      text-align: center;\n      gap: 1em;\n\n      grid-template-rows: repeat(4, 1fr);\n\n      p:first-child {\n        font-size: 1.5rem;\n        font-weight: 600;\n      }\n\n      .buttonsWrapper {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 15%;\n\n        .round {\n          height: 1.5rem;\n          @include roundCheckbox(\n            $font-color-primary,\n            $color-secondary,\n            $color-secondary,\n            $font-color-primary\n          );\n        }\n\n        button {\n          border: none;\n          outline: none;\n          background: none;\n\n          color: $font-color-primary;\n          cursor: pointer;\n\n          svg {\n            height: 1.5rem;\n          }\n          svg:hover {\n            filter: brightness(1.1);\n          }\n        }\n      }\n    }\n  }\n}\n\nfooter {\n  flex: 0 1 auto;\n\n  text-align: center;\n  padding: 0.8rem;\n  font-size: 0.8rem;\n\n  a {\n    text-decoration: none;\n    color: $font-color-secondary;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/Book.ts":
/*!*****************************!*\
  !*** ./src/modules/Book.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
var Book = /** @class */ (function () {
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    Book.prototype.info = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.pages, " pages, read: ").concat(this.read);
    };
    return Book;
}());



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Book */ "./src/modules/Book.ts");


var myLibrary = [];
if (localStorage.getItem("myLibrary") !== null) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    myLibrary.forEach(function (book) {
        createBookCard(book);
    });
}
function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}
function addBookToLibrary(book) {
    myLibrary.push(book);
    // create the html element
    createBookCard(book);
    updateLocalStorage();
}
function removeBook(bookElement) {
    var bookName = bookElement.id;
    myLibrary.forEach(function (book, index) {
        if (book.title === bookName) {
            myLibrary.splice(index, 1);
        }
    });
    bookElement.remove();
    updateLocalStorage();
}
function toggleRead(bookName) {
    myLibrary.forEach(function (book, index) {
        if (book.title === bookName) {
            myLibrary[index].read = !myLibrary[index].read;
        }
    });
    updateLocalStorage();
}
// constructs the new html card
function createBookCard(book) {
    var title = book.title;
    var author = book.author;
    var pages = book.pages + " pages";
    var read = book.read;
    var gridWrapper = document.querySelector(".gridWrapper");
    var bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.id = title;
    for (var _i = 0, _a = [title, author, pages]; _i < _a.length; _i++) {
        var property = _a[_i];
        var paragraph = document.createElement("p");
        paragraph.textContent = property;
        bookCard.appendChild(paragraph);
    }
    var buttonsWrapper = document.createElement("div");
    buttonsWrapper.classList.add("buttonsWrapper");
    bookCard.appendChild(buttonsWrapper);
    var round = document.createElement("div");
    round.classList.add("round");
    buttonsWrapper.appendChild(round);
    var readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.id = "read ".concat(title);
    // check the checkbox if user selected read in modal before
    if (read) {
        readCheckbox.checked = true;
    }
    // toggling read status of the object with the checkbox
    readCheckbox.addEventListener("click", function () {
        toggleRead(bookCard.id);
    });
    round.appendChild(readCheckbox);
    var readCheckboxLabel = document.createElement("label");
    readCheckboxLabel.setAttribute("for", "read ".concat(title));
    round.appendChild(readCheckboxLabel);
    var removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", function () {
        removeBook(bookCard);
    });
    buttonsWrapper.appendChild(removeBtn);
    var SVG_NS = "http://www.w3.org/2000/svg";
    var svg1 = document.createElementNS(SVG_NS, "svg");
    svg1.setAttribute("viewBox", "0 0 24 24");
    var svgPath = document.createElementNS(SVG_NS, "path");
    svgPath.setAttribute("fill", "currentColor");
    svgPath.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svg1.appendChild(svgPath);
    removeBtn.appendChild(svg1);
    gridWrapper.appendChild(bookCard);
}
var modal = document.querySelector(".modalWrapper");
var newBookBtn = document.querySelector(".newBookBtn");
// show modal when button is pressed
newBookBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});
// close modal when user clicks outside of modal
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
var form = document.querySelector(".newBookForm");
var titleInput = document.querySelector("#title");
var authorInput = document.querySelector("#author");
var pagesInput = document.querySelector("#pages");
var readInput = document.querySelector("#read");
form.addEventListener("submit", function (e) {
    // prevents refreshing the page and losing everything
    e.preventDefault();
    addBookToLibrary(new _modules_Book__WEBPACK_IMPORTED_MODULE_1__.Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
    // resets form inputs and closes modal
    titleInput.value = authorInput.value = pagesInput.value = "";
    readInput.checked = false;
    modal.style.display = "none";
});
// for testing
// addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", "295", true));
// addBookToLibrary(new Book("Night Watch", "Terry Pratchett", "432", true));
// addBookToLibrary(new Book("50 Ways To Eat Cock", "Adrienne Hew", "166", false));

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map