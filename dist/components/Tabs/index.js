'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      selected: props.selected,
      children: []
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleClick',
    value: function handleClick(index, event) {
      event.preventDefault();
      this.setState({ selected: index });
    }
  }, {
    key: 'renderTitles',
    value: function renderTitles() {
      function labels(child, index) {
        var activeClass = this.state.selected === index ? 'active' : '';
        return _react2.default.createElement(
          'li',
          { className: 'tab-panels--tab-list-item base--li', role: 'presentation', key: index },
          _react2.default.createElement(
            'a',
            {
              href: '#' + child.props.label.replace(/ /g, '-').toLowerCase(),
              className: activeClass + ' tab-panels--tab base--a'
              // eslint-disable-next-line
              , onClick: this.handleClick.bind(this, index),
              role: 'tab'
            },
            child.props.label
          )
        );
      }
      return _react2.default.createElement(
        'ul',
        { className: 'tab-panels--tab-list', role: 'tablist' },
        this.props.children.map(labels.bind(this))
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2.default.createElement(
        'div',
        { className: 'tab-panels--tab-content' },
        this.props.children[this.state.selected]
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'tab-panels', role: 'tabpanel' },
        this.renderTitles(),
        this.renderContent()
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  selected: _react.PropTypes.number,
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element]).isRequired
};
Tabs.defaultProps = {
  selected: 0,
  children: []
};
exports.default = Tabs;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
