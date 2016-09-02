'use strict';

var React = require('react');

var Alert = require('../../Icons/Alert');
var Loading = require('../../Icons/Loading');
var SimilarImage = require('./Image');

function SimilarImages(prop) {
  return React.createElement(
    'div',
    { className: 'similar-images' },
    prop.images || prop.loading || prop.error ? React.createElement(
      'h3',
      { className: 'base--h3 similar-images--title' },
      'Top 100 Similar Images',
      React.createElement(
        'span',
        { className: 'similar-images--sub-title' },
        '(1.5 million image corpus provided by TBD)'
      )
    ) : null,
    prop.images && prop.images.length > 0 ? React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'similar-images--results-container' },
        prop.images.map(function (image) {
          return React.createElement(SimilarImage, { image: image });
        })
      ),
      React.createElement(
        'div',
        { className: 'similar-images--courtesy-message' },
        'Images courtesy of IBM Watson partner',
        React.createElement(
          'a',
          {
            href: 'http://www.ynap.com',
            className: 'base--a similar-images--courtesy-message-link',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'YNAP'
        )
      )
    ) : null,
    prop.loading ? React.createElement(
      'div',
      { className: 'similar-images--loading' },
      React.createElement(
        'div',
        { className: 'loader-container loader-container_small' },
        React.createElement(Loading, null)
      )
    ) : null,
    prop.error ? React.createElement(
      'div',
      null,
      React.createElement(Alert, null),
      React.createElement(
        'p',
        { className: 'base--p service-error--message' },
        prop.error
      )
    ) : null
  );
}

module.exports = SimilarImages;
//# sourceMappingURL=index.js.map
