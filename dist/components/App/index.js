'use strict';

var React = require('react');
var Input = require('./Input');
var Up = require('../Icons/Up');
var SimilarImages = require('./SimilarImages');

var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return { data: null, error: null };
  },
  onClassify: function onClassify() {},
  render: function render() {
    return React.createElement(
      'section',
      { className: '_full-width-row home' },
      React.createElement(
        'div',
        { className: '_container _container_xx-large' },
        React.createElement('div', { className: '_full-width-row--aside' }),
        React.createElement(
          'div',
          { className: '_full-width-row--main' },
          React.createElement(Input, null),
          React.createElement(SimilarImages, null)
        )
      ),
      React.createElement(
        'div',
        { className: 'similar-images--back-to-top' },
        React.createElement(Up, null)
      )
    );
  }
});

module.exports = App;
//# sourceMappingURL=index.js.map
