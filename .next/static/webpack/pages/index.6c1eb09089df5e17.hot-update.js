"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/OurVaults/index.tsx":
/*!****************************************!*\
  !*** ./components/OurVaults/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OurVaults\": function() { return /* binding */ OurVaults; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-awesome-reveal */ \"./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var components_OurVaults_VaultsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/OurVaults/VaultsItem */ \"./components/OurVaults/VaultsItem/index.tsx\");\n/* harmony import */ var components_common_Elements_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Elements/Container */ \"./components/common/Elements/Container/index.tsx\");\n/* harmony import */ var components_LeftSection_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/LeftSection/styles */ \"./components/LeftSection/styles.ts\");\n/* harmony import */ var components_OurVaults_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/OurVaults/styles */ \"./components/OurVaults/styles.ts\");\n/* harmony import */ var public_assets_svg_Currencies_Currencies_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/assets/svg/Currencies/Currencies.svg */ \"./public/assets/svg/Currencies/Currencies.svg\");\n/* harmony import */ var public_assets_svg_Currencies_BTC_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! public/assets/svg/Currencies/BTC.svg */ \"./public/assets/svg/Currencies/BTC.svg\");\n/* harmony import */ var public_assets_svg_Currencies_ETH_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/assets/svg/Currencies/ETH.svg */ \"./public/assets/svg/Currencies/ETH.svg\");\n/* harmony import */ var public_assets_svg_Currencies_USDC_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! public/assets/svg/Currencies/USDC.svg */ \"./public/assets/svg/Currencies/USDC.svg\");\n/* harmony import */ var public_assets_svg_Currencies_DAI_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! public/assets/svg/Currencies/DAI.svg */ \"./public/assets/svg/Currencies/DAI.svg\");\n/* harmony import */ var public_assets_svg_Currencies_LUSD_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! public/assets/svg/Currencies/LUSD.svg */ \"./public/assets/svg/Currencies/LUSD.svg\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar vaultData = [\n    {\n        currencyTitle: \"Balancer\",\n        currencyImage: public_assets_svg_Currencies_Currencies_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        currencyRainbow: true,\n        currencyReturn: false\n    },\n    {\n        currencyTitle: \"Maker\",\n        currencyImage: public_assets_svg_Currencies_BTC_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        currencyRainbow: false,\n        currencyReturn: true\n    },\n    {\n        currencyTitle: \"Lido\",\n        currencyImage: public_assets_svg_Currencies_USDC_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        currencyRainbow: false,\n        currencyReturn: true\n    },\n    {\n        currencyTitle: \"Curve\",\n        currencyImage: public_assets_svg_Currencies_DAI_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n        currencyRainbow: false,\n        currencyReturn: true\n    },\n    {\n        currencyTitle: \"Aztec\",\n        currencyImage: public_assets_svg_Currencies_LUSD_svg__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n        currencyRainbow: true,\n        currencyReturn: false\n    },\n    {\n        currencyTitle: \"replace\",\n        currencyImage: public_assets_svg_Currencies_ETH_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        currencyRainbow: true,\n        currencyReturn: true\n    }, \n];\nvar OurVaults = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref[0], setMounted = ref[1];\n    var resolvedTheme = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)().resolvedTheme;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_OurVaults_styles__WEBPACK_IMPORTED_MODULE_6__.ValuesWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LeftSection_styles__WEBPACK_IMPORTED_MODULE_5__.AbsoluteSVGContainer, {\n                right: \"0\",\n                top: \"3rem\",\n                className: \"decorative-line first-line\",\n                height: \"50%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"DecorativeLine\"\n                }, void 0, false, {\n                    fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Elements_Container__WEBPACK_IMPORTED_MODULE_4__.SectionContainer, {\n                padding: \"0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_13__.Fade, {\n                    duration: 2500,\n                    delay: 200,\n                    triggerOnce: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_OurVaults_styles__WEBPACK_IMPORTED_MODULE_6__.VaultsContainer, {\n                        darkTheme: resolvedTheme === \"dark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LeftSection_styles__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {\n                                darkTheme: resolvedTheme === \"dark\",\n                                children: \"Our Integrations\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_OurVaults_styles__WEBPACK_IMPORTED_MODULE_6__.GridContainer, {\n                                children: vaultData.map(function(item, id) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_OurVaults_VaultsItem__WEBPACK_IMPORTED_MODULE_3__.VaultsItem, {\n                                        item: item,\n                                        darkTheme: resolvedTheme === \"dark\"\n                                    }, id, false, {\n                                        fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LeftSection_styles__WEBPACK_IMPORTED_MODULE_5__.AbsoluteSVGContainer, {\n                right: \"0\",\n                bottom: \"-2rem\",\n                className: \"decorative-line second-line\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"DecorativeLineBottom\"\n                }, void 0, false, {\n                    fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sage/Desktop/element-landing-page/components/OurVaults/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(OurVaults, \"JmE2po7/fFdYjcS5XMxC8II/TWw=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = OurVaults;\nvar _c;\n$RefreshReg$(_c, \"OurVaults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2hDLCtFQUFvQjtnQkFDbkJvQixLQUFLLEVBQUMsR0FBRztnQkFDVGEsTUFBTSxFQUFDLE9BQU87Z0JBQ2RYLFNBQVMsRUFBQyw2QkFBNkI7MEJBRXZDLDRFQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMsc0JBQXNCOzs7Ozt5QkFBRzs7Ozs7cUJBQ25COzs7Ozs7YUFDVCxDQUNoQjtBQUNKLENBQUMsQ0FBQztHQTlDV04sU0FBUzs7UUFFTW5CLGlEQUFROzs7QUFGdkJtQixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3VyVmF1bHRzL2luZGV4LnRzeD82NGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBWYXVsdHNJdGVtIH0gZnJvbSBcImNvbXBvbmVudHMvT3VyVmF1bHRzL1ZhdWx0c0l0ZW1cIjtcbmltcG9ydCB7IFNlY3Rpb25Db250YWluZXIgfSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRWxlbWVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQge1xuICBBYnNvbHV0ZVNWR0NvbnRhaW5lcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiY29tcG9uZW50cy9MZWZ0U2VjdGlvbi9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIEdyaWRDb250YWluZXIsXG4gIFZhbHVlc1dyYXBwZXIsXG4gIFZhdWx0c0NvbnRhaW5lcixcbn0gZnJvbSBcImNvbXBvbmVudHMvT3VyVmF1bHRzL3N0eWxlc1wiO1xuXG5pbXBvcnQgQ3VycmVuY2llcyBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvQ3VycmVuY2llcy9DdXJyZW5jaWVzLnN2Z1wiO1xuaW1wb3J0IEJpdGNvaW4gZnJvbSBcInB1YmxpYy9hc3NldHMvc3ZnL0N1cnJlbmNpZXMvQlRDLnN2Z1wiO1xuaW1wb3J0IEVUSCBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvQ3VycmVuY2llcy9FVEguc3ZnXCI7XG5pbXBvcnQgVVNEQyBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvQ3VycmVuY2llcy9VU0RDLnN2Z1wiO1xuaW1wb3J0IERBSSBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvQ3VycmVuY2llcy9EQUkuc3ZnXCI7XG5pbXBvcnQgTFVTRCBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvQ3VycmVuY2llcy9MVVNELnN2Z1wiO1xuaW1wb3J0IHsgVmF1bHRQcm9wcyB9IGZyb20gXCJsaWIvdHlwZXNcIjtcblxuY29uc3QgdmF1bHREYXRhID0gW1xuICB7XG4gICAgY3VycmVuY3lUaXRsZTogXCJCYWxhbmNlclwiLFxuICAgIGN1cnJlbmN5SW1hZ2U6IEN1cnJlbmNpZXMsXG4gICAgY3VycmVuY3lSYWluYm93OiB0cnVlLFxuICAgIGN1cnJlbmN5UmV0dXJuOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGN1cnJlbmN5VGl0bGU6IFwiTWFrZXJcIixcbiAgICBjdXJyZW5jeUltYWdlOiBCaXRjb2luLFxuICAgIGN1cnJlbmN5UmFpbmJvdzogZmFsc2UsXG4gICAgY3VycmVuY3lSZXR1cm46IHRydWUsXG4gIH0sXG4gIHtcbiAgICBjdXJyZW5jeVRpdGxlOiBcIkxpZG9cIixcbiAgICBjdXJyZW5jeUltYWdlOiBVU0RDLFxuICAgIGN1cnJlbmN5UmFpbmJvdzogZmFsc2UsXG4gICAgY3VycmVuY3lSZXR1cm46IHRydWUsXG4gIH0sXG4gIHtcbiAgICBjdXJyZW5jeVRpdGxlOiBcIkN1cnZlXCIsXG4gICAgY3VycmVuY3lJbWFnZTogREFJLFxuICAgIGN1cnJlbmN5UmFpbmJvdzogZmFsc2UsXG4gICAgY3VycmVuY3lSZXR1cm46IHRydWUsXG4gIH0sXG4gIHtcbiAgICBjdXJyZW5jeVRpdGxlOiBcIkF6dGVjXCIsXG4gICAgY3VycmVuY3lJbWFnZTogTFVTRCxcbiAgICBjdXJyZW5jeVJhaW5ib3c6IHRydWUsXG4gICAgY3VycmVuY3lSZXR1cm46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgY3VycmVuY3lUaXRsZTogXCJyZXBsYWNlXCIsXG4gICAgY3VycmVuY3lJbWFnZTogRVRILFxuICAgIGN1cnJlbmN5UmFpbmJvdzogdHJ1ZSxcbiAgICBjdXJyZW5jeVJldHVybjogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBPdXJWYXVsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyByZXNvbHZlZFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8VmFsdWVzV3JhcHBlcj5cbiAgICAgIDxBYnNvbHV0ZVNWR0NvbnRhaW5lclxuICAgICAgICByaWdodD1cIjBcIlxuICAgICAgICB0b3A9XCIzcmVtXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGVjb3JhdGl2ZS1saW5lIGZpcnN0LWxpbmVcIlxuICAgICAgICBoZWlnaHQ9XCI1MCVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRlY29yYXRpdmVMaW5lXCIgLz5cbiAgICAgIDwvQWJzb2x1dGVTVkdDb250YWluZXI+XG4gICAgICA8U2VjdGlvbkNvbnRhaW5lciBwYWRkaW5nPVwiMFwiPlxuICAgICAgICA8RmFkZSBkdXJhdGlvbj17MjUwMH0gZGVsYXk9ezIwMH0gdHJpZ2dlck9uY2U+XG4gICAgICAgICAgPFZhdWx0c0NvbnRhaW5lciBkYXJrVGhlbWU9e3Jlc29sdmVkVGhlbWUgPT09IFwiZGFya1wifT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgZGFya1RoZW1lPXtyZXNvbHZlZFRoZW1lID09PSBcImRhcmtcIn0+XG4gICAgICAgICAgICAgIE91ciBJbnRlZ3JhdGlvbnNcbiAgICAgICAgICAgIDwvU2VjdGlvblRpdGxlPlxuICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICAgIHt2YXVsdERhdGEubWFwKChpdGVtOiBWYXVsdFByb3BzLCBpZDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxWYXVsdHNJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIGRhcmtUaGVtZT17cmVzb2x2ZWRUaGVtZSA9PT0gXCJkYXJrXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDwvVmF1bHRzQ29udGFpbmVyPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICA8QWJzb2x1dGVTVkdDb250YWluZXJcbiAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgYm90dG9tPVwiLTJyZW1cIlxuICAgICAgICBjbGFzc05hbWU9XCJkZWNvcmF0aXZlLWxpbmUgc2Vjb25kLWxpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRlY29yYXRpdmVMaW5lQm90dG9tXCIgLz5cbiAgICAgIDwvQWJzb2x1dGVTVkdDb250YWluZXI+XG4gICAgPC9WYWx1ZXNXcmFwcGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJGYWRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VUaGVtZSIsIlZhdWx0c0l0ZW0iLCJTZWN0aW9uQ29udGFpbmVyIiwiQWJzb2x1dGVTVkdDb250YWluZXIiLCJTZWN0aW9uVGl0bGUiLCJHcmlkQ29udGFpbmVyIiwiVmFsdWVzV3JhcHBlciIsIlZhdWx0c0NvbnRhaW5lciIsIkN1cnJlbmNpZXMiLCJCaXRjb2luIiwiRVRIIiwiVVNEQyIsIkRBSSIsIkxVU0QiLCJ2YXVsdERhdGEiLCJjdXJyZW5jeVRpdGxlIiwiY3VycmVuY3lJbWFnZSIsImN1cnJlbmN5UmFpbmJvdyIsImN1cnJlbmN5UmV0dXJuIiwiT3VyVmF1bHRzIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJyZXNvbHZlZFRoZW1lIiwicmlnaHQiLCJ0b3AiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJkaXYiLCJwYWRkaW5nIiwiZHVyYXRpb24iLCJkZWxheSIsInRyaWdnZXJPbmNlIiwiZGFya1RoZW1lIiwibWFwIiwiaXRlbSIsImlkIiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OurVaults/index.tsx\n"));

/***/ })

});