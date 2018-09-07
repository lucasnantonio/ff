webpackHotUpdate(4,{

/***/ "./components/inputContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inputField__ = __webpack_require__("./components/inputField.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_questionChunk__ = __webpack_require__("./components/questionChunk.js");
var _jsxFileName = "/Users/lucasneumanndeantonio/Code/ff/components/inputContainer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var InputContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(InputContainer, _Component);

  function InputContainer(props) {
    var _this;

    _classCallCheck(this, InputContainer);

    _this = _possibleConstructorReturn(this, (InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(InputContainer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "w-100 bg-yellow pa5 overflow-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "f1 b mb6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Bem-vindo \xE0 melhor calculadora de independ\xEAncia financeira da Internet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_questionChunk__["a" /* default */], {
        title: "Vamos come\xE7ar falando sobre voc\xEA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myCurrentAge",
        label: "Quantos anos voc\xEA tem?",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myLifeExpectancy",
        label: "Voc\xEA pretende viver at\xE9 quantos anos?",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_questionChunk__["a" /* default */], {
        title: "Agora, sobre seu dinheiro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myCurrentBalance",
        label: "Quanto voc\xEA tem hoje para come\xE7ar a investir",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myCurrentIncome",
        label: "Quanto voc\xEA ganha hoje por m\xEAs?",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myCurrentMonthlySavings",
        label: "Quanto voc\xEA consegue guardar todo m\xEAs?",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inputField__["a" /* default */], {
        id: "myCurrentMonthlyCost",
        label: "Qual o seu custo de vida atual?",
        handleInput: this.props.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })));
    }
  }]);

  return InputContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (InputContainer);

/***/ })

})
//# sourceMappingURL=4.f6a31edf9ffc3f17e6ec.hot-update.js.map