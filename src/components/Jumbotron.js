import React from 'react';
import { Icon } from './Icon';
import sizes from './Sizes';

export default function Jumbotron(props) {
  return (
    <section className="_full-width-row _full-width-row_gray jumbotron">
      <div
        className={props.size === 'medium' ? '_container' : `_container _container_${props.size}`}
      >
        <div className="jumbotron--heading-section">
          <h2 className="base--h2 jumbotron--header">
            {props.serviceName}
          </h2>
          <p className="base--p jumbotron--description description">
            {props.description}
          </p>
        </div>
        {props.version !== 'GA' ?
          (<div className="jumbotron--version-tag">{props.version}</div>) : null
        }
        <nav className="jumbotron--nav">
          <h5 className="base--h5 jumbotron--get-started">
            <Icon className="jumbotron--get-started-icon icon" type="link" size="small" />
            <span className="jumbotron--get-started-span">Get Started</span>
          </h5>
          <ul className="jumbotron--nav-ul base--ul base--ul_inline base--ul_no-bullets">
            <li className="jumbotron--nav-li base--li">
              <a
                href={props.apiReference}
                className="base--a jumbotron--nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Reference
              </a>
            </li>
            <li className="jumbotron--nav-li base--li">
              <a
                href={props.documentation}
                className="base--a jumbotron--nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li className="jumbotron--nav-li base--li">
              <a
                href={props.repository}
                className="base--a jumbotron--nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fork on GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

Jumbotron.propTypes = {
  documentation: React.PropTypes.string.isRequired,
  version: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  serviceName: React.PropTypes.string.isRequired,
  apiReference: React.PropTypes.string.isRequired,
  repository: React.PropTypes.string.isRequired,
  size: React.PropTypes.oneOf(sizes),
};

Jumbotron.defaultProps = {
  size: 'large',
};
