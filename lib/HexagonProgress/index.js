'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('./plugins/jquery.hexagonprogress');

var _jquery2 = _interopRequireDefault(_jquery);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HexagonProgress = function HexagonProgress(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? "parent" : _ref$size,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? 0.2 : _ref$value,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0.0 : _ref$startAngle,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === undefined ? null : _ref$lineWidth,
      _ref$lineCap = _ref.lineCap,
      lineCap = _ref$lineCap === undefined ? "round" : _ref$lineCap,
      _ref$clip = _ref.clip,
      clip = _ref$clip === undefined ? false : _ref$clip,
      _ref$background = _ref.background,
      background = _ref$background === undefined ? null : _ref$background,
      _ref$lineBackFill = _ref.lineBackFill,
      lineBackFill = _ref$lineBackFill === undefined ? {
    color: "rgba(0, 0, 0, .1)"
  } : _ref$lineBackFill,
      _ref$lineFrontFill = _ref.lineFrontFill,
      lineFrontFill = _ref$lineFrontFill === undefined ? {
    gradient: ["#fb141d", "#fb0c58"]
  } : _ref$lineFrontFill,
      _ref$animationStartVa = _ref.animationStartValue,
      animationStartValue = _ref$animationStartVa === undefined ? 0 : _ref$animationStartVa,
      _ref$animation = _ref.animation,
      animation = _ref$animation === undefined ? false : _ref$animation,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? _index2.default.hexagon : _ref$style;

  setTimeout(function () {
    console.log((0, _jquery2.default)("#hexagon-02"));
    (0, _jquery2.default)("#hexagon-02").hexagonProgress({
      value: value,
      animation: animation,
      startAngle: startAngle,
      lineWidth: lineWidth,
      lineBackFill: lineBackFill,
      background: background,
      lineFrontFill: lineFrontFill
    });
  }, 50);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { id: 'hexagon-02', className: style })
  );
};
exports.default = HexagonProgress;
module.exports = exports['default'];