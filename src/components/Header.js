/* eslint max-len:off */
import React from 'react';
import sizes from './Sizes';

export default function Header(prop) {
  return (
    <header className="header">
      {prop.hasWordmark ? (
        <div className="header--wordmark">
          <a href="/" className="header--wordmark-link">
            <svg className="header--wordmark-svg" xmlns="http://www.w3.org/2000/svg" width="365.7" height="73.4" viewBox="0 0 365.7 73.4">
              <path
                d="M355.6 13.1h-2.4v6.8h-1.3v-6.8h-2.4v-1h6.2v1zm10.2 6.8h-1.3v-6.5l-2.6 6.5h-.9l-2.6-6.5v6.5h-1.3v-7.8h2l2.3 5.9 2.3-5.9h2v7.8zM75.2 72H59.5L47.3 23h-.2l-12 49h-16L0 0h15.8l11.4 49h.2L39.9 0h14.8L67 49.6h.2L79.1 0h15.5L75.2 72zm19.2-36.1c.8-13.3 12.8-17.4 24.5-17.4 10.4 0 22.9 2.3 22.9 14.8v27.1c0 4.7.5 9.5 1.8 11.6h-14.5c-.5-1.6-.9-3.3-1-5-4.5 4.7-11.1 6.4-17.6 6.4-10 0-17.7-4.9-17.7-15.6.2-23.7 35.3-11 34.7-22.7 0-6.1-4.2-7.1-9.3-7.1-5.5 0-9 2.2-9.5 7.9H94.4zm33.1 10.6c-2.4 2.1-7.5 2.2-11.9 3-4.4.8-8.5 2.4-8.5 7.7s4.1 6.7 8.8 6.7c11.2 0 11.6-8.8 11.6-12v-5.4zm41.9-26.6h10.5v9.6h-10.5v25.8c0 4.8 1.2 6.1 6 6.1 1.6 0 3.1-.1 4.4-.4v11.2c-2.4.4-5.5.5-8.4.5-8.9 0-16.4-1.9-16.4-12.4V29.4h-8.7v-9.6h8.7V4.2h14.3v15.7zm29 35.2c0 6.2 5.4 8.8 11 8.8 4 0 9.4-1.6 9.4-6.7 0-4.3-6.1-6-16.2-8.1-8.4-1.9-16.5-4.6-16.5-13.9 0-13.3 11.5-16.7 22.7-16.7 11.3 0 21.9 3.8 23 16.6H218c-.4-5.5-4.6-7.1-9.8-7.1-3.2 0-8 .5-8 4.8 0 5.1 8.2 5.8 16.2 7.8 8.4 1.9 16.5 4.9 16.5 14.6 0 13.7-12 18.1-23.8 18.1-12.1 0-24-4.5-24.5-18.3h13.8zm66.4-36.6c16.4 0 27 10.9 27 27.5 0 16.5-10.6 27.4-27 27.4-16.3 0-26.9-10.9-26.9-27.4 0-16.7 10.6-27.5 26.9-27.5zm0 44.1c9.8 0 12.7-8.3 12.7-16.6s-2.9-16.7-12.7-16.7c-9.7 0-12.6 8.4-12.6 16.7s2.9 16.6 12.6 16.6zm33.9-42.7h13.6v7.3h.3c3.6-6 9.9-8.7 15.9-8.7 15.2 0 19.1 8.6 19.1 21.5v32h-14.3V42.6c0-8.6-2.4-12.8-9.2-12.8-7.8 0-11.1 4.3-11.1 14.9V72h-14.3V19.9z"
              />
            </svg>
          </a>
        </div>
      ) : null}
      <div
        className={prop.size === 'medium' ? '_container' : `_container _container_${prop.size}`}
      >
        <div className="header--breadcrumbs">
          {prop.hasWordmark ? (
            <div className="header--wordmark-2">
              <a href="http://www.ibm.com/watson/developercloud/" className="header--wordmark-2-link">
                <svg className="header--wordmark-svg" xmlns="http://www.w3.org/2000/svg" width="365.7" height="73.4" viewBox="0 0 365.7 73.4">
                  <path
                    d="M355.6 13.1h-2.4v6.8h-1.3v-6.8h-2.4v-1h6.2v1zm10.2 6.8h-1.3v-6.5l-2.6 6.5h-.9l-2.6-6.5v6.5h-1.3v-7.8h2l2.3 5.9 2.3-5.9h2v7.8zM75.2 72H59.5L47.3 23h-.2l-12 49h-16L0 0h15.8l11.4 49h.2L39.9 0h14.8L67 49.6h.2L79.1 0h15.5L75.2 72zm19.2-36.1c.8-13.3 12.8-17.4 24.5-17.4 10.4 0 22.9 2.3 22.9 14.8v27.1c0 4.7.5 9.5 1.8 11.6h-14.5c-.5-1.6-.9-3.3-1-5-4.5 4.7-11.1 6.4-17.6 6.4-10 0-17.7-4.9-17.7-15.6.2-23.7 35.3-11 34.7-22.7 0-6.1-4.2-7.1-9.3-7.1-5.5 0-9 2.2-9.5 7.9H94.4zm33.1 10.6c-2.4 2.1-7.5 2.2-11.9 3-4.4.8-8.5 2.4-8.5 7.7s4.1 6.7 8.8 6.7c11.2 0 11.6-8.8 11.6-12v-5.4zm41.9-26.6h10.5v9.6h-10.5v25.8c0 4.8 1.2 6.1 6 6.1 1.6 0 3.1-.1 4.4-.4v11.2c-2.4.4-5.5.5-8.4.5-8.9 0-16.4-1.9-16.4-12.4V29.4h-8.7v-9.6h8.7V4.2h14.3v15.7zm29 35.2c0 6.2 5.4 8.8 11 8.8 4 0 9.4-1.6 9.4-6.7 0-4.3-6.1-6-16.2-8.1-8.4-1.9-16.5-4.6-16.5-13.9 0-13.3 11.5-16.7 22.7-16.7 11.3 0 21.9 3.8 23 16.6H218c-.4-5.5-4.6-7.1-9.8-7.1-3.2 0-8 .5-8 4.8 0 5.1 8.2 5.8 16.2 7.8 8.4 1.9 16.5 4.9 16.5 14.6 0 13.7-12 18.1-23.8 18.1-12.1 0-24-4.5-24.5-18.3h13.8zm66.4-36.6c16.4 0 27 10.9 27 27.5 0 16.5-10.6 27.4-27 27.4-16.3 0-26.9-10.9-26.9-27.4 0-16.7 10.6-27.5 26.9-27.5zm0 44.1c9.8 0 12.7-8.3 12.7-16.6s-2.9-16.7-12.7-16.7c-9.7 0-12.6 8.4-12.6 16.7s2.9 16.6 12.6 16.6zm33.9-42.7h13.6v7.3h.3c3.6-6 9.9-8.7 15.9-8.7 15.2 0 19.1 8.6 19.1 21.5v32h-14.3V42.6c0-8.6-2.4-12.8-9.2-12.8-7.8 0-11.1 4.3-11.1 14.9V72h-14.3V19.9z"
                  />
                </svg>
              </a>
            </div>
          ) : null}
          { prop.mainBreadcrumbs ? (
            <a
              href={prop.mainBreadcrumbsUrl}
              className="base--a header--breadcrumbs-link header--breadcrumbs-main"
            >
              {prop.mainBreadcrumbs}
            </a>
          ) : null }
          { prop.subBreadcrumbs ? (
            <div style={{ marginTop: '0rem', display: 'inline-block' }}>
              <span className="header--breadcrumbs-slash"> / </span>
              <a
                href={prop.subBreadcrumbsUrl}
                className="base--a header--breadcrumbs-link header--breadcrumbs-sub"
              >
                {prop.subBreadcrumbs}
              </a>
            </div>
          ) : null }
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  mainBreadcrumbs: React.PropTypes.string,
  mainBreadcrumbsUrl: React.PropTypes.string,
  subBreadcrumbs: React.PropTypes.string,
  subBreadcrumbsUrl: React.PropTypes.string,
  hasWordmark: React.PropTypes.bool,
  size: React.PropTypes.oneOf(sizes),
};

Header.defaultProps = {
  hasWordmark: true,
  size: 'large',
  mainBreadcrumbs: null,
  mainBreadcrumbsUrl: null,
  subBreadcrumbs: null,
  subBreadcrumbsUrl: null,
};
