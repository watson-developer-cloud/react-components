import React from 'react';
import { Icon } from './Icon';
import Colors from './Colors';

export default function JsonLink(props) {
  // return a js object
  const normalizeJson = json => (typeof json === 'string' ? JSON.parse(json) : json);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`data:application/json, ${encodeURIComponent(JSON.stringify(normalizeJson(props.json), null, 1))}`, '_blank');
  };

  return (
    <props.element className="results--json">
      <a
        onClick={handleClick}
        className="json-link base--a"
        rel="noopener noreferrer"
        href
      >
        <span className="json-link--span">{props.children || 'JSON'}</span> <Icon type="link-out" size="small" fill={Colors.blue_50} />
      </a>
    </props.element>
  );
}

JsonLink.propTypes = {
  json: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  // element is used in props.element above
  element: React.PropTypes.string,  // eslint-disable-line
  // if specified, replaces the text with children
  children: React.PropTypes.oneOfType([  // eslint-disable-line
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
};

JsonLink.defaultProps = {
  element: 'div',
};
