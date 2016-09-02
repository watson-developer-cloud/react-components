'use strict';

var React = require('react');
var IBMIcon = require('../Icons/IBM');

module.exports = function Footer() {
  return React.createElement(
    'footer',
    { className: '_full-width-row bottom-nav-bar' },
    React.createElement(
      'div',
      { className: '_container _container_xx-large' },
      React.createElement(
        'div',
        { className: '_full-width-row--aside' },
        React.createElement(
          'div',
          { className: 'footer--icon' },
          React.createElement(IBMIcon, null)
        )
      ),
      React.createElement(
        'div',
        { className: '_full-width-row--main' },
        React.createElement(
          'nav',
          { className: 'bottom-nav-bar--nav' },
          React.createElement(
            'ul',
            { className: 'bottom-nav-bar--nav-ul base--ul base--ul_inline base--ul_no-bullets' },
            React.createElement(
              'li',
              { className: 'bottom-nav-bar--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: 'http://www.ibm.com/',
                  className: 'base--a bottom-nav-bar--nav-link',
                  target: '_blank', rel: 'noopener noreferrer'
                },
                'ibm.com'
              )
            ),
            React.createElement(
              'li',
              { className: 'bottom-nav-bar--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: 'http://www.ibm.com/legal/us/en/',
                  className: 'base--a bottom-nav-bar--nav-link',
                  target: '_blank', rel: 'noopener noreferrer'
                },
                'Terms of Use'
              )
            ),
            React.createElement(
              'li',
              { className: 'bottom-nav-bar--nav-li base--li' },
              React.createElement(
                'a',
                {
                  href: 'http://www.ibm.com/privacy/us/en/',
                  className: 'base--a bottom-nav-bar--nav-link',
                  target: '_blank', rel: 'noopener noreferrer'
                },
                'Privacy Policy'
              )
            ),
            React.createElement(
              'li',
              { className: 'bottom-nav-bar--nav-li base--li' },
              '© 2016 IBM'
            )
          )
        )
      )
    )
  );
};
//# sourceMappingURL=index.js.map
