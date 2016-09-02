'use strict';

var React = require('react');

function Pane(props) {
  return React.createElement(
    'div',
    null,
    props.children
  );
}

Pane.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

module.exports = Pane;
//# sourceMappingURL=index.js.map
