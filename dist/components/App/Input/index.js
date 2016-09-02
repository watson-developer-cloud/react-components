'use strict';

var React = require('react');

var Plus = require('../../Icons/Plus');

function Input(prop) {
  var images = prop.images || ['/images/sample-image.jpg', '/images/sample-image.jpg', '/images/sample-image.jpg', '/images/sample-image.jpg'];

  return React.createElement(
    'div',
    { className: 'input--section' },
    React.createElement(
      'h3',
      { className: 'base--h3 input--title' },
      'Let\'s go shopping'
    ),
    images.map(function (image) {
      return React.createElement(
        'div',
        { className: 'input--tile' },
        React.createElement(
          'div',
          { className: 'input--tile-image-container' },
          React.createElement(
            'div',
            { className: 'content' },
            React.createElement('img', {
              className: 'input--tile-image',
              src: image,
              alt: 'Sample input'
            })
          )
        )
      );
    }),
    React.createElement(
      'div',
      { className: 'input--tile' },
      React.createElement(
        'div',
        { className: 'input--tile-input-container' },
        React.createElement(
          'div',
          { className: 'content' },
          React.createElement(
            'div',
            { className: 'input--tile-input-description' },
            'Select an image relative to the shopping category'
          ),
          React.createElement(
            'div',
            { className: 'input--tile-input-icon' },
            React.createElement(Plus, null)
          )
        )
      ),
      React.createElement('input', {
        className: 'input--url-input base--input',
        type: 'text',
        placeholder: 'Paste an image URL'
      })
    )
  );
}

module.exports = Input;
//# sourceMappingURL=index.js.map
