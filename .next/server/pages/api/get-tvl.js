"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-tvl";
exports.ids = ["pages/api/get-tvl"];
exports.modules = {

/***/ "(api)/./pages/api/get-tvl.ts":
/*!******************************!*\
  !*** ./pages/api/get-tvl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst getTotalValueLocked = async ()=>{\n    return fetch(\"https://elementfi.s3.us-east-2.amazonaws.com/stats/tvl\", {});\n};\nasync function handler(req, res) {\n    const response = await getTotalValueLocked();\n    const { tvl  } = await response.json();\n    return res.status(200).json(tvl);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXR2bC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsVUFBWTtJQUN0QyxPQUFPQyxLQUFLLENBQUMsd0RBQXdELEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVjLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNTCxtQkFBbUIsRUFBRTtJQUM1QyxNQUFNLEVBQUVNLEdBQUcsR0FBRSxHQUFHLE1BQU1ELFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBRXJDLE9BQU9ILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50Ly4vcGFnZXMvYXBpL2dldC10dmwudHM/MWZmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBnZXRUb3RhbFZhbHVlTG9ja2VkID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL2VsZW1lbnRmaS5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9zdGF0cy90dmxcIiwge30pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFRvdGFsVmFsdWVMb2NrZWQoKTtcbiAgY29uc3QgeyB0dmwgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odHZsKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRUb3RhbFZhbHVlTG9ja2VkIiwiZmV0Y2giLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJ0dmwiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-tvl.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-tvl.ts"));
module.exports = __webpack_exports__;

})();