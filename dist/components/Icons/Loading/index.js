"use strict";

var React = require('react');

function Loading() {
  return React.createElement(
    "svg",
    {
      viewBox: "25 25 50 50",
      className: "loader"
    },
    React.createElement("circle", { cx: "50", cy: "50", r: "20", className: "loader--path" })
  );
}

module.exports = Loading;
//# sourceMappingURL=index.js.map
