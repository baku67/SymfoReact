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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  background-color: #282c34;\\n\\n  /* opacity: 0;\\n  animation: fadeIn 1s 0s ease forwards; */\\n}\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n#root {\\n  height: 100%;\\n}\\n\\n\\n.App {\\n  text-align: center;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n\\n  color: white;\\n}\\n\\n.backToDashboard-btn {\\n  padding: 6px 8px;\\n  margin: 5px;\\n\\n  background-color: transparent;\\n\\n  border: 0px solid #f1f2f5;\\n  border-radius: 5px;\\n  color: #f1f2f5;\\n}\\n\\n\\nmain {\\n  flex: 1 1;\\n\\n  align-items: center;\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n\\n\\np {margin: 0;}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n\\n.App-header {\\n  /* background-color: #282c34; */\\n  min-height: 10vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n\\n\\n.projectRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.projectRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\\n\\n.taskCard {\\n  cursor: pointer;\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n\\n  transition: all 0.4s;\\n}\\n.taskCard:hover {\\n  transform: scale(0.95);\\n  border-color: #ffffff;\\n}\\n\\n.taskCard-primary {\\n  background-color: gold;\\n}\\n\\n.taskCard-secondary {\\n\\n}\\n\\n.taskCard-completed {\\n  filter: brightness(0.8);\\n\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 15px;\\n}\\n\\n.tasksLists {\\n  padding: 15px;\\n  background-color: #373c47;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  border-radius: 5px;\\n\\n  flex: 1 1;\\n}\\n\\n\\n.taskListHeader {\\n  display: inline-flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: center;\\n\\n  color: #f1f2f5;\\n}\\n\\n.projectPageHeader {\\n  width: 90%;\\n  margin: 15px auto;\\n  background-color: #373c47;\\n  color: #f1f2f5;\\n  padding: 10px 15px;\\n  border-radius: 6px;\\n}\\n\\n.projectPageHeader-title {\\n  margin: 5px auto 10px auto;\\n}\\n\\n\\n.tasksListsContainer {\\n  display: inline-flex;\\n  gap: 10px;\\n  margin: 20px auto;\\n  width: 90%;\\n  position: relative;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  justify-content: center;\\n}\\n\\n.dashboard-sectionTitle {\\n  width: 100%;\\n  text-align: left;\\n}\\n\\n.dashboard-section {\\n  width: 70%;\\n\\n  display: inline-flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n\\n.tasksListsTitle {\\n  margin: 0 0 7px 0;\\n\\n  color: #f1f2f5;\\n}\\n\\n\\n.taskDetail-modal {\\n  position: absolute;\\n  z-index: 99999;\\n\\n  width: 80%;\\n  height: 80%;\\n\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  border-radius: 15px;\\n\\n  border: 1px solid rgb(153, 153, 153);\\n  background-color: rgb(179, 235, 225);\\n}\\n\\n\\n\\n.taskRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.taskRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/App.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,yBAAyB;;EAEzB;0CACwC;AAC1C;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,YAAY;AACd;;;AAGA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;;EAEtB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;;EAEX,6BAA6B;;EAE7B,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;AAChB;;;AAGA;EACE,SAAO;;EAEP,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;AACzB;;;;AAIA,GAAG,SAAS,CAAC;;AAEb;EACE,cAAc;EACd,oBAAoB;AACtB;;;AAGA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;;;AAIA;EACE,UAAU;EACV,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;;EAEzB,oBAAoB;EACpB,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;;EAEzB,oBAAoB;EACpB,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;;EAE7B,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;AAEA;;AAEA;EACE,uBAAuB;;EAEvB,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,wBAAmB;EAAnB,mBAAmB;EACnB,kBAAkB;;EAElB,SAAO;AACT;;;AAGA;EACE,oBAAoB;EACpB,8BAA8B;EAC9B,WAAW;EACX,mBAAmB;;EAEnB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;;AAGA;EACE,oBAAoB;EACpB,SAAS;EACT,iBAAiB;EACjB,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,UAAU;;EAEV,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;AACrB;;;AAGA;EACE,iBAAiB;;EAEjB,cAAc;AAChB;;;AAGA;EACE,kBAAkB;EAClB,cAAc;;EAEd,UAAU;EACV,WAAW;;EAEX,SAAS;EACT,QAAQ;EACR,gCAAgC;;EAEhC,mBAAmB;;EAEnB,oCAAoC;EACpC,oCAAoC;AACtC;;;;AAIA;EACE,UAAU;EACV,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;;EAEzB,oBAAoB;EACpB,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;AAC/B\",\"sourcesContent\":[\"body {\\n  height: 100vh;\\n  background-color: #282c34;\\n\\n  /* opacity: 0;\\n  animation: fadeIn 1s 0s ease forwards; */\\n}\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n#root {\\n  height: 100%;\\n}\\n\\n\\n.App {\\n  text-align: center;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n\\n  color: white;\\n}\\n\\n.backToDashboard-btn {\\n  padding: 6px 8px;\\n  margin: 5px;\\n\\n  background-color: transparent;\\n\\n  border: 0px solid #f1f2f5;\\n  border-radius: 5px;\\n  color: #f1f2f5;\\n}\\n\\n\\nmain {\\n  flex: 1;\\n\\n  align-items: center;\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n\\n\\np {margin: 0;}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n\\n.App-header {\\n  /* background-color: #282c34; */\\n  min-height: 10vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n\\n\\n.projectRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.projectRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\\n\\n.taskCard {\\n  cursor: pointer;\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n\\n  transition: all 0.4s;\\n}\\n.taskCard:hover {\\n  transform: scale(0.95);\\n  border-color: #ffffff;\\n}\\n\\n.taskCard-primary {\\n  background-color: gold;\\n}\\n\\n.taskCard-secondary {\\n\\n}\\n\\n.taskCard-completed {\\n  filter: brightness(0.8);\\n\\n  align-items: center;\\n  justify-content: flex-start;\\n  gap: 15px;\\n}\\n\\n.tasksLists {\\n  padding: 15px;\\n  background-color: #373c47;\\n  height: fit-content;\\n  border-radius: 5px;\\n\\n  flex: 1;\\n}\\n\\n\\n.taskListHeader {\\n  display: inline-flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: center;\\n\\n  color: #f1f2f5;\\n}\\n\\n.projectPageHeader {\\n  width: 90%;\\n  margin: 15px auto;\\n  background-color: #373c47;\\n  color: #f1f2f5;\\n  padding: 10px 15px;\\n  border-radius: 6px;\\n}\\n\\n.projectPageHeader-title {\\n  margin: 5px auto 10px auto;\\n}\\n\\n\\n.tasksListsContainer {\\n  display: inline-flex;\\n  gap: 10px;\\n  margin: 20px auto;\\n  width: 90%;\\n  position: relative;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  justify-content: center;\\n}\\n\\n.dashboard-sectionTitle {\\n  width: 100%;\\n  text-align: left;\\n}\\n\\n.dashboard-section {\\n  width: 70%;\\n\\n  display: inline-flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n\\n.tasksListsTitle {\\n  margin: 0 0 7px 0;\\n\\n  color: #f1f2f5;\\n}\\n\\n\\n.taskDetail-modal {\\n  position: absolute;\\n  z-index: 99999;\\n\\n  width: 80%;\\n  height: 80%;\\n\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  border-radius: 15px;\\n\\n  border: 1px solid rgb(153, 153, 153);\\n  background-color: rgb(179, 235, 225);\\n}\\n\\n\\n\\n.taskRowList {\\n  width: 90%;\\n  background-color: white;\\n  color: black;\\n  margin: 10px;\\n  border-radius: 4px;\\n  text-align: left;\\n  padding: 5px 15px;\\n}\\n\\n.taskRow {\\n  margin: 7px auto;\\n  padding: 15px;\\n  border-radius: 7px;\\n  border: 1px solid #ebdddd;\\n  background-color: #aebaf5;\\n\\n  display: inline-flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: -webkit-fill-available;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvQXBwLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGtCQUFrQiw4QkFBOEIsb0JBQW9CLDJDQUEyQyxLQUFLLHFCQUFxQixVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVksdUJBQXVCLGlCQUFpQixrQkFBa0IsMkJBQTJCLG1CQUFtQixHQUFHLDBCQUEwQixxQkFBcUIsZ0JBQWdCLG9DQUFvQyxnQ0FBZ0MsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksY0FBYywwQkFBMEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsR0FBRyxXQUFXLFdBQVcsZUFBZSxtQkFBbUIseUJBQXlCLEdBQUcsbUJBQW1CLGtDQUFrQyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGtDQUFrQyxpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLHlCQUF5QixlQUFlLDRCQUE0QixpQkFBaUIsaUJBQWlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLEdBQUcsaUJBQWlCLHFCQUFxQixrQkFBa0IsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsMkJBQTJCLHdCQUF3QixtQ0FBbUMsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsMkJBQTJCLEdBQUcs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QUFHLGNBQWMscUJBQXFCLGtCQUFrQix1QkFBdUIsOEJBQThCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQ0FBa0MsR0FBRyxtQkFBbUI7QUFDbHlTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5jc3M/ZTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXG5cXG4gIC8qIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcyAwcyBlYXNlIGZvcndhcmRzOyAqL1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuI3Jvb3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4uQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFja1RvRGFzaGJvYXJkLWJ0biB7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmMWYyZjU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2YxZjJmNTtcXG59XFxuXFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDE7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcblxcbnAge21hcmdpbjogMDt9XFxuXFxuLkFwcC1sb2dvIHtcXG4gIGhlaWdodDogNDB2bWluO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcblxcbi5BcHAtaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7ICovXFxuICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLkFwcC1saW5rIHtcXG4gIGNvbG9yOiAjNjFkYWZiO1xcbn1cXG5cXG5cXG5cXG4ucHJvamVjdFJvd0xpc3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdFJvdyB7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmRkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViYWY1O1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmRkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViYWY1O1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuLnRhc2tDYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50YXNrQ2FyZC1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi50YXNrQ2FyZC1zZWNvbmRhcnkge1xcblxcbn1cXG5cXG4udGFza0NhcmQtY29tcGxldGVkIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2tzTGlzdHMge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNjNDc7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgZmxleDogMSAxO1xcbn1cXG5cXG5cXG4udGFza0xpc3RIZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogI2YxZjJmNTtcXG59XFxuXFxuLnByb2plY3RQYWdlSGVhZGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNjNDc7XFxuICBjb2xvcjogI2YxZjJmNTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnByb2plY3RQYWdlSGVhZGVyLXRpdGxlIHtcXG4gIG1hcmdpbjogNXB4IGF1dG8gMTBweCBhdXRvO1xcbn1cXG5cXG5cXG4udGFza3NMaXN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXNlY3Rpb25UaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kYXNoYm9hcmQtc2VjdGlvbiB7XFxuICB3aWR0aDogNzAlO1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2tzTGlzdHNUaXRsZSB7XFxuICBtYXJnaW46IDAgMCA3cHggMDtcXG5cXG4gIGNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG5cXG4udGFza0RldGFpbC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTtcXG5cXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG5cXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMjM1LCAyMjUpO1xcbn1cXG5cXG5cXG5cXG4udGFza1Jvd0xpc3Qge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udGFza1JvdyB7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmRkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViYWY1O1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10s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Z0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCOztFQUV6QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXG5cXG4gIC8qIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcyAwcyBlYXNlIGZvcndhcmRzOyAqL1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuI3Jvb3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4uQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFja1RvRGFzaGJvYXJkLWJ0biB7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmMWYyZjU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2YxZjJmNTtcXG59XFxuXFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5wIHttYXJnaW46IDA7fVxcblxcbi5BcHAtbG9nbyB7XFxuICBoZWlnaHQ6IDQwdm1pbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG4uQXBwLWhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0OyAqL1xcbiAgbWluLWhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5BcHAtbGluayB7XFxuICBjb2xvcjogIzYxZGFmYjtcXG59XFxuXFxuXFxuXFxuLnByb2plY3RSb3dMaXN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnByb2plY3RSb3cge1xcbiAgbWFyZ2luOiA3cHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYmFmNTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA3cHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlYmFmNTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi50YXNrQ2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udGFza0NhcmQtcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udGFza0NhcmQtc2Vjb25kYXJ5IHtcXG5cXG59XFxuXFxuLnRhc2tDYXJkLWNvbXBsZXRlZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrc0xpc3RzIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYzQ3O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGZsZXg6IDE7XFxufVxcblxcblxcbi50YXNrTGlzdEhlYWRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0NztcXG4gIGNvbG9yOiAjZjFmMmY1O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ucHJvamVjdFBhZ2VIZWFkZXItdGl0bGUge1xcbiAgbWFyZ2luOiA1cHggYXV0byAxMHB4IGF1dG87XFxufVxcblxcblxcbi50YXNrc0xpc3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kYXNoYm9hcmQtc2VjdGlvblRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRhc2hib2FyZC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA3MCU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4udGFza3NMaXN0c1RpdGxlIHtcXG4gIG1hcmdpbjogMCAwIDdweCAwO1xcblxcbiAgY29sb3I6ICNmMWYyZjU7XFxufVxcblxcblxcbi50YXNrRGV0YWlsLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5O1xcblxcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcblxcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc5LCAyMzUsIDIyNSk7XFxufVxcblxcblxcblxcbi50YXNrUm93TGlzdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi50YXNrUm93IHtcXG4gIG1hcmdpbjogN3B4IGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZGRkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWJhZjU7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/App.css\n"));

/***/ })

});