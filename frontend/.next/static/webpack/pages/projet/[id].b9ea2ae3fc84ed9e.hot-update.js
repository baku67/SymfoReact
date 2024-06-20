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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/TaskCard */ \"./src/Components/TaskCard.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ProjectDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), project = _useState[0], setProject = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasks = _useState1[0], setTasks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksTodo = _useState2[0], setTasksTodo = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), tasksInProgress = _useState3[0], setTasksInProgress = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), completedTasks = _useState4[0], setCompletedTasks = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    var _useState7 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), selectedTask = _useState7[0], setSelectedTask = _useState7[1];\n    var handleClickTask = function(task) {\n        setSelectedTask(task);\n        console.log(\"click task, selectedTask = \" + selectedTask);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id)).then(function(response) {\n                var projectData = response.data;\n                setProject(projectData);\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/projects/\".concat(id, \"/tasks\")).then(function(taskResponse) {\n                    var tasks = taskResponse.data;\n                    var todo = tasks.filter(function(task) {\n                        return task.status === \"todo\";\n                    });\n                    var inProgress = tasks.filter(function(task) {\n                        return task.status === \"inProgress\";\n                    });\n                    var completed = tasks.filter(function(task) {\n                        return task.status === \"completed\";\n                    });\n                    setTasksTodo(todo);\n                    setTasksInProgress(inProgress);\n                    setCompletedTasks(completed);\n                    setLoading(false);\n                })[\"catch\"](function(taskError) {\n                    console.error(\"Error fetching tasks:\", taskError);\n                    setError(taskError);\n                    setLoading(false);\n                });\n            })[\"catch\"](function(error) {\n                setError(error);\n                setLoading(false);\n            });\n        }\n    }, [\n        id\n    ]);\n    var moveTask = function(task, status) {\n        // Logique pour mettre à jour le statut de la tâche dans la base de données\n        console.log(\"Moving task '\".concat(task.title, \"' to '\").concat(status, \"'\"));\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 69,\n        columnNumber: 25\n    }, _this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error loading project details: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 70,\n        columnNumber: 23\n    }, _this);\n    if (!project) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No project found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 71,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_7__.DndProvider, {\n        backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__.HTML5Backend,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: \"<- Tableau de bord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        project.description\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"T\\xe2ches: \",\n                        project.tasks.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tasksListsContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"A faire:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksTodo.map(function(task) {\n                                        return(// <div key={task.id} className=\"projectRow\">\n                                        //     <span>{task.title}</span>\n                                        // </div>\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            }\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 112,\n                                            columnNumber: 33\n                                        }, _this));\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 107,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"En cours:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: tasksInProgress.map(function(task) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                            task: task,\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            }\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 124,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 120,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tasksLists\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"tasksListsTitle\",\n                                    children: \"Termin\\xe9es:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: completedTasks.map(function(task) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleClickTask(task);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_TaskCard__WEBPACK_IMPORTED_MODULE_4__.TaskCard, {\n                                                task: task\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                                lineNumber: 136,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, task.id, false, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                            lineNumber: 135,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\laragon\\\\www\\\\~~ SymfoReact\\\\SymfoReact\\\\frontend\\\\pages\\\\projet\\\\[id].js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProjectDetails, \"Tt9toMQDKqJ9Miq/I06eTnTGZPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetails);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsU0FBQUE7NkRBRWhCLDhEQUFDcUI7NENBQWtCUSxTQUFTO3VEQUFNOUIsZ0JBQWdCQzs7c0RBQzlDLDRFQUFDdEIsOERBQVFBO2dEQUFDc0IsTUFBTUE7Ozs7OzsyQ0FEVkEsS0FBS25CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakQ7R0ExSU1GOztRQUVhUixrREFBU0E7OztLQUZ0QlE7QUE0SU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamV0L1tpZF0uanM/ODVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IFRhc2tDYXJkIH0gZnJvbSAnLi4vLi4vc3JjL0NvbXBvbmVudHMvVGFza0NhcmQnO1xyXG5cclxuY29uc3QgUHJvamVjdERldGFpbHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YXNrc1RvZG8sIHNldFRhc2tzVG9kb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGFza3NJblByb2dyZXNzLCBzZXRUYXNrc0luUHJvZ3Jlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvbXBsZXRlZFRhc2tzLCBzZXRDb21wbGV0ZWRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFRhc2ssIHNldFNlbGVjdGVkVGFza10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUYXNrKHRhc2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgdGFzaywgc2VsZWN0ZWRUYXNrID0gXCIgKyBzZWxlY3RlZFRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9qZWN0cy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdERhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvamVjdHMvJHtpZH0vdGFza3NgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih0YXNrUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXNrUmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PT0gJ3RvZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluUHJvZ3Jlc3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PT0gJ2luUHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suc3RhdHVzID09PSAnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrc1RvZG8odG9kbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrc0luUHJvZ3Jlc3MoaW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb21wbGV0ZWRUYXNrcyhjb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0YXNrRXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGFza3M6JywgdGFza0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHRhc2tFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcblxyXG4gICAgY29uc3QgbW92ZVRhc2sgPSAodGFzaywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgLy8gTG9naXF1ZSBwb3VyIG1ldHRyZSDDoCBqb3VyIGxlIHN0YXR1dCBkZSBsYSB0w6JjaGUgZGFucyBsYSBiYXNlIGRlIGRvbm7DqWVzXHJcbiAgICAgICAgY29uc29sZS5sb2coYE1vdmluZyB0YXNrICcke3Rhc2sudGl0bGV9JyB0byAnJHtzdGF0dXN9J2ApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIGxvYWRpbmcgcHJvamVjdCBkZXRhaWxzOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gPHA+Tm8gcHJvamVjdCBmb3VuZDwvcD47XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgICAgICAgICB7XCI8LSBUYWJsZWF1IGRlIGJvcmRcIn1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgVGFza0RldGFpbCAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRhc2tEZXRhaWwtbW9kYWxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9qZWN0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+VMOiY2hlczoge3Byb2plY3QudGFza3MubGVuZ3RofTwvcD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2tzTGlzdHNDb250YWluZXInPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzVGl0bGVcIj5BIGZhaXJlOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFza3NUb2RvLm1hcCh0YXNrID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwicHJvamVjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8c3Bhbj57dGFzay50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tUYXNrKHRhc2spfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YXNrc0xpc3RzVGl0bGVcIj5FbiBjb3Vyczo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2tzSW5Qcm9ncmVzcy5tYXAodGFzayA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVGFzayh0YXNrKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza3NMaXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGFza3NMaXN0c1RpdGxlXCI+VGVybWluw6llczo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFRhc2tzLm1hcCh0YXNrID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Rhc2suaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVGFzayh0YXNrKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsczsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiTGluayIsIlRhc2tDYXJkIiwiUHJvamVjdERldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicHJvamVjdCIsInNldFByb2plY3QiLCJ0YXNrcyIsInNldFRhc2tzIiwidGFza3NUb2RvIiwic2V0VGFza3NUb2RvIiwidGFza3NJblByb2dyZXNzIiwic2V0VGFza3NJblByb2dyZXNzIiwiY29tcGxldGVkVGFza3MiLCJzZXRDb21wbGV0ZWRUYXNrcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImhhbmRsZUNsaWNrVGFzayIsInRhc2siLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHJvamVjdERhdGEiLCJkYXRhIiwidGFza1Jlc3BvbnNlIiwidG9kbyIsImZpbHRlciIsInN0YXR1cyIsImluUHJvZ3Jlc3MiLCJjb21wbGV0ZWQiLCJjYXRjaCIsInRhc2tFcnJvciIsIm1vdmVUYXNrIiwidGl0bGUiLCJwIiwibWVzc2FnZSIsImJhY2tlbmQiLCJkaXYiLCJocmVmIiwiaDEiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projet/[id].js\n"));

/***/ })

});