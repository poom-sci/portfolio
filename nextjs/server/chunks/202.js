exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH || 'https://grable-pro-default-rtdb.firebaseio.com'
  }; // Create instance

  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create(defaultOptions); // Set the AUTH token for any request
  // instance.interceptors.request.use((config) => {
  //   const token = localStorage.getItem('token');
  //   // eslint-disable-next-line no-param-reassign
  //   config.headers.Authorization = token ? `Bearer ${token}` : '';
  //   return config;
  // });

  return instance;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchClient());

/***/ }),

/***/ 4042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7893);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const spinner = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().sk),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc1)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc2)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc3)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc4)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc5)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc6)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc7)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc8)].join(' ')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: [(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc), (_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().skc9)].join(' ')
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spinner);

/***/ }),

/***/ 7893:
/***/ ((module) => {

// Exports
module.exports = {
	"sk": "Spinner_sk__23Y3N",
	"skc": "Spinner_skc__17-gp",
	"skcGridScaleDelay": "Spinner_skcGridScaleDelay__3zVcr",
	"skc1": "Spinner_skc1__3-zxm",
	"skc2": "Spinner_skc2__a1xk6",
	"skc3": "Spinner_skc3__Q_z9Q",
	"skc4": "Spinner_skc4__1vw_G",
	"skc5": "Spinner_skc5__1E3i4",
	"skc6": "Spinner_skc6__4XrVG",
	"skc7": "Spinner_skc7__1qESX",
	"skc8": "Spinner_skc8__25Ec2",
	"skc9": "Spinner_skc9__21Dti"
};


/***/ })

};
;