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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/App.css":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/App.css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  background-color: #282c34;\\n\\n  /* opacity: 0;\\n  animation: fadeIn 1s 0s ease forwards; */\\n}\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n#root {\\n  height: 100%;\\n}\\n\\n\\n.App {\\n  text-align: center;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  color: white;\\n\\n  opacity: 0;\\n  animation: fadeIn 0.5s 0s ease forwards;\\n}\\n\\n.main {\\n  opacity: 0;\\n  animation: fadeIn 0.5s 0s ease forwards;\\n}\\n\\n.backToDashboard-btn {\\n  cursor: pointer;\\n  padding: 6px 8px;\\n  margin: 5px;\\n\\n  background-color: transparent;\\n\\n  border: 0px solid #f1f2f5;\\n  border-radius: 5px;\\n  color: #f1f2f5;\\n\\n  transition: all 0.3s;\\n}\\n.backToDashboard-btn:hover {\\n  opacity: 0.8;\\n}\\n\\n\\nmain {\\n  flex: 1 1;\\n\\n  align-items: center;\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n\\n\\np {margin: 0;}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n\\n.App-header {\\n  /* background-color: #282c34; */\\n  min-height: 10vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n\\n\\n.projectRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.projectRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\\n\\n.taskCard {\\n  cursor: pointer;\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n\\n  transition: all 0.4s;\\n}\\n.taskCard:hover {\\n  transform: scale(0.95);\\n  border-color: #ffffff;\\n}\\n\\n.taskCard-primary {\\n  background-color: gold;\\n}\\n\\n.taskCard-secondary {\\n\\n}\\n\\n.taskCard-completed {\\n  filter: brightness(0.8);\\n\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 15px;\\n}\\n\\n.tasksLists {\\n  padding: 15px;\\n  background-color: #373c47;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  border-radius: 5px;\\n\\n  flex: 1 1;\\n}\\n\\n\\n.taskListHeader {\\n  display: inline-flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: center;\\n\\n  color: #f1f2f5;\\n}\\n\\n.projectPageHeader {\\n  width: 90%;\\n  margin: 15px auto;\\n  background-color: #373c47;\\n  color: #f1f2f5;\\n  padding: 10px 15px;\\n  border-radius: 6px;\\n}\\n\\n.projectPageHeader-title {\\n  margin: 5px auto 10px auto;\\n}\\n\\n\\n.tasksListsContainer {\\n  display: inline-flex;\\n  gap: 10px;\\n  margin: 20px auto;\\n  width: 90%;\\n  position: relative;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  justify-content: center;\\n}\\n\\n.dashboard-sectionTitle {\\n  width: 100%;\\n  text-align: left;\\n}\\n\\n.dashboard-section {\\n  width: 70%;\\n\\n  display: inline-flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n\\n.tasksListsTitle {\\n  margin: 0 0 7px 0;\\n\\n  color: #f1f2f5;\\n}\\n\\n\\n.taskDetail-modal {\\n  position: absolute;\\n  z-index: 99999;\\n\\n  width: 80%;\\n  height: 80%;\\n\\n  padding: 15px;\\n\\n  left: 50%;\\n  top: 50%;\\n  \\n\\n  border-radius: 7px;\\n\\n  border: 1px solid rgb(153, 153, 153);\\n  background-color: #282c34;\\n  color: #f1f2f5;\\n\\n  opacity: 0;\\n  transform: translate(-50%, -50%) scale(0.7);\\n  animation: fadeInModal 0.4s ease forwards;\\n}\\n@keyframes fadeInModal {\\n  from {\\n    opacity: 0;\\n    transform: translate(-50%, -50%) scale(0.7);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translate(-50%, -50%) scale(1);\\n  }\\n}\\n\\n.taskDetail-modal-header {\\n  display: inline-flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.taskDetail-modal-closeBtn {\\n  cursor: pointer;\\n  font-size: 1.4em;\\n}\\n\\n\\n\\n.taskRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.taskRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/App.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"body {\\n  height: 100vh;\\n  background-color: #282c34;\\n\\n  /* opacity: 0;\\n  animation: fadeIn 1s 0s ease forwards; */\\n}\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n#root {\\n  height: 100%;\\n}\\n\\n\\n.App {\\n  text-align: center;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  color: white;\\n\\n  opacity: 0;\\n  animation: fadeIn 0.5s 0s ease forwards;\\n}\\n\\n.main {\\n  opacity: 0;\\n  animation: fadeIn 0.5s 0s ease forwards;\\n}\\n\\n.backToDashboard-btn {\\n  cursor: pointer;\\n  padding: 6px 8px;\\n  margin: 5px;\\n\\n  background-color: transparent;\\n\\n  border: 0px solid #f1f2f5;\\n  border-radius: 5px;\\n  color: #f1f2f5;\\n\\n  transition: all 0.3s;\\n}\\n.backToDashboard-btn:hover {\\n  opacity: 0.8;\\n}\\n\\n\\nmain {\\n  flex: 1;\\n\\n  align-items: center;\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n\\n\\np {margin: 0;}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n\\n.App-header {\\n  /* background-color: #282c34; */\\n  min-height: 10vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n\\n\\n.projectRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.projectRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\\n\\n.taskCard {\\n  cursor: pointer;\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n\\n  transition: all 0.4s;\\n}\\n.taskCard:hover {\\n  transform: scale(0.95);\\n  border-color: #ffffff;\\n}\\n\\n.taskCard-primary {\\n  background-color: gold;\\n}\\n\\n.taskCard-secondary {\\n\\n}\\n\\n.taskCard-completed {\\n  filter: brightness(0.8);\\n\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 15px;\\n}\\n\\n.tasksLists {\\n  padding: 15px;\\n  background-color: #373c47;\\n  height: fit-content;\\n  border-radius: 5px;\\n\\n  flex: 1;\\n}\\n\\n\\n.taskListHeader {\\n  display: inline-flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: center;\\n\\n  color: #f1f2f5;\\n}\\n\\n.projectPageHeader {\\n  width: 90%;\\n  margin: 15px auto;\\n  background-color: #373c47;\\n  color: #f1f2f5;\\n  padding: 10px 15px;\\n  border-radius: 6px;\\n}\\n\\n.projectPageHeader-title {\\n  margin: 5px auto 10px auto;\\n}\\n\\n\\n.tasksListsContainer {\\n  display: inline-flex;\\n  gap: 10px;\\n  margin: 20px auto;\\n  width: 90%;\\n  position: relative;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  justify-content: center;\\n}\\n\\n.dashboard-sectionTitle {\\n  width: 100%;\\n  text-align: left;\\n}\\n\\n.dashboard-section {\\n  width: 70%;\\n\\n  display: inline-flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n\\n.tasksListsTitle {\\n  margin: 0 0 7px 0;\\n\\n  color: #f1f2f5;\\n}\\n\\n\\n.taskDetail-modal {\\n  position: absolute;\\n  z-index: 99999;\\n\\n  width: 80%;\\n  height: 80%;\\n\\n  padding: 15px;\\n\\n  left: 50%;\\n  top: 50%;\\n  \\n\\n  border-radius: 7px;\\n\\n  border: 1px solid rgb(153, 153, 153);\\n  background-color: #282c34;\\n  color: #f1f2f5;\\n\\n  opacity: 0;\\n  transform: translate(-50%, -50%) scale(0.7);\\n  animation: fadeInModal 0.4s ease forwards;\\n}\\n@keyframes fadeInModal {\\n  from {\\n    opacity: 0;\\n    transform: translate(-50%, -50%) scale(0.7);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translate(-50%, -50%) scale(1);\\n  }\\n}\\n\\n.taskDetail-modal-header {\\n  display: inline-flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.taskDetail-modal-closeBtn {\\n  cursor: pointer;\\n  font-size: 1.4em;\\n}\\n\\n\\n\\n.taskRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.taskRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvQXBwLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGtCQUFrQiw4QkFBOEIsb0JBQW9CLDJDQUEyQyxLQUFLLHFCQUFxQixVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVksdUJBQXVCLGlCQUFpQixrQkFBa0IsMkJBQTJCLGlCQUFpQixpQkFBaUIsNENBQTRDLEdBQUcsV0FBVyxlQUFlLDRDQUE0QyxHQUFHLDBCQUEwQixvQkFBb0IscUJBQXFCLGdCQUFnQixvQ0FBb0MsZ0NBQWdDLHVCQUF1QixtQkFBbUIsMkJBQTJCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLFlBQVksY0FBYywwQkFBMEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsR0FBRyxXQUFXLFdBQVcsZUFBZSxtQkFBbUIseUJBQXlCLEdBQUcsbUJBQW1CLGtDQUFrQyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGtDQUFrQyxpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLHlCQUF5QixlQUFlLDRCQUE0QixpQkFBaUIsaUJBQWlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHFCQUFxQixrQkFBa0IsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLHdCQUF3QixtQ0FBbUMsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsMkJBQTJCLEdBQUcsbUJBQW1CLDJCQUEyQiwwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcseUJBQXlCLEtBQUsseUJBQXlCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLGNBQWMsR0FBRyxpQkFBaUIsa0JBQWtCLDhCQUE4Qiw2QkFBNkIsd0JBQXdCLHVCQUF1QixnQkFBZ0IsR0FBRyx1QkFBdUIseUJBQXlCLG1DQUFtQyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixlQUFlLHNCQUFzQiw4QkFBOEIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyw4QkFBOEIsK0JBQStCLEdBQUcsNEJBQTRCLHlCQUF5QixjQUFjLHNCQUFzQixlQUFlLHVCQUF1QixjQUFjLGdDQUFnQyw0QkFBNEIsR0FBRyw2QkFBNkIsZ0JBQWdCLHFCQUFxQixHQUFHLHdCQUF3QixlQUFlLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLHNCQUFzQixxQkFBcUIsR0FBRyx5QkFBeUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsYUFBYSw2QkFBNkIsMkNBQTJDLDhCQUE4QixtQkFBbUIsaUJBQWlCLGdEQUFnRCw4Q0FBOEMsR0FBRywwQkFBMEIsVUFBVSxpQkFBaUIsa0RBQWtELEtBQUssUUFBUSxpQkFBaUIsZ0RBQWdELEtBQUssR0FBRyw4QkFBOEIseUJBQXlCLGdCQUFnQixtQ0FBbUMsd0JBQXdCLEdBQUcsZ0NBQWdDLG9CQUFvQixxQkFBcUIsR0FBRyxzQkFBc0IsZUFBZSw0QkFBNEIsaUJBQWlCLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsR0FBRyxPQUFPLDRFQUE0RSxVQUFVLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLHFCQUFxQixLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0NBQWdDLGtCQUFrQiw4QkFBOEIsb0JBQW9CLDJDQUEyQyxLQUFLLHFCQUFxQixVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVksdUJBQXVCLGlCQUFpQixrQkFBa0IsMkJBQTJCLGlCQUFpQixpQkFBaUIsNENBQTRDLEdBQUcsV0FBVyxlQUFlLDRDQUE0QyxHQUFHLDBCQUEwQixvQkFBb0IscUJBQXFCLGdCQUFnQixvQ0FBb0MsZ0NBQWdDLHVCQUF1QixtQkFBbUIsMkJBQTJCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLFlBQVksWUFBWSwwQkFBMEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsR0FBRyxXQUFXLFdBQVcsZUFBZSxtQkFBbUIseUJBQXlCLEdBQUcsbUJBQW1CLGtDQUFrQyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGtDQUFrQyxpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLHlCQUF5QixlQUFlLDRCQUE0QixpQkFBaUIsaUJBQWlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHFCQUFxQixrQkFBa0IsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLHdCQUF3QixtQ0FBbUMsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsMkJBQTJCLEdBQUcsbUJBQW1CLDJCQUEyQiwwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcseUJBQXlCLEtBQUsseUJBQXlCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLGNBQWMsR0FBRyxpQkFBaUIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLGNBQWMsR0FBRyx1QkFBdUIseUJBQXlCLG1DQUFtQyxnQkFBZ0Isd0JBQXdCLHFCQUFxQixHQUFHLHdCQUF3QixlQUFlLHNCQUFzQiw4QkFBOEIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyw4QkFBOEIsK0JBQStCLEdBQUcsNEJBQTRCLHlCQUF5QixjQUFjLHNCQUFzQixlQUFlLHVCQUF1QixjQUFjLGdDQUFnQyw0QkFBNEIsR0FBRyw2QkFBNkIsZ0JBQWdCLHFCQUFxQixHQUFHLHdCQUF3QixlQUFlLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLHNCQUFzQixxQkFBcUIsR0FBRyx5QkFBeUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsYUFBYSw2QkFBNkIsMkNBQTJDLDhCQUE4QixtQkFBbUIsaUJBQWlCLGdEQUFnRCw4Q0FBOEMsR0FBRywwQkFBMEIsVUFBVSxpQkFBaUIsa0RBQWtELEtBQUssUUFBUSxpQkFBaUIsZ0RBQWdELEtBQUssR0FBRyw4QkFBOEIseUJBQXlCLGdCQUFnQixtQ0FBbUMsd0JBQXdCLEdBQUcsZ0NBQWdDLG9CQUFvQixxQkFBcUIsR0FBRyxzQkFBc0IsZUFBZSw0QkFBNEIsaUJBQWlCLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsR0FBRyxtQkFBbUI7QUFDdGhXO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5jc3M/ZTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXG5cXG4gIC8qIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcyAwcyBlYXNlIGZvcndhcmRzOyAqL1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuI3Jvb3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4uQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgMHMgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLm1haW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgMHMgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLmJhY2tUb0Rhc2hib2FyZC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIG1hcmdpbjogNXB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBib3JkZXI6IDBweCBzb2xpZCAjZjFmMmY1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmMWYyZjU7XFxuXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmJhY2tUb0Rhc2hib2FyZC1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDEgMTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxucCB7bWFyZ2luOiAwO31cXG5cXG4uQXBwLWxvZ28ge1xcbiAgaGVpZ2h0OiA0MHZtaW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuXFxuLkFwcC1oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDsgKi9cXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uQXBwLWxpbmsge1xcbiAgY29sb3I6ICM2MWRhZmI7XFxufVxcblxcblxcblxcbi5wcm9qZWN0Um93TGlzdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0Um93IHtcXG4gIG1hcmdpbjogN3B4IGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZGRkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWJhZjU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuLnRhc2tDYXJkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogN3B4IGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZGRkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWJhZjU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG5cXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG4udGFza0NhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnRhc2tDYXJkLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLnRhc2tDYXJkLXNlY29uZGFyeSB7XFxuXFxufVxcblxcbi50YXNrQ2FyZC1jb21wbGV0ZWQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFza3NMaXN0cyB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0NztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBmbGV4OiAxIDE7XFxufVxcblxcblxcbi50YXNrTGlzdEhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0NztcXG4gIGNvbG9yOiAjZjFmMmY1O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXItdGl0bGUge1xcbiAgbWFyZ2luOiA1cHggYXV0byAxMHB4IGF1dG87XFxufVxcblxcblxcbi50YXNrc0xpc3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kYXNoYm9hcmQtc2VjdGlvblRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRhc2hib2FyZC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA3MCU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFza3NMaXN0c1RpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDdweCAwO1xcblxcbiAgY29sb3I6ICNmMWYyZjU7XFxufVxcblxcblxcbi50YXNrRGV0YWlsLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcblxcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgcGFkZGluZzogMTVweDtcXG5cXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgXFxuXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xcbiAgY29sb3I6ICNmMWYyZjU7XFxuXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43KTtcXG4gIGFuaW1hdGlvbjogZmFkZUluTW9kYWwgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbk1vZGFsIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLnRhc2tEZXRhaWwtbW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0RldGFpbC1tb2RhbC1jbG9zZUJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5cXG5cXG4udGFza1Jvd0xpc3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udGFza1JvdyB7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmRkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViYWY1O1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7O0VBRXpCOzBDQUN3QztBQUMxQztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZOztFQUVaLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLDZCQUE2Qjs7RUFFN0IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjOztFQUVkLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFNBQU87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OEI7RUFDOUIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XFxuXFxuICAvKiBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgMHMgZWFzZSBmb3J3YXJkczsgKi9cXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbiNyb290IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuLkFwcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIDBzIGVhc2UgZm9yd2FyZHM7XFxufVxcblxcbi5tYWluIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIDBzIGVhc2UgZm9yd2FyZHM7XFxufVxcblxcbi5iYWNrVG9EYXNoYm9hcmQtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBtYXJnaW46IDVweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgYm9yZGVyOiAwcHggc29saWQgI2YxZjJmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZjFmMmY1O1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5iYWNrVG9EYXNoYm9hcmQtYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5wIHttYXJnaW46IDA7fVxcblxcbi5BcHAtbG9nbyB7XFxuICBoZWlnaHQ6IDQwdm1pbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG4uQXBwLWhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0OyAqL1xcbiAgbWluLWhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5BcHAtbGluayB7XFxuICBjb2xvcjogIzYxZGFmYjtcXG59XFxuXFxuXFxuXFxuLnByb2plY3RSb3dMaXN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnByb2plY3RSb3cge1xcbiAgbWFyZ2luOiA3cHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYmFmNTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA3cHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYmFmNTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi50YXNrQ2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udGFza0NhcmQtcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udGFza0NhcmQtc2Vjb25kYXJ5IHtcXG5cXG59XFxuXFxuLnRhc2tDYXJkLWNvbXBsZXRlZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrc0xpc3RzIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYzQ3O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcblxcbi50YXNrTGlzdEhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0NztcXG4gIGNvbG9yOiAjZjFmMmY1O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXItdGl0bGUge1xcbiAgbWFyZ2luOiA1cHggYXV0byAxMHB4IGF1dG87XFxufVxcblxcblxcbi50YXNrc0xpc3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kYXNoYm9hcmQtc2VjdGlvblRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRhc2hib2FyZC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA3MCU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFza3NMaXN0c1RpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDdweCAwO1xcblxcbiAgY29sb3I6ICNmMWYyZjU7XFxufVxcblxcblxcbi50YXNrRGV0YWlsLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcblxcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgcGFkZGluZzogMTVweDtcXG5cXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgXFxuXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xcbiAgY29sb3I6ICNmMWYyZjU7XFxuXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43KTtcXG4gIGFuaW1hdGlvbjogZmFkZUluTW9kYWwgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbk1vZGFsIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLnRhc2tEZXRhaWwtbW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0RldGFpbC1tb2RhbC1jbG9zZUJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG5cXG5cXG5cXG4udGFza1Jvd0xpc3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udGFza1JvdyB7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmRkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViYWY1O1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/App.css\n"));

/***/ })

});