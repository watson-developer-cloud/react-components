'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(prop) {
  return _react2.default.createElement(
    'header',
    { className: 'header' },
    _react2.default.createElement(
      'h3',
      { className: 'header--wordmark' },
      prop.wordmark || 'Watson'
    ),
    _react2.default.createElement('div', { className: 'header--spacer' }),
    prop.linkUrl || prop.linkText ? _react2.default.createElement(
      'a',
      { href: prop.linkUrl || '#', className: 'header--link base--a' },
      prop.linkText || 'link text',
      ' ',
      _react2.default.createElement(_Icon2.default, { type: 'right', size: 'small' })
    ) : null
  );
}

Header.propTypes = {
  wordmark: _react2.default.PropTypes.string,
  linkUrl: _react2.default.PropTypes.string,
  linkText: _react2.default.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=Header.js.map
