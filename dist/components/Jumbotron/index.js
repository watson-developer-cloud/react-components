'use strict';

var React = require('react');

var Left = require('../Icons/Left');
var Link = require('../Icons/Link');

function Jumbotron(props) {
  return React.createElement(
    'section',
    { className: '_full-width-row _full-width-row_gray header' },
    React.createElement(
      'div',
      { className: 'go-back' },
      React.createElement(Left, null),
      React.createElement(
        'a',
        { href: '#go-back', className: 'base--a go-back--link' },
        React.createElement(
          'span',
          { className: 'go-back--link-span' },
          'Visual Recognition'
        )
      )
    ),
    React.createElement(
      'div',
      { className: '_container _container_xx-large' },
      React.createElement(
        'div',
        { className: '_full-width-row--aside' },
        React.createElement(
          'div',
          { className: 'header--icon' },
          React.createElement('img', {
            className: 'header--icon-image',
            src: props.serviceIcon,
            alt: props.serviceName
          })
        )
      ),
      React.createElement(
        'div',
        { className: '_full-width-row--main' },
        React.createElement(
          'div',
          { className: 'header--heading-section' },
          React.createElement(
            'h2',
            { className: 'base--h2 header--header' },
            props.serviceName,
            props.version !== 'GA' ? React.createElement(
              'span',
              { className: 'header--version-tag' },
              props.version
            ) : null
          ),
          React.createElement(
            'p',
            { className: 'base--p header--description description' },
            props.description
          )
        ),
        React.createElement(
          'nav',
          { className: 'header--nav' },
          React.createElement(
            'h5',
            { className: 'base--h5 header--get-started' },
            React.createElement(Link, null),
            React.createElement(
              'span',
              { className: 'header--get-started-span' },
              'Get Started'
            )
          ),
          React.createElement(
            'ul',
            { className: 'header--nav-ul base--ul base--ul_inline base--ul_no-bullets' },
            React.createElement(
              'li',
              { className: 'header--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: props.apiReferenceLink,
                  className: 'base--a header--nav-link',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'API Reference'
              )
            ),
            React.createElement(
              'li',
              { className: 'header--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: props.docLink,
                  className: 'base--a header--nav-link',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'Documentation'
              )
            ),
            React.createElement(
              'li',
              { className: 'header--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: props.repository,
                  className: 'base--a header--nav-link',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'Fork on GitHub'
              )
            )
          )
        )
      )
    )
  );
}

Jumbotron.propTypes = {
  docLink: React.PropTypes.string.isRequired,
  version: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string.isRequired,
  serviceIcon: React.PropTypes.string.isRequired,
  apiReferenceLink: React.PropTypes.string.isRequired,
  repository: React.PropTypes.string.isRequired
};

module.exports = Jumbotron;
//# sourceMappingURL=index.js.map
