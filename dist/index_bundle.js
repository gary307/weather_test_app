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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.css */ \"./style.css\");\n\n//difine our variables, default page to london\nvar city = \"london\"; //import our sass style\n\nvar cityId = \"2643743\";\nvar title = document.getElementById(\"title\");\nvar todayWeather = document.getElementById(\"todayWeather\");\nvar futureWeather = document.getElementById(\"futureWeather\");\nvar error = document.getElementById(\"error\");\n\n//a fetch function to get our data and get the weather for 3pm each day, then populate the page with the results\nfunction getWeatherData() {\n  fetch(\"https://api.openweathermap.org/data/2.5/forecast?id=\" + cityId + \"&mode=json&APPID=3c239d3f84ca8afd307ce188b542bf69&units=metric\").then(function (data) {\n    return data.json();\n  }).then(function (data) {\n    var weekForecast = [];\n    data.list.map(function (day, key) {\n      if (day.dt_txt.includes(\"15:00:00\")) {\n        weekForecast.push(day);\n      }\n    });\n    error.innerHTML = \"\";\n    futureWeather.innerHTML = \"\";\n\n    weekForecast.map(function (day, key) {\n      futureWeather.innerHTML += \"<div><span class='weather_temp'>\" + day.dt_txt.slice(0, 10) + \"</span><span class='weather_temp'><img src='http://openweathermap.org/img/w/\" + String(day.weather[0].icon) + \".png' />\" + Math.round(day.main.temp) + \"C</span><span class='weather_temp'>\" + String(day.weather[0].main) + \"</span><span class='weather_temp'>\" + String(day.weather[0].description) + \"</span></div>\";\n    });\n\n    title.innerHTML = city + \" weather report\";\n  });\n}\n\n//inital run on load\ngetWeatherData();\n\n//A fetch request to compare search value and if is true will run getWeatherData() to reload the content.\nvar updateLocation = function updateLocation() {\n  var input = document.getElementById(\"input\").value;\n\n  fetch(\"../data\").then(function (data) {\n    return data.json();\n  }).then(function (data) {\n    data.map(function (cityData) {\n      if (cityData.name.toLowerCase() === input.toLowerCase() && cityData.country === \"GB\") {\n        cityId = cityData.id;\n        city = cityData.name;\n        error.innerHTML = \"\";\n        getWeatherData();\n      } else {\n        error.innerHTML = \"city not found\";\n      }\n    });\n  });\n};\n\nvar submitCity = document.getElementById(\"submitCity\");\n\nsubmitCity.addEventListener(\"click\", updateLocation);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });