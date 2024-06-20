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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/TaskCard */ \"./src/Components/TaskCard.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProjectDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), project = _useState[0], setProject = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasks = _useState1[0], setTasks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksTodo = _useState2[0], setTasksTodo = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksInProgress = _useState3[0], setTasksInProgress = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), completedTasks = _useState4[0], setCompletedTasks = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    var _useState7 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), selectedTask = _useState7[0], setSelectedTask = _useState7[1];\n    var handleClickTask = function(task) {\n        setSelectedTask(task);\n        console.log(\"click task, selectedTask = \" + selectedTask);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id)).then(function(response) {\n                var projectData = response.data;\n                setProject(projectData);\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id, \"/tasks\")).then(function(taskResponse) {\n                    var tasks = taskResponse.data;\n                    var todo = tasks.filter(function(task) {\n                        return task.status === \"todo\";\n                    });\n                    var inProgress = tasks.filter(function(task) {\n                        return task.status === \"inProgress\";\n                    });\n                    var completed = tasks.filter(function(task) {\n                        return task.status === \"completed\";\n                    });\n                    setTasksTodo(todo);\n                    setTasksInProgress(inProgress);\n                    setCompletedTasks(completed);\n                    setLoading(false);\n                })[\"catch\"](function(taskError) {\n                    console.error(\"Error fetching tasks:\", taskError);\n                    setError(taskError);\n                    setLoading(false);\n                });\n            })[\"catch\"](function(error) {\n                setError(error);\n                setLoading(false);\n            });\n        }\n    }, [\n        id\n    ]);\n    var moveTask = function(task, status) {\n        // Logique pour mettre à jour le statut de la tâche dans la base de données\n        console.log(\"Moving task '\".concat(task.title, \"' to '\").concat(status, \"'\"));\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 69,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error loading project details: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 70,\n        columnNumber: 23\n    }, _this);\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No project found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 71,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_7__.DndProvider, {\n        backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__.HTML5Backend,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"<- Tableau de bord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        project.description\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"T\\xe2ches: \",\n                        project.tasks.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tasksListsContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"A faire:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksTodo.map(function(task) {\n                                        return(// <div key={task.id} className=\"projectRow\">\n                                        //     <span>{task.title}</span>\n                                        // </div>\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            }\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 112,\n                                            columnNumber: 33\n                                        }, _this));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 107,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"En cours:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksInProgress.map(function(task) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                                task: task\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                                lineNumber: 124,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 123,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 120,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"Termin\\xe9es:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: completedTasks.map(function(task) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                                task: task\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                                lineNumber: 137,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 136,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 131,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProjectDetails, \"Tt9toMQDKqJ9Miq/I06eTnTGZPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUIsZUFBZXFDLEdBQUcsQ0FBQzVCLFNBQUFBOzZEQUVoQiw4REFBQ3FCOzRDQUFrQlEsU0FBUzt1REFBTTlCLGdCQUFnQkM7O3NEQUM5Qyw0RUFBQ3RCLDhEQUFRQTtnREFBQ3NCLE1BQU1BOzs7Ozs7MkNBRFZBLEtBQUtuQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2pEO0dBM0lNRjs7UUFFYVIsa0RBQVNBOzs7S0FGdEJRO0FBNklOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2pldC9baWRdLmpzPzg1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBUYXNrQ2FyZCB9IGZyb20gJy4uLy4uL3NyYy9Db21wb25lbnRzL1Rhc2tDYXJkJztcclxuXHJcbmNvbnN0IFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFza3NUb2RvLCBzZXRUYXNrc1RvZG9dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Rhc2tzSW5Qcm9ncmVzcywgc2V0VGFza3NJblByb2dyZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb21wbGV0ZWRUYXNrcywgc2V0Q29tcGxldGVkVGFza3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1Rhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGFzayh0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIHRhc2ssIHNlbGVjdGVkVGFzayA9IFwiICsgc2VsZWN0ZWRUYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvamVjdHMvJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9qZWN0KHByb2plY3REYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2plY3RzLyR7aWR9L3Rhc2tzYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odGFza1Jlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFza1Jlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICd0b2RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpblByb2dyZXNzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5zdGF0dXMgPT09ICdpblByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza3NUb2RvKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza3NJblByb2dyZXNzKGluUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGxldGVkVGFza3MoY29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGFza0Vycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIHRhc2tFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0YXNrRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1vdmVUYXNrID0gKHRhc2ssIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIC8vIExvZ2lxdWUgcG91ciBtZXR0cmUgw6Agam91ciBsZSBzdGF0dXQgZGUgbGEgdMOiY2hlIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNb3ZpbmcgdGFzayAnJHt0YXNrLnRpdGxlfScgdG8gJyR7c3RhdHVzfSdgKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciBsb2FkaW5nIHByb2plY3QgZGV0YWlsczoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIDxwPk5vIHByb2plY3QgZm91bmQ8L3A+O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiPC0gVGFibGVhdSBkZSBib3JkXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1vZGFsIFRhc2tEZXRhaWwgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0YXNrRGV0YWlsLW1vZGFsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxoMT57cHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+RGVzY3JpcHRpb246IHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlTDomNoZXM6IHtwcm9qZWN0LnRhc2tzLmxlbmd0aH08L3A+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrc0xpc3RzQ29udGFpbmVyJz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza3NMaXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFza3NMaXN0c1RpdGxlXCI+QSBmYWlyZTo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2tzVG9kby5tYXAodGFzayA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cInByb2plY3RSb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPHNwYW4+e3Rhc2sudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVGFzayh0YXNrKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza3NMaXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFza3NMaXN0c1RpdGxlXCI+RW4gY291cnM6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrc0luUHJvZ3Jlc3MubWFwKHRhc2sgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBrZXk9e3Rhc2suaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVGFzayh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza3NMaXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFza3NMaXN0c1RpdGxlXCI+VGVybWluw6llczo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFRhc2tzLm1hcCh0YXNrID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Rhc2suaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVGFzayh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsczsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiTGluayIsIlRhc2tDYXJkIiwiUHJvamVjdERldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicHJvamVjdCIsInNldFByb2plY3QiLCJ0YXNrcyIsInNldFRhc2tzIiwidGFza3NUb2RvIiwic2V0VGFza3NUb2RvIiwidGFza3NJblByb2dyZXNzIiwic2V0VGFza3NJblByb2dyZXNzIiwiY29tcGxldGVkVGFza3MiLCJzZXRDb21wbGV0ZWRUYXNrcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImhhbmRsZUNsaWNrVGFzayIsInRhc2siLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHJvamVjdERhdGEiLCJkYXRhIiwidGFza1Jlc3BvbnNlIiwidG9kbyIsImZpbHRlciIsInN0YXR1cyIsImluUHJvZ3Jlc3MiLCJjb21wbGV0ZWQiLCJjYXRjaCIsInRhc2tFcnJvciIsIm1vdmVUYXNrIiwidGl0bGUiLCJwIiwibWVzc2FnZSIsImJhY2tlbmQiLCJkaXYiLCJocmVmIiwiaDEiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projet/[id].js\n"));

/***/ })

});