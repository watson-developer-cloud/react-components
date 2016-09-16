import React from 'react';
import Icon from './Icon';

export default function Header(prop) {
  return (
    <header className="header">
      <h3 className="header--wordmark">{prop.wordmark || 'Watson'}</h3>
      <div className="header--spacer" />
      { prop.linkUrl || prop.linkText ? (
        <a href={prop.linkUrl || '#'} className="header--link base--a">
          {prop.linkText || 'link text'}&nbsp;
          <Icon type="right" size="small" />
        </a>
      ) : null }
    </header>
  );
}

Header.propTypes = {
  wordmark: React.PropTypes.string,
  linkUrl: React.PropTypes.string,
  linkText: React.PropTypes.string,
};
