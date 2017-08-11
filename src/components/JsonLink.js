import React from 'react';
import PropTypes from 'prop-types';
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
  json: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  // element is used in props.element above
  element: PropTypes.string,  // eslint-disable-line
  // if specified, replaces the text with children
  children: PropTypes.oneOfType([  // eslint-disable-line
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

JsonLink.defaultProps = {
  element: 'div',
};
