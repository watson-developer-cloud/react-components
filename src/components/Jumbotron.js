import React from 'react';

import Icon from './Icon';

export default function Jumbotron(props) {
  return (
    <section className="_full-width-row _full-width-row_gray header">
      {props.backTo ?
        (
        <div className="go-back">
          <Icon type="back" />
          <a href={props.backTo} className="base--a go-back--link">
            <span className="go-back--link-span">{props.backToLabel}</span>
          </a>
        </div>
        ) : null}
      <div className="_container _container_xx-large">
        <div className="_full-width-row--aside">
          <div className="header--icon">
            <img
              className="header--icon-image"
              src={props.serviceIcon}
              alt={props.serviceName}
            />
          </div>
        </div>
        <div className="_full-width-row--main">
          <div className="header--heading-section">
            <h2 className="base--h2 header--header">
              {props.serviceName}
              {props.version !== 'GA' ?
                (<span className="header--version-tag">{props.version}</span>) : null
              }

            </h2>
            <p className="base--p header--description description">
              {props.description}
            </p>
          </div>
          <nav className="header--nav">
            <h5 className="base--h5 header--get-started">
              <Icon className="header--get-started-icon icon" type="link" />
              <span className="header--get-started-span">Get Started</span>
            </h5>
            <ul className="header--nav-ul base--ul base--ul_inline base--ul_no-bullets">
              <li className="header--nav-li base--li">
                <a
                  href={props.apiReference}
                  className="base--a header--nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Reference
                </a>
              </li>
              <li className="header--nav-li base--li">
                <a
                  href={props.documentation}
                  className="base--a header--nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li className="header--nav-li base--li">
                <a
                  href={props.repository}
                  className="base--a header--nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fork on GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

Jumbotron.propTypes = {
  documentation: React.PropTypes.string.isRequired,
  version: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string.isRequired,
  serviceIcon: React.PropTypes.string.isRequired,
  apiReference: React.PropTypes.string.isRequired,
  repository: React.PropTypes.string.isRequired,
  backTo: React.PropTypes.string,
  backToLabel: React.PropTypes.string,
};
