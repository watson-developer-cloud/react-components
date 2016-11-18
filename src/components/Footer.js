import React from 'react';
import Icon from './Icon';

export default function Footer() {
  return (
    <div>
      <footer className="_full-width-row bottom-nav-bar">
        <div className="_container _container_xx-large">
          <div className="bottom-nav-bar--icon">
            {/* <img src="images/eight-bar.svg" alt="ibm-logo" /> */}
            <Icon type="ibm" size="large" fill="#fff" />
          </div>
          <nav className="bottom-nav-bar--nav">
            <ul className="bottom-nav-bar--nav-ul base--ul base--ul_inline base--ul_no-bullets">
              <li className="bottom-nav-bar--nav-li base--li">
                <a
                  href="http://www.ibm.com/legal/us/en/"
                  className="base--a bottom-nav-bar--nav-link"
                  target="_blank" rel="noopener noreferrer"
                >
                  Terms
                </a>
              </li>
              <li className="bottom-nav-bar--nav-li base--li">
                <a
                  href="http://www.ibm.com/privacy/us/en/"
                  className="base--a bottom-nav-bar--nav-link"
                  target="_blank" rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
