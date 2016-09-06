import React from 'react';

export default function Footer() {
  return (
    <footer className="_full-width-row bottom-nav-bar">
      <div className="_container _container_xx-large">
        <div className="_full-width-row--aside">
          <div className="footer--icon">
            <img src="images/eight-bar.svg" alt="ibm-logo" />
          </div>
        </div>
        <div className="_full-width-row--main">
          <nav className="bottom-nav-bar--nav">
            <ul className="bottom-nav-bar--nav-ul base--ul base--ul_inline base--ul_no-bullets">
              <li className="bottom-nav-bar--nav-li base--li">
                <a
                  href="http://www.ibm.com/"
                  className="base--a bottom-nav-bar--nav-link"
                  target="_blank" rel="noopener noreferrer"
                >
                  ibm.com
                </a>
              </li>
              <li className="bottom-nav-bar--nav-li base--li">
                <a
                  href="http://www.ibm.com/legal/us/en/"
                  className="base--a bottom-nav-bar--nav-link"
                  target="_blank" rel="noopener noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li className="bottom-nav-bar--nav-li base--li">
                <a
                  href="http://www.ibm.com/privacy/us/en/"
                  className="base--a bottom-nav-bar--nav-link"
                  target="_blank" rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="bottom-nav-bar--nav-li base--li">© 2016 IBM</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

