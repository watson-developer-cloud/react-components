"use strict";

var React = require('react');

function Image(prop) {
  return React.createElement(
    "div",
    { className: "similar-images--tile" },
    React.createElement(
      "div",
      { className: "similar-images--tile-image-container" },
      React.createElement(
        "div",
        { className: "content" },
        React.createElement("img", {
          className: "similar-images--tile-image",
          src: prop.image_file || 'images/sample-image.jpg',
          alt: prop.image_id
        })
      )
    ),
    React.createElement(
      "div",
      { className: "similar-images--graph" },
      React.createElement(
        "div",
        { className: "similar-images--graph-bar" },
        React.createElement("div", {
          className: "similar-images--graph-percent",
          style: "width: 84%"
        })
      ),
      React.createElement(
        "div",
        { className: "similar-images--label" },
        "0.84"
      )
    )
  );
}

Image.propTypes = {
  image_file: React.PropTypes.string.isRequired,
  image_id: React.PropTypes.string.isRequired
};

module.exports = Image;
//# sourceMappingURL=index.js.map
