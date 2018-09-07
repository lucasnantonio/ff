webpackHotUpdate(4,{

/***/ "./utils/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toCurrency */
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateRetirementAge;
function toCurrency(value) {
  return "R$ " + Number(value).toFixed(2);
}
function calculateRetirementAge(state) {
  return toCurrency(state.myCurrentIncome * state.myCurrentAge);
}

/***/ })

})
//# sourceMappingURL=4.3d0811c7157b3b58c7a8.hot-update.js.map