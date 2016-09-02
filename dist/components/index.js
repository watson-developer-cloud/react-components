'use strict';

var React = require('react');

var Header = require('./Header');
// const Footer = require('./Footer');
var Jumbotron = require('./Jumbotron');
var App = require('./App');

module.exports = function Index() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Jumbotron, {
      serviceName: 'Similarity Search',
      repository: 'https://github.ibm.com/watson-developer-cloud/similarity-search-nodejs',
      docLink: 'https://www.ibm.com/watson/developercloud/doc/visual-recognition/',
      apiReferenceLink: 'https://www.ibm.com/watson/developercloud/visual-recognition/api/v3',
      version: 'Beta',
      serviceIcon: '/images/service-icon.png',
      description: 'Visual Recognition uses deep learning algorithms to analyze images for \u0003scenes, objects, faces, text, and other subjects.'
    }),
    React.createElement(App, null)
  );
};
//# sourceMappingURL=index.js.map
