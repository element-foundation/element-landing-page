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

/***/ "./pages/api/get-tvl.ts":
/*!******************************!*\
  !*** ./pages/api/get-tvl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst getTotalValueLocked = async () => {\n  return fetch(\"https://elementfi.s3.us-east-2.amazonaws.com/stats/tvl\", {});\n};\n\nasync function handler(req, res) {\n  const response = await getTotalValueLocked();\n  const {\n    tvl\n  } = await response.json();\n  return res.status(200).json(tvl);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LXR2bC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsWUFBWTtBQUN0QyxTQUFPQyxLQUFLLENBQUMsd0RBQUQsRUFBMkQsRUFBM0QsQ0FBWjtBQUNELENBRkQ7O0FBSWUsZUFBZUMsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNTCxtQkFBbUIsRUFBMUM7QUFDQSxRQUFNO0FBQUVNLElBQUFBO0FBQUYsTUFBVSxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBdEI7QUFFQSxTQUFPSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQkQsR0FBckIsQ0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudC8uL3BhZ2VzL2FwaS9nZXQtdHZsLnRzPzAwYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuY29uc3QgZ2V0VG90YWxWYWx1ZUxvY2tlZCA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9lbGVtZW50ZmkuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vc3RhdHMvdHZsXCIsIHt9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRUb3RhbFZhbHVlTG9ja2VkKCk7XG4gIGNvbnN0IHsgdHZsIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHR2bCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0VG90YWxWYWx1ZUxvY2tlZCIsImZldGNoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwidHZsIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-tvl.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/get-tvl.ts"));
module.exports = __webpack_exports__;

})();