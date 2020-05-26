webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _s = $RefreshSig$(),
    _jsxFileName = "D:\\work\\next-rendering-example\\cliente-side-rendering\\pages\\index.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var usePokemon = function usePokemon(query) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      pokemons = _React$useState2[0],
      setPokemons = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    var getPokemon = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("/api/search?q=".concat(escape(query))).then(function (res) {
                  return res.json();
                });

              case 2:
                data = _context.sent;
                setPokemons(data.map(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, {
                    image: "/images/".concat(e.id, ".png")
                  });
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getPokemon() {
        return _ref.apply(this, arguments);
      };
    }();

    getPokemon();
  }, [query]);
  return pokemons;
};

_s(usePokemon, "Stk9XwXGyi9TwXhAWSiXSpPuw8Q=");

function Home() {
  _s2();

  var _this = this;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      query = _React$useState4[0],
      setQuery = _React$useState4[1];

  var pokemons = usePokemon(query);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Pokemon"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "Search for a pokemon",
    type: "search",
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, pokemons && pokemons.map(function (pokemon) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: pokemon.id,
      href: "pokemon/".concat(pokemon.name.toLowerCase()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "card clickable",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, __jsx("h3", {
      className: "card--title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, pokemon.name), __jsx("span", {
      className: "card--subtitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, pokemon.type.join(', ')), __jsx("img", {
      src: pokemon.image,
      alt: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    })));
  }))));
}

_s2(Home, "iixLFOu/wDFTYrE5yff+SfBDlR4=", false, function () {
  return [usePokemon];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VQb2tlbW9uIiwicXVlcnkiLCJSZWFjdCIsInVzZVN0YXRlIiwicG9rZW1vbnMiLCJzZXRQb2tlbW9ucyIsInVzZUVmZmVjdCIsImdldFBva2Vtb24iLCJmZXRjaCIsImVzY2FwZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1hcCIsImUiLCJpbWFnZSIsImlkIiwiSG9tZSIsInNldFF1ZXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBva2Vtb24iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ0lDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBREo7QUFBQTtBQUFBLE1BQ3JCQyxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBRzVCSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBTUMsVUFBVTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0VDLEtBQUsseUJBQWtCQyxNQUFNLENBQUNSLEtBQUQsQ0FBeEIsRUFBTCxDQUF3Q1MsSUFBeEMsQ0FBNkMsVUFBQUMsR0FBRztBQUFBLHlCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLGlCQUFoRCxDQURGOztBQUFBO0FBQ1hDLG9CQURXO0FBRWpCUiwyQkFBVyxDQUFDUSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEseURBQ2pCQSxDQURpQjtBQUVwQkMseUJBQUssb0JBQWFELENBQUMsQ0FBQ0UsRUFBZjtBQUZlO0FBQUEsaUJBQVYsQ0FBRCxDQUFYOztBQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWVixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQVFBQSxjQUFVO0FBQ1gsR0FWRCxFQVVHLENBQUNOLEtBQUQsQ0FWSDtBQVlBLFNBQU9HLFFBQVA7QUFDRCxDQWhCRDs7R0FBTUosVTs7QUFtQlMsU0FBU2tCLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSx5QkFDSGhCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBREc7QUFBQTtBQUFBLE1BQ3RCRixLQURzQjtBQUFBLE1BQ2ZrQixRQURlOztBQUU3QixNQUFNZixRQUFRLEdBQUdKLFVBQVUsQ0FBQ0MsS0FBRCxDQUEzQjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsc0JBQW5CO0FBQTBDLFFBQUksRUFBQyxRQUEvQztBQUF3RCxTQUFLLEVBQUVBLEtBQS9EO0FBQXNFLFlBQVEsRUFBRSxrQkFBQW1CLEtBQUs7QUFBQSxhQUFJRCxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVo7QUFBQSxLQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xCLFFBQVEsSUFBSUEsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQVMsT0FBTztBQUFBLFdBQy9CLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ04sRUFBbkI7QUFBdUIsVUFBSSxvQkFBYU0sT0FBTyxDQUFDQyxJQUFSLENBQWFDLFdBQWIsRUFBYixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkYsT0FBTyxDQUFDQyxJQUFyQyxDQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0NELE9BQU8sQ0FBQ0csSUFBUixDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWxDLENBRkYsRUFHRTtBQUFLLFNBQUcsRUFBRUosT0FBTyxDQUFDUCxLQUFsQjtBQUF5QixTQUFHLEVBQUVPLE9BQU8sQ0FBQ0MsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREYsQ0FEK0I7QUFBQSxHQUFwQixDQURmLENBSEYsQ0FORixDQURGO0FBd0JEOztJQTVCdUJOLEk7VUFFTGxCLFU7OztLQUZLa0IsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjg1YjYyMDQ2MjE1Y2VkZjUzMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCB1c2VQb2tlbW9uID0gKHF1ZXJ5KSA9PiB7XHJcbiAgY29uc3QgW3Bva2Vtb25zLCBzZXRQb2tlbW9uc10gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFBva2Vtb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/cT0ke2VzY2FwZShxdWVyeSl9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICAgIHNldFBva2Vtb25zKGRhdGEubWFwKGUgPT4gKHtcclxuICAgICAgICAuLi5lLFxyXG4gICAgICAgIGltYWdlOiBgL2ltYWdlcy8ke2UuaWR9LnBuZ2BcclxuICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2tlbW9uKCk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIHJldHVybiBwb2tlbW9ucztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgcG9rZW1vbnMgPSB1c2VQb2tlbW9uKHF1ZXJ5KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb2tlbW9uPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBwb2tlbW9uXCIgdHlwZT1cInNlYXJjaFwiIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7cG9rZW1vbnMgJiYgcG9rZW1vbnMubWFwKHBva2Vtb24gPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3Bva2Vtb24uaWR9IGhyZWY9e2Bwb2tlbW9uLyR7cG9rZW1vbi5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNsaWNrYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtLXRpdGxlXCI+e3Bva2Vtb24ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC0tc3VidGl0bGVcIj57cG9rZW1vbi50eXBlLmpvaW4oJywgJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24uaW1hZ2V9IGFsdD17cG9rZW1vbi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=