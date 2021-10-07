"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header/index.tsx":
/*!********************************************!*\
  !*** ./components/Layout/Header/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_common_Elements_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Elements/Container */ \"./components/common/Elements/Container/index.tsx\");\n/* harmony import */ var lib_getScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/getScroll */ \"./lib/getScroll.ts\");\n/* harmony import */ var components_common_Elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Elements/Button */ \"./components/common/Elements/Button/index.tsx\");\n/* harmony import */ var components_common_Elements_ExternalLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Elements/ExternalLink */ \"./components/common/Elements/ExternalLink/index.tsx\");\n/* harmony import */ var components_common_Elements_BurgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/Elements/BurgerMenu */ \"./components/common/Elements/BurgerMenu/index.tsx\");\n/* harmony import */ var components_Modal_BurgerSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Modal/BurgerSidebar */ \"./components/Modal/BurgerSidebar.tsx\");\n/* harmony import */ var components_common_Elements_Container_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/Elements/Container/styles */ \"./components/common/Elements/Container/styles.ts\");\n/* harmony import */ var components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Layout/Header/styles */ \"./components/Layout/Header/styles.ts\");\n/* harmony import */ var public_assets_svg_Logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! public/assets/svg/Logo.svg */ \"./public/assets/svg/Logo.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/tinahaibodi/Desktop/element-marketing-site/components/Layout/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      changeColor = _useState[0],\n      setChangeColor = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      sidebarVisibility = _useState2[0],\n      setSidebarVisibility = _useState2[1];\n\n  var changeSidebarVisibility = function changeSidebarVisibility() {\n    setSidebarVisibility(!sidebarVisibility);\n  };\n\n  var checkScrollTop = function checkScrollTop(event) {\n    var offsetFromTop = (0,lib_getScroll__WEBPACK_IMPORTED_MODULE_3__.getScroll)(event.target);\n\n    if (!changeColor && offsetFromTop > 100) {\n      setChangeColor(true);\n    } else if (offsetFromTop <= 100) {\n      setChangeColor(false);\n    }\n  };\n\n  var scrollTo = function scrollTo(id) {\n    var _document;\n\n    var element = (_document = document) === null || _document === void 0 ? void 0 : _document.getElementById(id);\n    element.scrollIntoView({\n      behavior: \"smooth\"\n    });\n    setSidebarVisibility(false);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    window.addEventListener(\"scroll\", checkScrollTop); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n\n  var MenuItem = function MenuItem() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.MenuItemContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        onClick: function onClick() {\n          return scrollTo(\"fixed-apr\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n          children: \"Fixed Rates\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        onClick: function onClick() {\n          return scrollTo(\"liquidity\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n          children: \"Mint & LP\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        onClick: function onClick() {\n          return scrollTo(\"pools\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n          children: \"Pools\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        onClick: function onClick() {\n          return scrollTo(\"build\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n          children: \"Build\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        onClick: function onClick() {\n          return scrollTo(\"treasury\");\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n          children: \"Treasury Management\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_ExternalLink__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {\n        href: \"https://app.element.fi\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_Button__WEBPACK_IMPORTED_MODULE_4__.PrimaryButton, {\n            variant: \"primary\",\n            text: \"Launch application\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.FixedHeader, {\n    changeColor: changeColor,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_Container__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {\n      gridColumn: \"1/13\",\n      width: \"auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_Container_styles__WEBPACK_IMPORTED_MODULE_8__.HeaderWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_Container_styles__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n            src: public_assets_svg_Logo_svg__WEBPACK_IMPORTED_MODULE_10__.default,\n            alt: \"Logo of Element Finance\",\n            layout: \"fixed\",\n            onClick: function onClick() {\n              return window.scrollTo(0, 0);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(MenuItem, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.BurgerMenuContainer, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_BurgerMenu__WEBPACK_IMPORTED_MODULE_6__.BurgerMenu, {\n              isOpen: sidebarVisibility,\n              onClick: changeSidebarVisibility\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Modal_BurgerSidebar__WEBPACK_IMPORTED_MODULE_7__.BurgerSidebar, {\n              open: sidebarVisibility,\n              handleClose: function handleClose() {\n                return setSidebarVisibility(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.CloseButton, {\n                onClick: function onClick() {\n                  return setSidebarVisibility(false);\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"svg\", {\n                  version: \"1.1\",\n                  id: \"Capa_1\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  x: \"0px\",\n                  y: \"0px\",\n                  viewBox: \"0 0 47.095 47.095\",\n                  xmlSpace: \"preserve\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"path\", {\n                      d: \"M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21 L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831 c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0 C47.673,42.282,47.672,38.54,45.363,36.234z\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 117,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 116,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.NavigationPrimary, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                  onClick: function onClick() {\n                    return scrollTo(\"fixed-apr\");\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n                    children: \"Fixed APR\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 128,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                  onClick: function onClick() {\n                    return scrollTo(\"liquidity\");\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n                    children: \"Add Liquidity\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 131,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 130,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                  onClick: function onClick() {\n                    return scrollTo(\"pools\");\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n                    children: \"Pools\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 134,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                  onClick: function onClick() {\n                    return scrollTo(\"build\");\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n                    children: \"Build\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 137,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 136,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                  onClick: function onClick() {\n                    return scrollTo(\"treasury\");\n                  },\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"p\", {\n                    children: \"Treasury Management\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 140,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 139,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_ExternalLink__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {\n                  href: \"https://google.com/\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_Layout_Header_styles__WEBPACK_IMPORTED_MODULE_9__.StyledLink, {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(components_common_Elements_Button__WEBPACK_IMPORTED_MODULE_4__.PrimaryButton, {\n                      variant: \"primary\",\n                      text: \"Launch application\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 144,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 143,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 142,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 126,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"FLGFF2VWQVnm1jjfP50cY4JAI9A=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFyQjtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVVFLCtEQUFDLHVFQUFEO0FBQVkseUJBQU8sRUFBRTtBQUFBLDJCQUFNQSxRQUFRLENBQUMsT0FBRCxDQUFkO0FBQUEsbUJBQXJCO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGLGVBYUUsK0RBQUMsdUVBQUQ7QUFBWSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1BLFFBQVEsQ0FBQyxVQUFELENBQWQ7QUFBQSxtQkFBckI7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkYsZUFnQkUsK0RBQUMsaUZBQUQ7QUFBYyxzQkFBSSxFQUFDLHFCQUFuQjtBQUFBLHlDQUNFLCtEQUFDLHVFQUFEO0FBQUEsMkNBQ0UsK0RBQUMsNEVBQUQ7QUFDRSw2QkFBTyxFQUFDLFNBRFY7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5RUQsQ0F0SU07O0dBQU1WOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIvaW5kZXgudHN4PzcwYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWN0aW9uQ29udGFpbmVyIH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0VsZW1lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSBcImxpYi9nZXRTY3JvbGxcIjtcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBFeHRlcm5hbExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRWxlbWVudHMvRXh0ZXJuYWxMaW5rXCI7XG5pbXBvcnQgeyBCdXJnZXJNZW51IH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0VsZW1lbnRzL0J1cmdlck1lbnVcIjtcbmltcG9ydCB7IEJ1cmdlclNpZGViYXIgfSBmcm9tIFwiY29tcG9uZW50cy9Nb2RhbC9CdXJnZXJTaWRlYmFyXCI7XG5pbXBvcnQge1xuICBGbGV4LFxuICBIZWFkZXJXcmFwcGVyLFxufSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRWxlbWVudHMvQ29udGFpbmVyL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgU3R5bGVkTGluayxcbiAgRml4ZWRIZWFkZXIsXG4gIE1lbnVJdGVtQ29udGFpbmVyLFxuICBOYXZpZ2F0aW9uUHJpbWFyeSxcbiAgQnVyZ2VyTWVudUNvbnRhaW5lcixcbiAgQ2xvc2VCdXR0b24sXG59IGZyb20gXCJjb21wb25lbnRzL0xheW91dC9IZWFkZXIvc3R5bGVzXCI7XG5cbmltcG9ydCBFbGVtZW50TG9nbyBmcm9tIFwicHVibGljL2Fzc2V0cy9zdmcvTG9nby5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2NoYW5nZUNvbG9yLCBzZXRDaGFuZ2VDb2xvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaWRlYmFyVmlzaWJpbGl0eSwgc2V0U2lkZWJhclZpc2liaWxpdHldID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZVNpZGViYXJWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldFNpZGViYXJWaXNpYmlsaXR5KCFzaWRlYmFyVmlzaWJpbGl0eSk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTY3JvbGxUb3AgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IG9mZnNldEZyb21Ub3AgPSBnZXRTY3JvbGwoZXZlbnQudGFyZ2V0KTtcblxuICAgIGlmICghY2hhbmdlQ29sb3IgJiYgb2Zmc2V0RnJvbVRvcCA+IDEwMCkge1xuICAgICAgc2V0Q2hhbmdlQ29sb3IodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRGcm9tVG9wIDw9IDEwMCkge1xuICAgICAgc2V0Q2hhbmdlQ29sb3IoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzY3JvbGxUbyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50Py5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgICBzZXRTaWRlYmFyVmlzaWJpbGl0eShmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbFRvcCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgY29uc3QgTWVudUl0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51SXRlbUNvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJmaXhlZC1hcHJcIil9PlxuICAgICAgICAgIDxwPkZpeGVkIFJhdGVzPC9wPlxuICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgIDxTdHlsZWRMaW5rIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKFwibGlxdWlkaXR5XCIpfT5cbiAgICAgICAgICA8cD5NaW50ICYgTFA8L3A+XG4gICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJwb29sc1wiKX0+XG4gICAgICAgICAgPHA+UG9vbHM8L3A+XG4gICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJidWlsZFwiKX0+XG4gICAgICAgICAgPHA+QnVpbGQ8L3A+XG4gICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJ0cmVhc3VyeVwiKX0+XG4gICAgICAgICAgPHA+VHJlYXN1cnkgTWFuYWdlbWVudDwvcD5cbiAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICA8U3R5bGVkTGluaz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2FwcC5lbGVtZW50LmZpXCI+XG4gICAgICAgICAgPFN0eWxlZExpbms+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHRleHQ9XCJMYXVuY2ggYXBwbGljYXRpb25cIiAvPlxuICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPC9FeHRlcm5hbExpbms+XG4gICAgICA8L01lbnVJdGVtQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rml4ZWRIZWFkZXIgY2hhbmdlQ29sb3I9e2NoYW5nZUNvbG9yfT5cbiAgICAgIDxTZWN0aW9uQ29udGFpbmVyIGdyaWRDb2x1bW49XCIxLzEzXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgIDxIZWFkZXJXcmFwcGVyPlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RWxlbWVudExvZ299XG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gb2YgRWxlbWVudCBGaW5hbmNlXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVJdGVtIC8+XG4gICAgICAgICAgICA8QnVyZ2VyTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJ1cmdlck1lbnVcbiAgICAgICAgICAgICAgICBpc09wZW49e3NpZGViYXJWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVNpZGViYXJWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnVyZ2VyU2lkZWJhclxuICAgICAgICAgICAgICAgIG9wZW49e3NpZGViYXJWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJpbGl0eShmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2liaWxpdHkoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0Ny4wOTUgNDcuMDk1XCJcbiAgICAgICAgICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ1LjM2MywzNi4yMzRsLTEzLjE1OC0xMy4xNmwxMi4yMS0xMi4yMWMyLjMxLTIuMzA3LDIuMzEtNi4wNDksMC04LjM1OGMtMi4zMDgtMi4zMDgtNi4wNS0yLjMwNy04LjM1NiwwbC0xMi4yMTIsMTIuMjFcblx0XHRMMTEuMDM4LDEuOTA2Yy0yLjMwOS0yLjMwOC02LjA1MS0yLjMwOC04LjM1OCwwYy0yLjMwNywyLjMwOS0yLjMwNyw2LjA0OSwwLDguMzU4bDEyLjgxLDEyLjgxTDEuNzMyLDM2LjgzMVxuXHRcdGMtMi4zMDksMi4zMS0yLjMwOSw2LjA1LDAsOC4zNTljMi4zMDgsMi4zMDcsNi4wNDksMi4zMDcsOC4zNTYsMGwxMy43NTktMTMuNzU4bDEzLjE2LDEzLjE2YzIuMzA4LDIuMzA4LDYuMDQ5LDIuMzA4LDguMzU2LDBcblx0XHRDNDcuNjczLDQyLjI4Miw0Ny42NzIsMzguNTQsNDUuMzYzLDM2LjIzNHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25QcmltYXJ5PlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJmaXhlZC1hcHJcIil9PlxuICAgICAgICAgICAgICAgICAgICA8cD5GaXhlZCBBUFI8L3A+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcImxpcXVpZGl0eVwiKX0+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFkZCBMaXF1aWRpdHk8L3A+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcInBvb2xzXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+UG9vbHM8L3A+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcImJ1aWxkXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+QnVpbGQ8L3A+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhcInRyZWFzdXJ5XCIpfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+VHJlYXN1cnkgTWFuYWdlbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbS9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJMYXVuY2ggYXBwbGljYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvblByaW1hcnk+XG4gICAgICAgICAgICAgIDwvQnVyZ2VyU2lkZWJhcj5cbiAgICAgICAgICAgIDwvQnVyZ2VyTWVudUNvbnRhaW5lcj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvSGVhZGVyV3JhcHBlcj5cbiAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8L0ZpeGVkSGVhZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VjdGlvbkNvbnRhaW5lciIsImdldFNjcm9sbCIsIlByaW1hcnlCdXR0b24iLCJFeHRlcm5hbExpbmsiLCJCdXJnZXJNZW51IiwiQnVyZ2VyU2lkZWJhciIsIkZsZXgiLCJIZWFkZXJXcmFwcGVyIiwiU3R5bGVkTGluayIsIkZpeGVkSGVhZGVyIiwiTWVudUl0ZW1Db250YWluZXIiLCJOYXZpZ2F0aW9uUHJpbWFyeSIsIkJ1cmdlck1lbnVDb250YWluZXIiLCJDbG9zZUJ1dHRvbiIsIkVsZW1lbnRMb2dvIiwiSGVhZGVyIiwiY2hhbmdlQ29sb3IiLCJzZXRDaGFuZ2VDb2xvciIsInNpZGViYXJWaXNpYmlsaXR5Iiwic2V0U2lkZWJhclZpc2liaWxpdHkiLCJjaGFuZ2VTaWRlYmFyVmlzaWJpbGl0eSIsImNoZWNrU2Nyb2xsVG9wIiwiZXZlbnQiLCJvZmZzZXRGcm9tVG9wIiwidGFyZ2V0Iiwic2Nyb2xsVG8iLCJpZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNZW51SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Header/index.tsx\n");

/***/ })

});