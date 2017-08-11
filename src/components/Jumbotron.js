import React from 'react';
import PropTypes from 'prop-types';
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
        {props.apiReference || props.documentation || props.repository ? (
          <nav className="jumbotron--nav">
            <h5 className="base--h5 jumbotron--get-started">
              <Icon className="jumbotron--get-started-icon icon" type="link" size="small" />
              <span className="jumbotron--get-started-span">Get Started</span>
            </h5>
            <ul className="jumbotron--nav-ul base--ul base--ul_inline base--ul_no-bullets">
              {props.apiReference ? (
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
              ) : null}
              {props.documentation ? (
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
              ) : null}
              {props.repository ? (
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
              ) : null}
              {props.startInBluemix ? (
                <li className="jumbotron--nav-li base--li">
                  <a
                    href={props.startInBluemix}
                    className="base--button base--button_fill jumbotron--nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start free in Bluemix
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        ) : null}
      </div>
    </section>
  );
}

Jumbotron.propTypes = {
  documentation: PropTypes.string,
  version: PropTypes.string,
  description: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  apiReference: PropTypes.string,
  startInBluemix: PropTypes.string,
  repository: PropTypes.string,
  size: PropTypes.oneOf(sizes),
};

Jumbotron.defaultProps = {
  size: 'large',
  documentation: '',
  version: '',
  apiReference: '/',
  startInBluemix: '/',
  repository: '/',
};
