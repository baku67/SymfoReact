"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projet/[id]",{

/***/ "./pages/projet/[id].js":
/*!******************************!*\
  !*** ./pages/projet/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ProjectDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), project = _useState[0], setProject = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasks = _useState1[0], setTasks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksTodo = _useState2[0], setTasksTodo = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksInProgress = _useState3[0], setTasksInProgress = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), completedTasks = _useState4[0], setCompletedTasks = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id)).then(function(response) {\n                var projectData = response.data;\n                setProject(projectData);\n                // Récupérer les détails de chaque tâche\n                var taskRequests = projectData.tasks.map(function(taskUrl) {\n                    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000\".concat(taskUrl));\n                });\n                Promise.all(taskRequests).then(function(taskResponses) {\n                    var taskDetails = taskResponses.map(function(res) {\n                        return res.data;\n                    });\n                    // Séparer les tâches en cours et terminées\n                    var todo = taskDetails.filter(function(task) {\n                        return task.status === \"todo\";\n                    });\n                    var inProgress = taskDetails.filter(function(task) {\n                        return task.status === \"inProgress\";\n                    });\n                    var completed = taskDetails.filter(function(task) {\n                        return task.status === \"completed\";\n                    });\n                    setTasksInProgress(inProgress);\n                    setCompletedTasks(completed);\n                    setLoading(false);\n                })[\"catch\"](function(taskError) {\n                    console.error(\"Error fetching tasks:\", taskError);\n                    setError(taskError);\n                    setLoading(false);\n                });\n            })[\"catch\"](function(error) {\n                setError(error);\n                setLoading(false);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 52,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error loading project details: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 53,\n        columnNumber: 23\n    }, _this);\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No project found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 54,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: project.title\n            }, void 0, false, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    project.description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"T\\xe2ches: \",\n                    project.tasks.length\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tasksListsContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"En cours:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: tasksInProgress.map(function(task) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"projectRow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 71,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, task.id, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"En cours:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: tasksInProgress.map(function(task) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"projectRow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 83,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, task.id, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Termin\\xe9es:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: completedTasks.map(function(task) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"projectRow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 95,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, task.id, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProjectDetails, \"god3Epe/ko9od81MHdosoFhLlmE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0MsTUFBTTs7Ozs7OzswQkFHaEMsOERBQUNKO2dCQUFJSyxXQUFVOztrQ0FHWCw4REFBRUw7OzBDQUNFLDhEQUFDTTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTjswQ0FDSWhDLGdCQUFnQmMsR0FBRyxDQUFDUyxTQUFBQTt5REFDakIsOERBQUNTO3dDQUFrQkssV0FBVTtrREFDekIsNEVBQUNFO3NEQUFNaEIsS0FBS1csS0FBSzs7Ozs7O3VDQURYWCxLQUFLL0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTdCLDhEQUFDd0M7OzBDQUNHLDhEQUFDTTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTjswQ0FDSWhDLGdCQUFnQmMsR0FBRyxDQUFDUyxTQUFBQTt5REFDakIsOERBQUNTO3dDQUFrQkssV0FBVTtrREFDekIsNEVBQUNFO3NEQUFNaEIsS0FBS1csS0FBSzs7Ozs7O3VDQURYWCxLQUFLL0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUTdCLDhEQUFDd0M7OzBDQUNHLDhEQUFDTTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTjswQ0FDSTlCLGVBQWVZLEdBQUcsQ0FBQ1MsU0FBQUE7eURBQ2hCLDhEQUFDUzt3Q0FBa0JLLFdBQVU7a0RBQ3pCLDRFQUFDRTtzREFBTWhCLEtBQUtXLEtBQUs7Ozs7Ozt1Q0FEWFgsS0FBSy9CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdDO0dBckdNRjs7UUFFYUosa0RBQVNBOzs7S0FGdEJJO0FBdUdOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2pldC9baWRdLmpzPzg1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgUHJvamVjdERldGFpbHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YXNrc1RvZG8sIHNldFRhc2tzVG9kb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFza3NJblByb2dyZXNzLCBzZXRUYXNrc0luUHJvZ3Jlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFRhc2tzLCBzZXRDb21wbGV0ZWRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9qZWN0cy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkw6l0YWlscyBkZSBjaGFxdWUgdMOiY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1JlcXVlc3RzID0gcHJvamVjdERhdGEudGFza3MubWFwKHRhc2tVcmwgPT4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAke3Rhc2tVcmx9YCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRhc2tSZXF1ZXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odGFza1Jlc3BvbnNlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tSZXNwb25zZXMubWFwKHJlcyA9PiByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTw6lwYXJlciBsZXMgdMOiY2hlcyBlbiBjb3VycyBldCB0ZXJtaW7DqWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdGFza0RldGFpbHMuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICd0b2RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpblByb2dyZXNzID0gdGFza0RldGFpbHMuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICdpblByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrRGV0YWlscy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza3NJblByb2dyZXNzKGluUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGxldGVkVGFza3MoY29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGFza0Vycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIHRhc2tFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0YXNrRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIGxvYWRpbmcgcHJvamVjdCBkZXRhaWxzOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gPHA+Tm8gcHJvamVjdCBmb3VuZDwvcD47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+e3Byb2plY3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHA+VMOiY2hlczoge3Byb2plY3QudGFza3MubGVuZ3RofTwvcD5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrc0xpc3RzQ29udGFpbmVyJz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPCBkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkVuIGNvdXJzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2tzSW5Qcm9ncmVzcy5tYXAodGFzayA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwicHJvamVjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YXNrLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5FbiBjb3Vyczo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrc0luUHJvZ3Jlc3MubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cInByb2plY3RSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGFzay50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGVybWluw6llczo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRUYXNrcy5tYXAodGFzayA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwicHJvamVjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YXNrLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsczsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2plY3REZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwidGFza3MiLCJzZXRUYXNrcyIsInRhc2tzVG9kbyIsInNldFRhc2tzVG9kbyIsInRhc2tzSW5Qcm9ncmVzcyIsInNldFRhc2tzSW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwic2V0Q29tcGxldGVkVGFza3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJwcm9qZWN0RGF0YSIsImRhdGEiLCJ0YXNrUmVxdWVzdHMiLCJtYXAiLCJ0YXNrVXJsIiwiUHJvbWlzZSIsImFsbCIsInRhc2tSZXNwb25zZXMiLCJ0YXNrRGV0YWlscyIsInJlcyIsInRvZG8iLCJmaWx0ZXIiLCJ0YXNrIiwic3RhdHVzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZCIsImNhdGNoIiwidGFza0Vycm9yIiwiY29uc29sZSIsInAiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiaDMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projet/[id].js\n"));

/***/ })

});