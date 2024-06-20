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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/TaskCard */ \"./src/Components/TaskCard.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProjectDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), project = _useState[0], setProject = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasks = _useState1[0], setTasks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksTodo = _useState2[0], setTasksTodo = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksInProgress = _useState3[0], setTasksInProgress = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), completedTasks = _useState4[0], setCompletedTasks = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    var _useState7 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), selectedTask = _useState7[0], setSelectedTask = _useState7[1];\n    var handleClickTask = function(task) {};\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id)).then(function(response) {\n                var projectData = response.data;\n                setProject(projectData);\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id, \"/tasks\")).then(function(taskResponse) {\n                    var tasks = taskResponse.data;\n                    var todo = tasks.filter(function(task) {\n                        return task.status === \"todo\";\n                    });\n                    var inProgress = tasks.filter(function(task) {\n                        return task.status === \"inProgress\";\n                    });\n                    var completed = tasks.filter(function(task) {\n                        return task.status === \"completed\";\n                    });\n                    setTasksTodo(todo);\n                    setTasksInProgress(inProgress);\n                    setCompletedTasks(completed);\n                    setLoading(false);\n                })[\"catch\"](function(taskError) {\n                    console.error(\"Error fetching tasks:\", taskError);\n                    setError(taskError);\n                    setLoading(false);\n                });\n            })[\"catch\"](function(error) {\n                setError(error);\n                setLoading(false);\n            });\n        }\n    }, [\n        id\n    ]);\n    var moveTask = function(task, status) {\n        // Logique pour mettre à jour le statut de la tâche dans la base de données\n        console.log(\"Moving task '\".concat(task.title, \"' to '\").concat(status, \"'\"));\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 68,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error loading project details: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 69,\n        columnNumber: 23\n    }, _this);\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No project found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 70,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_7__.DndProvider, {\n        backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__.HTML5Backend,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"<- Tableau de bord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"taskDetail-modal\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        project.description\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"T\\xe2ches: \",\n                        project.tasks.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tasksListsContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"A faire:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksTodo.map(function(task) {\n                                        return(// <div key={task.id} className=\"projectRow\">\n                                        //     <span>{task.title}</span>\n                                        // </div>\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: handleClickTask(task)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 111,\n                                            columnNumber: 33\n                                        }, _this));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"En cours:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksInProgress.map(function(task) {\n                                        return(// <div key={task.id} className=\"projectRow\">\n                                        //     <span>{task.title}</span>\n                                        // </div>\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: handleClickTask(task)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 124,\n                                            columnNumber: 33\n                                        }, _this));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"Termin\\xe9es:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: completedTasks.map(function(task) {\n                                        return(// <div key={task.id} className=\"projectRow\">\n                                        //     <span>{task.title}</span>\n                                        // </div>\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: handleClickTask(task)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 137,\n                                            columnNumber: 33\n                                        }, _this));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProjectDetails, \"Tt9toMQDKqJ9Miq/I06eTnTGZPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDNUIsU0FBQUE7K0NBQ2hCLDZDQUE2Qzt3Q0FDN0MsZ0NBQWdDO3dDQUNoQyxTQUFTO3NEQUNULDhEQUFDdEIsOERBQVFBOzRDQUFlc0IsTUFBTUE7NENBQU02QixTQUFTOUIsZ0JBQWdCQzsyQ0FBOUNBLEtBQUtuQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3REO0dBeklNRjs7UUFFYVIsa0RBQVNBOzs7S0FGdEJRO0FBMklOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2pldC9baWRdLmpzPzg1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBUYXNrQ2FyZCB9IGZyb20gJy4uLy4uL3NyYy9Db21wb25lbnRzL1Rhc2tDYXJkJztcclxuXHJcbmNvbnN0IFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFza3NUb2RvLCBzZXRUYXNrc1RvZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Rhc2tzSW5Qcm9ncmVzcywgc2V0VGFza3NJblByb2dyZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb21wbGV0ZWRUYXNrcywgc2V0Q29tcGxldGVkVGFza3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1Rhc2sgPSAodGFzaykgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvamVjdHMvJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3REYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2plY3RzLyR7aWR9L3Rhc2tzYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odGFza1Jlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFza1Jlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICd0b2RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpblByb2dyZXNzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICdpblByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza3NUb2RvKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza3NJblByb2dyZXNzKGluUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGxldGVkVGFza3MoY29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGFza0Vycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIHRhc2tFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0YXNrRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1vdmVUYXNrID0gKHRhc2ssIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIC8vIExvZ2lxdWUgcG91ciBtZXR0cmUgw6Agam91ciBsZSBzdGF0dXQgZGUgbGEgdMOiY2hlIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNb3ZpbmcgdGFzayAnJHt0YXNrLnRpdGxlfScgdG8gJyR7c3RhdHVzfSdgKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciBsb2FkaW5nIHByb2plY3QgZGV0YWlsczoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIDxwPk5vIHByb2plY3QgZm91bmQ8L3A+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiPC0gVGFibGVhdSBkZSBib3JkXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1vZGFsIFRhc2tEZXRhaWwgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tEZXRhaWwtbW9kYWxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb2plY3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Uw6JjaGVzOiB7cHJvamVjdC50YXNrcy5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFza3NMaXN0c0NvbnRhaW5lcic+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tzTGlzdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRhc2tzTGlzdHNUaXRsZVwiPkEgZmFpcmU6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrc1RvZG8ubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJwcm9qZWN0Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxzcGFuPnt0YXNrLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza0NhcmQga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNsaWNrPXtoYW5kbGVDbGlja1Rhc2sodGFzayl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tzTGlzdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRhc2tzTGlzdHNUaXRsZVwiPkVuIGNvdXJzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFza3NJblByb2dyZXNzLm1hcCh0YXNrID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwicHJvamVjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8c3Bhbj57dGFzay50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DbGljaz17aGFuZGxlQ2xpY2tUYXNrKHRhc2spfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzVGl0bGVcIj5UZXJtaW7DqWVzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkVGFza3MubWFwKHRhc2sgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJwcm9qZWN0Um93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxzcGFuPnt0YXNrLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza0NhcmQga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNsaWNrPXtoYW5kbGVDbGlja1Rhc2sodGFzayl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsczsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiTGluayIsIlRhc2tDYXJkIiwiUHJvamVjdERldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicHJvamVjdCIsInNldFByb2plY3QiLCJ0YXNrcyIsInNldFRhc2tzIiwidGFza3NUb2RvIiwic2V0VGFza3NUb2RvIiwidGFza3NJblByb2dyZXNzIiwic2V0VGFza3NJblByb2dyZXNzIiwiY29tcGxldGVkVGFza3MiLCJzZXRDb21wbGV0ZWRUYXNrcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImhhbmRsZUNsaWNrVGFzayIsInRhc2siLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJwcm9qZWN0RGF0YSIsImRhdGEiLCJ0YXNrUmVzcG9uc2UiLCJ0b2RvIiwiZmlsdGVyIiwic3RhdHVzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZCIsImNhdGNoIiwidGFza0Vycm9yIiwiY29uc29sZSIsIm1vdmVUYXNrIiwibG9nIiwidGl0bGUiLCJwIiwibWVzc2FnZSIsImJhY2tlbmQiLCJkaXYiLCJocmVmIiwiY2xhc3NOYW1lIiwiaDEiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImgzIiwibWFwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projet/[id].js\n"));

/***/ })

});