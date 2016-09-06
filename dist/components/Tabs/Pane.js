'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pane;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pane(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.children
  );
}

Pane.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  children: _react2.default.PropTypes.element.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=Pane.js.map
