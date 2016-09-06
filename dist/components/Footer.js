"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "_full-width-row bottom-nav-bar" },
    _react2.default.createElement(
      "div",
      { className: "_container _container_xx-large" },
      _react2.default.createElement(
        "div",
        { className: "_full-width-row--aside" },
        _react2.default.createElement(
          "div",
          { className: "footer--icon" },
          _react2.default.createElement("img", { src: "images/eight-bar.svg", alt: "ibm-logo" })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "_full-width-row--main" },
        _react2.default.createElement(
          "nav",
          { className: "bottom-nav-bar--nav" },
          _react2.default.createElement(
            "ul",
            { className: "bottom-nav-bar--nav-ul base--ul base--ul_inline base--ul_no-bullets" },
            _react2.default.createElement(
              "li",
              { className: "bottom-nav-bar--nav-li base--li" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.ibm.com/",
                  className: "base--a bottom-nav-bar--nav-link",
                  target: "_blank", rel: "noopener noreferrer"
                },
                "ibm.com"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "bottom-nav-bar--nav-li base--li" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.ibm.com/legal/us/en/",
                  className: "base--a bottom-nav-bar--nav-link",
                  target: "_blank", rel: "noopener noreferrer"
                },
                "Terms of Use"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "bottom-nav-bar--nav-li base--li" },
              _react2.default.createElement(
                "a",
                {
                  href: "http://www.ibm.com/privacy/us/en/",
                  className: "base--a bottom-nav-bar--nav-link",
                  target: "_blank", rel: "noopener noreferrer"
                },
                "Privacy Policy"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "bottom-nav-bar--nav-li base--li" },
              "© 2016 IBM"
            )
          )
        )
      )
    )
  );
}
module.exports = exports["default"];
//# sourceMappingURL=Footer.js.map
