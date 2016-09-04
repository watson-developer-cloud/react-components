import React from 'react';

export default function LeadSpace() {
  return (
    <section className="_full-width-row _full-width-row_gray header">
      <div className="_container _container_xx-large">
        <div className="_full-width-row--aside" />
        <div className="_full-width-row--main">
          <div className="header--heading-section">
            <h2 className="base--h2 header--header">
              React Components
              <span className="header--version-tag">v0.0.1</span>
            </h2>
            <p className="base--p header--description description">
              The Watson Platform Component React Component Library translates
              Watson design language into React components to help develop web UI.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
