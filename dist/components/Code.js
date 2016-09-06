'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPrism = require('react-prism');

require('prismjs/prism.js');

require('prismjs/components/prism-jsx.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeBlock = function (_React$Component) {
  _inherits(CodeBlock, _React$Component);

  function CodeBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).call.apply(_ref, [this].concat(args))), _this), _this.types = {
      js: 'javascript',
      jsx: 'jsx',
      json: 'json',
      html: 'html',
      markup: 'markup'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeBlock, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'code-block--code' },
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            _reactPrism.PrismCode,
            { className: 'base--pre prism language-' + this.types[this.props.type] },
            this.props.children
          )
        )
      );
    }
  }]);

  return CodeBlock;
}(_react2.default.Component);

CodeBlock.propTypes = {
  children: _react.PropTypes.string,
  type: _react.PropTypes.string
};
CodeBlock.defaultProps = {
  type: 'js'
};
exports.default = CodeBlock;
module.exports = exports['default'];
//# sourceMappingURL=Code.js.map
