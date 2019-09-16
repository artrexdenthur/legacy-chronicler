/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/actions/checklist/submitNewConcept.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/actions/checklist/fetchConcepts.js":
/*!*******************************************************!*\
  !*** ./client/src/actions/checklist/fetchConcepts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchConcepts; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function fetchConcepts() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  switch (type) {
    case "all":
      return function (dispatch) {
        dispatch({
          type: "FETCH_CONCEPTS"
        });
        return Promise.all([fetch("/api/v1/concepts"), fetch("/api/v1/nouns"), fetch("/api/v1/adjectives")]).then(function (responses) {
          return Promise.all(responses.map(function (r) {
            return r.json();
          }));
        }, function (error) {
          console.log(error);
        }).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              concepts = _ref2[0],
              nouns = _ref2[1],
              adjectives = _ref2[2];

          console.log(concepts);
          return dispatch({
            type: "RECEIVE_CONCEPTS",
            concepts: concepts,
            adjectives: adjectives,
            nouns: nouns
          });
        });
      };

    case "concept":
    case "adjective":
    case "noun":
      return function (dispatch) {
        dispatch({
          type: "FETCH_CONCEPTS"
        });
        return fetch("/api/v1/".concat(type, "s")).then(handleResponse).then(function (data) {
          console.log(data);
          return dispatch(_defineProperty({
            type: "RECEIVE_CONCEPTS"
          }, "".concat(type, "s"), data));
        });
      };

    default:
      console.log("Invalid type given to fetchConcepts():", type);
  }
}

function handleResponse(response) {
  return response.json().then(function (json) {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  });
}

/***/ }),

/***/ "./client/src/actions/checklist/submitNewConcept.js":
/*!**********************************************************!*\
  !*** ./client/src/actions/checklist/submitNewConcept.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return submitNewConcept; });
/* harmony import */ var _fetchConcepts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchConcepts */ "./client/src/actions/checklist/fetchConcepts.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function submitNewConcept(concept) {
  return function (dispatch, getState) {
    dispatch({
      type: "POST_CONCEPT"
    });
    var post_obj = {
      method: "POST",
      headers: {
        'X-CSRF-Token': getState().csrfToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    console.log(concept.type);

    switch (concept.type) {
      case "concept":
        var adjective_id = concept.adjective_id,
            noun_id = concept.noun_id;
        return fetch( // using ids
        "/api/v1/concepts", _objectSpread({}, post_obj, {
          body: JSON.stringify({
            adjective_id: adjective_id,
            noun_id: noun_id
          })
        })).then(handleResponse).then(function (data) {
          console.log(data);
          return dispatch(Object(_fetchConcepts__WEBPACK_IMPORTED_MODULE_0__["default"])(concept.type));
        })["catch"](function (error) {
          return console.log(error);
        });

      case "adjective":
      case "noun":
        // debugger
        return fetch("/api/v1/".concat(concept.type, "s"), _objectSpread({}, post_obj, {
          body: JSON.stringify({
            name: concept.name
          })
        })).then(handleResponse).then(function (data) {
          console.log(data);
          return dispatch(Object(_fetchConcepts__WEBPACK_IMPORTED_MODULE_0__["default"])(concept.type));
        })["catch"](function (error) {
          return console.log(error);
        });

      default:
        return console.log("Invalid type");
    }
  };
}

function handleResponse(response) {
  console.log(response);
  return response.json().then(function (json) {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=submitNewConcept-2aedd3207474f7abf4f5.js.map