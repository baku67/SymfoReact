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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ProjectDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), project = _useState[0], setProject = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasks = _useState1[0], setTasks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksInProgress = _useState2[0], setTasksInProgress = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), completedTasks = _useState3[0], setCompletedTasks = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState4[0], setLoading = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState5[0], setError = _useState5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id)).then(function(response) {\n                var projectData = response.data;\n                setProject(projectData);\n                // Récupérer les détails de chaque tâche\n                var taskRequests = projectData.tasks.map(function(taskUrl) {\n                    return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000\".concat(taskUrl));\n                });\n                Promise.all(taskRequests).then(function(taskResponses) {\n                    var taskDetails = taskResponses.map(function(res) {\n                        return res.data;\n                    });\n                    // Séparer les tâches en cours et terminées\n                    var inProgress = taskDetails.filter(function(task) {\n                        return task.status === \"in_progress\";\n                    });\n                    var completed = taskDetails.filter(function(task) {\n                        return task.status === \"completed\";\n                    });\n                    setTasksInProgress(inProgress);\n                    setCompletedTasks(completed);\n                    setLoading(false);\n                })[\"catch\"](function(taskError) {\n                    console.error(\"Error fetching tasks:\", taskError);\n                    setError(taskError);\n                    setLoading(false);\n                });\n            })[\"catch\"](function(error) {\n                setError(error);\n                setLoading(false);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 50,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error loading project details: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 51,\n        columnNumber: 23\n    }, _this);\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No project found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 52,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: project.title\n            }, void 0, false, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    project.description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"T\\xe2ches: \",\n                    project.tasks.length\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tasksListsContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"En cours:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: tasksInProgress.map(function(task) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"projectRow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 68,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, task.id, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Termin\\xe9es:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: completedTasks.map(function(task) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"projectRow\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 80,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, task.id, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProjectDetails, \"MtqWz3oeN6sdcirWUL2dRvZ4gHI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtrREFDekIsNEVBQUNFO3NEQUFNZixLQUFLVSxLQUFLOzs7Ozs7dUNBRFhWLEtBQUs3QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRN0IsOERBQUNxQzs7MENBQ0csOERBQUNNOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNOOzBDQUNJN0IsZUFBZVksR0FBRyxDQUFDUyxTQUFBQTt5REFDaEIsOERBQUNRO3dDQUFrQkssV0FBVTtrREFDekIsNEVBQUNFO3NEQUFNZixLQUFLVSxLQUFLOzs7Ozs7dUNBRFhWLEtBQUs3QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVk3QztHQXRGTUY7O1FBRWFKLGtEQUFTQTs7O0tBRnRCSTtBQXdGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZXQvW2lkXS5qcz84NWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFza3NJblByb2dyZXNzLCBzZXRUYXNrc0luUHJvZ3Jlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFRhc2tzLCBzZXRDb21wbGV0ZWRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9qZWN0cy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkw6l0YWlscyBkZSBjaGFxdWUgdMOiY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1JlcXVlc3RzID0gcHJvamVjdERhdGEudGFza3MubWFwKHRhc2tVcmwgPT4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAke3Rhc2tVcmx9YCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRhc2tSZXF1ZXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odGFza1Jlc3BvbnNlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tSZXNwb25zZXMubWFwKHJlcyA9PiByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTw6lwYXJlciBsZXMgdMOiY2hlcyBlbiBjb3VycyBldCB0ZXJtaW7DqWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpblByb2dyZXNzID0gdGFza0RldGFpbHMuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICdpbl9wcm9ncmVzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gdGFza0RldGFpbHMuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tzSW5Qcm9ncmVzcyhpblByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbXBsZXRlZFRhc2tzKGNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRhc2tFcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0YXNrczonLCB0YXNrRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IodGFza0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciBsb2FkaW5nIHByb2plY3QgZGV0YWlsczoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIDxwPk5vIHByb2plY3QgZm91bmQ8L3A+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntwcm9qZWN0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPlTDomNoZXM6IHtwcm9qZWN0LnRhc2tzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFza3NMaXN0c0NvbnRhaW5lcic+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RW4gY291cnM6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFza3NJblByb2dyZXNzLm1hcCh0YXNrID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJwcm9qZWN0Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rhc2sudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlRlcm1pbsOpZXM6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkVGFza3MubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cInByb2plY3RSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGFzay50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERldGFpbHM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQcm9qZWN0RGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsInRhc2tzIiwic2V0VGFza3MiLCJ0YXNrc0luUHJvZ3Jlc3MiLCJzZXRUYXNrc0luUHJvZ3Jlc3MiLCJjb21wbGV0ZWRUYXNrcyIsInNldENvbXBsZXRlZFRhc2tzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHJvamVjdERhdGEiLCJkYXRhIiwidGFza1JlcXVlc3RzIiwibWFwIiwidGFza1VybCIsIlByb21pc2UiLCJhbGwiLCJ0YXNrUmVzcG9uc2VzIiwidGFza0RldGFpbHMiLCJyZXMiLCJpblByb2dyZXNzIiwiZmlsdGVyIiwidGFzayIsInN0YXR1cyIsImNvbXBsZXRlZCIsImNhdGNoIiwidGFza0Vycm9yIiwiY29uc29sZSIsInAiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiaDMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projet/[id].js\n"));

/***/ })

});