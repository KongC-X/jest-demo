"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export const fetchData = (fn) => {
//   axios.get('').then((response) => {
//     fn(response.data)
//   })
// }
var fetchData = function fetchData() {
  return _axios["default"].get('');
};

exports.fetchData = fetchData;