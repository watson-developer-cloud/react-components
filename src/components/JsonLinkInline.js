import React from 'react';
import classNames from 'classnames';
import { Icon, Colors, Code } from './index.js';

export default function JsonLinkInline(props) {
  // return a js object
  const normalizeJson = json => (typeof json === 'string' ? JSON.parse(json) : json);

  return (
    <div className="results--json json-link-inline">
      <div className="json-link-inline--desc">
        {props.description}
      </div>
      <div className="json-link-inline--spacer" />
      <a
        onClick={(e) => {
          e.preventDefault();
          props.onShow.call(this, e);
        }}
        className="base--a json-link-inline--link"
        rel="noopener noreferrer"
        href={null}
      >
        <span className="json-link-inline--span">{props.children || 'JSON'}</span>
        <span className="json-link-inline--icon-1">
          <Icon type="link-out" size="small" fill={Colors.blue_50} />
        </span>
        <span
          className={classNames(
            'json-link-inline--icon-2',
            { 'json-link-inline--icon-2_show': props.showJson }
          )}
        >
          <Icon type="right" size="small" fill={Colors.blue_50} />
        </span>
      </a>
      <div
        className={classNames(
          'json-link-inline--overlay',
          { 'json-link-inline--overlay_show': props.showJson }
        )}
      >
        <Code language="json">
          {JSON.stringify(normalizeJson(props.json), null, 1)}
        </Code>
        <button
          className="json-link-inline--button"
          onClick={(e) => {
            props.onExit.call(this, e);
          }}
        >
          <Icon type="close" fill="#333" />
        </button>
      </div>
    </div>
  );
}

JsonLinkInline.propTypes = {
  json: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
  showJson: React.PropTypes.bool,
  onExit: React.PropTypes.func,
  onShow: React.PropTypes.func,
  description: React.PropTypes.element,
};

JsonLinkInline.defaultProps = {
  showJson: false,
  onExit: () => {},
  onShow: () => {},
};
