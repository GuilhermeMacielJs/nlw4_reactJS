webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: CountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDown", function() { return CountDown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_system_pwd_GITHUB_rocketseat_nlw4_reactJS_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ "./src/styles/components/CountDown.module.css");
/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\system_pwd\\GITHUB\\rocketseat\\nlw4_reactJS\\moveit-next\\src\\components\\CountDown.tsx",
    _s = $RefreshSig$();



var countDownTimeout;
function CountDown() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_system_pwd_GITHUB_rocketseat_nlw4_reactJS_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_system_pwd_GITHUB_rocketseat_nlw4_reactJS_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setTime(0.1 * 60);
    setIsActive(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      type: "button",
      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.startCountDownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "".concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.startCountDownButton, " ").concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButtonActive),
        onClick: resetCountDown,
        children: "Abandonar desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.startCountDownButton,
        onClick: startCountDown,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(CountDown, "zMEuIev5oGYBR6jD/swcyLIfj/8=");

_c = CountDown;

var _c;

$RefreshReg$(_c, "CountDown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudERvd25UaW1lb3V0IiwiQ291bnREb3duIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3RhcnRDb3VudERvd24iLCJyZXNldENvdW50RG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudERvd25Db250YWluZXIiLCJzdGFydENvdW50RG93bkJ1dHRvbiIsImNvdW50RG93bkJ1dHRvbkFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsZ0JBQUo7QUFFTyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsTUFBTSxFQUFQLENBRFI7QUFBQSxNQUNqQkMsSUFEaUI7QUFBQSxNQUNYQyxPQURXOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVqQkcsUUFGaUI7QUFBQSxNQUVQQyxXQUZPOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEtBQUQsQ0FIdEI7QUFBQSxNQUdqQkssV0FIaUI7QUFBQSxNQUdKQyxjQUhJOztBQUt4QixNQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixJQUFJLEdBQUcsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNUyxPQUFPLEdBQUdULElBQUksR0FBRyxFQUF2Qjs7QUFOd0IsOEJBUVVVLE1BQU0sQ0FBQ0osT0FBRCxDQUFOLENBQWdCSyxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FSVjtBQUFBO0FBQUEsTUFRakJDLFVBUmlCO0FBQUEsTUFRTEMsV0FSSzs7QUFBQSwrQkFTVUosTUFBTSxDQUFDRCxPQUFELENBQU4sQ0FBZ0JFLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQVRWO0FBQUE7QUFBQSxNQVNqQkcsVUFUaUI7QUFBQSxNQVNMQyxXQVRLOztBQVd4QixXQUFTQyxjQUFULEdBQTBCO0FBQ3RCZCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0g7O0FBRUQsV0FBU2UsY0FBVCxHQUEwQjtBQUN0QkMsZ0JBQVksQ0FBQ3RCLGdCQUFELENBQVo7QUFDQUksV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBQ0FFLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDSDs7QUFFRGlCLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlsQixRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN0Qkgsc0JBQWdCLEdBQUd3QixVQUFVLENBQUMsWUFBTTtBQUNoQ3BCLGVBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNILE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0gsS0FKRCxNQUtLLElBQUlFLFFBQVEsSUFBSUYsSUFBSSxJQUFJLENBQXhCLEVBQTJCO0FBQzVCSyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIO0FBQ0osR0FWUSxFQVVOLENBQUNELFFBQUQsRUFBV0YsSUFBWCxDQVZNLENBQVQ7QUFZQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFc0IsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPVjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFhS1osV0FBVyxnQkFDUjtBQUFRLGNBQVEsTUFBaEI7QUFBaUIsVUFBSSxFQUFDLFFBQXRCO0FBQStCLGVBQVMsRUFBRWtCLDhFQUFNLENBQUNFLG9CQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURRLGdCQUtKO0FBQUEsZ0JBQ0t0QixRQUFRLGdCQUNMO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsWUFBS29CLDhFQUFNLENBQUNFLG9CQUFaLGNBQW9DRiw4RUFBTSxDQUFDRyxxQkFBM0MsQ0FBL0I7QUFBbUcsZUFBTyxFQUFFUCxjQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGdCQUtEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRUksOEVBQU0sQ0FBQ0Usb0JBQXhDO0FBQThELGVBQU8sRUFBRVAsY0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOWixxQkFsQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7O0dBbEVlbkIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNWNiNTIwN2U1NGI5NTQyMjNkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzJ1xyXG5cclxubGV0IGNvdW50RG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnREb3duKCkge1xyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApXHJcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwXHJcblxyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnREb3duKCkge1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudERvd24oKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50RG93blRpbWVvdXQpXHJcbiAgICAgICAgc2V0VGltZSgwLjEgKiA2MClcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgICBjb3VudERvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSlcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnREb3duQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2hhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnRDb3VudERvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIENpY2xvIGVuY2VycmFkb1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQWN0aXZlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhcnRDb3VudERvd25CdXR0b259ICR7c3R5bGVzLmNvdW50RG93bkJ1dHRvbkFjdGl2ZX1gfSBvbkNsaWNrPXtyZXNldENvdW50RG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGRlc2FmaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ0Q291bnREb3duQnV0dG9ufSBvbkNsaWNrPXtzdGFydENvdW50RG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==