'use strict';

var React = require('react');

function Plus(props) {
  var fill = props.fill || '#000';
  var width = props.width || '1rem';
  var height = props.height || '1rem';
  return React.createElement(
    'svg',
    {
      x: '0px',
      y: '0px',
      viewBox: '0 0 32 32',
      enableBackground: 'new 0 0 32 32',
      width: width,
      height: height
    },
    React.createElement(
      'g',
      null,
      React.createElement('path', {
        fill: fill,
        d: 'M17,9h-2v6H9v2h6v6h2v-6h6v-2h-6V9z'
      }),
      React.createElement('path', {
        fill: fill,
        d: 'M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12 S22.6,28,16,28z'
      })
    )
  );
}

Plus.propTypes = {
  fill: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

module.exports = Plus;
//# sourceMappingURL=index.js.map
