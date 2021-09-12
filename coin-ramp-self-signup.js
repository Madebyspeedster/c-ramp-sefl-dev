/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("class SelfSignupCoinRamp extends HTMLElement {\n    constructor() {\n        super();\n        const shadow = this.attachShadow({ mode: \"open\" });\n        const wrapper = document.createElement(\"div\");\n        const script = document.createElement(\"script\");\n        const appWrapper = document.createElement(\"div\");\n        appWrapper.id = \"coin_ramp_self_signup_form\";\n        script.type = 'text/javascript';\n        //@ts-ignore\n        window.coinRampSelfTag = appWrapper;\n        script.src =\n            \"https://cdn.jsdelivr.net/gh/madebyspeedster/c-ramp-sefl-dev/crs.js\"\n        wrapper.appendChild(appWrapper);\n        wrapper.appendChild(script);\n        shadow.appendChild(wrapper);\n    }\n}\n\n// Define the new element\ncustomElements.define(\"coin-ramp-self-signup\", SelfSignupCoinRamp);\n\n//# sourceURL=webpack://custom-sign-up/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;
