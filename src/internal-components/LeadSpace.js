import React from 'react';

import pkg from '../../../package.json';

export default function LeadSpace() {
  return (
    <section className="_full-width-row _full-width-row_gray jumbotron">
      <div className="_container _container_large">
        <div className="_full-width-row--aside">
          <div className="header--icon react-icon">
            <img
              className="header--icon-image react-icon-image"
              src="./images/react-logo.svg"
              alt="React Components Logo"
            />
          </div>
        </div>
        <div className="_full-width-row--main">
          <div className="header--heading-section">
            <h2 className="base--h2 header--header">
              React Components
            </h2>
            <p className="base--p header--description description">
              The Watson Platform Component React Component Library translates
              Watson design language into React components to help develop web UI.
            </p>
            <div className="header--version-tag">v{pkg.version}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
