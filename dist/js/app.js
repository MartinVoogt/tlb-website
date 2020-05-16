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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/scripts/view/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/scripts/navigation/index.js");
/* import experience from './experience/experience'; 
import scroll from './navigation/scroll';
import server from './server/status';
import choice from './choice';

document.addEventListener('DOMContentLoaded', e => {
    experience();
    scroll();
    server();
    choice();
}); */


_view__WEBPACK_IMPORTED_MODULE_0__["default"].set();
Object(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/scripts/navigation/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/navigation/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var timeout = 300;
var trigger = document.getElementById('navigation-trigger');
var navElement = document.querySelector('nav');
var navContainer = document.querySelector('.container');

var addClass = function addClass(name) {
  return function (element) {
    return element.classList.add(name);
  };
};

var removeClass = function removeClass(name) {
  return function (element) {
    return element.classList.remove(name);
  };
};

var hasClass = function hasClass(name) {
  return function (element) {
    return element.classList.contains(name);
  };
};

var setActive = addClass('active');
var setInactive = removeClass('active');
var isActive = hasClass('active');

var setOut = function setOut(element) {
  removeClass('in')(element);
  addClass('out')(element);
  setTimeout(function () {
    setInactive(element);
  }, timeout);
};

var setIn = function setIn(element) {
  removeClass('out')(element);
  addClass('in')(element);
  setActive(element);
};

var setNavigation = function setNavigation(e) {
  e.preventDefault();
  var state = isActive(navElement) ? setOut(navElement) : setIn(navElement);
};

var triggerClick = function triggerClick(e) {
  e.preventDefault();
};

var navigation = function navigation() {
  trigger.addEventListener('click', setNavigation);
  navContainer.addEventListener('click', function (e) {
    if (e.srcElement == navContainer) setNavigation(e);

    if (e.srcElement.tagName == 'A') {
      setNavigation(e);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/scripts/view/index.js":
/*!***********************************!*\
  !*** ./src/scripts/view/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var views = {
  timeout: 300,
  current: false,
  list: [],
  set_current: function set_current(current) {
    this.current = current;
  },
  get_view_element: function get_view_element(name) {
    return document.querySelector("main > section > div[data-view-name=\"".concat(element.dataset.viewTarget, "\"]"));
  },
  get_views: function get_views() {
    var views = _toConsumableArray(document.querySelectorAll('*[data-view-target]'));

    return views.reduce(function (current, trigger) {
      var view = document.querySelector("main > section > div[data-view-name=\"".concat(trigger.dataset.viewTarget, "\"]"));
      if (view) current = [].concat(_toConsumableArray(current), [{
        name: view.dataset.viewName,
        element: view,
        trigger: trigger
      }]);
      return current;
    }, []);
  },
  get_view: function get_view(name) {
    return this.list.filter(function (item) {
      return item.name == name;
    });
  },
  set_change: function set_change(view) {
    var current = this.current.element;
    var next = view.element;
    current.classList.remove('in');
    current.classList.add('out');
    current.classList.remove('active');
    setTimeout(function () {
      current.classList.remove('out');
      next.classList.add('in');
      next.classList.add('active');
    }, this.timeout);
    this.set_current(view);
  },
  set_first: function set_first(view) {
    var next = view.element;
    next.classList.add('in');
    next.classList.add('active');
    this.set_current(view);
  },
  set_listeners: function set_listeners(view) {
    var _this = this;

    view.trigger.addEventListener('click', function (e) {
      e.preventDefault();
      views.set_change(view);
    });
  },
  set: function set() {
    var _this = this;

    this.list = this.get_views();

    var _this$list = _toArray(this.list),
        first = _this$list[0],
        rest = _this$list.slice(1);

    this.set_first(first);
    this.list.forEach(function (view) {
      _this.set_listeners(view);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (views);

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/styles/app.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/tlb.test/public_html/src/scripts/app.js */"./src/scripts/app.js");
module.exports = __webpack_require__(/*! /var/www/html/tlb.test/public_html/src/styles/app.scss */"./src/styles/app.scss");


/***/ })

/******/ });