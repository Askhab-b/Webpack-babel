/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function() {

eval("var tamagochi = {\n  name: 'egg',\n  meal: 0,\n  energy: 2,\n  mood: 4,\n  getStatus: function getStatus() {\n    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {\n      return \"\".concat(this.name, \" \\u0423\\u043C\\u0435\\u0440:(\");\n    }\n\n    var mealStatus = '';\n    var energyStatus = '';\n    var moodStatus = '';\n\n    if (this.meal < 3) {\n      mealStatus = 'Я голоден';\n    } else {\n      mealStatus = 'Я не голоден';\n    }\n\n    ;\n\n    if (this.energy < 3) {\n      energyStatus = 'Я хочу спать';\n    } else {\n      energyStatus = 'Я не хочу спать';\n    }\n\n    ;\n\n    if (this.mood < 3) {\n      moodStatus = 'Мне скучно';\n    } else {\n      moodStatus = 'Мне весело';\n    }\n\n    ;\n    return \"\\u0418\\u043C\\u044F: \".concat(this.name, \", \\u0415\\u0434\\u0430: \").concat(mealStatus, \" (\").concat(this.meal, \"),\\n    \\u042D\\u043D\\u0435\\u0440\\u0433\\u0438\\u044F: \").concat(energyStatus, \" (\").concat(this.energy, \"), \\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0435\\u043D\\u0438\\u0435: \").concat(moodStatus, \" (\").concat(this.mood, \")\");\n  },\n  setName: function setName(names) {\n    return this.name = names;\n  },\n  eat: function eat() {\n    if (this.meal < 5) {\n      this.meal++;\n      this.mood--;\n    } else {\n      this.mood--;\n    }\n\n    return this.getStatus();\n  },\n  sleep: function sleep() {\n    if (this.energy < 5) {\n      this.energy++;\n      this.meal--;\n    } else {\n      this.meal--;\n    }\n\n    return this.getStatus();\n  },\n  play: function play() {\n    if (this.mood < 5) {\n      this.mood++;\n      this.energy--;\n    } else {\n      this.energy--;\n    }\n\n    return this.getStatus();\n  }\n};\nconsole.log(tamagochi.getStatus());\nconsole.log(tamagochi.setName('Jamic'));\nconsole.log(tamagochi.eat());\nconsole.log(tamagochi.sleep());\nconsole.log(tamagochi.play());\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;