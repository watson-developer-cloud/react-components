import React from 'react';

export default function Nav() {
  return (
    <header className="top-nav">
      <div className="_container _container_large">
        <div className="top-nav--wordmark">
          <a href="." className="top-nav--wordmark-link">
            Watson Developer Cloud - React Components
          </a>
        </div>
        <div className="top-nav--spacer" />
        <nav role="menubar" className="top-nav--nav">
          <a
            href="https://github.com/watson-developer-cloud/react-components"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="base--a top-nav--nav-li-link"
          >
            <li role="presentation" className="base--li top-nav--nav-li">
              GITHUB
            </li>
          </a>
        </nav>
      </div>
    </header>
  );
}
