import React from 'react';
import { Icon } from './Icon.js';
import Colors from './Colors.js';

export default function JsonLink(props) {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(`data:application/json, ${encodeURIComponent(JSON.stringify(props.json, null, 1))}`, '_blank');
  };

  return (
    <div className="results--json">
      <a
        onClick={handleClick}
        target="_blank"
        className="json-link base--a"
        rel="noopener noreferrer"
        href
      >
        <span className="json-link--span">JSON</span> <Icon type="link-out" size="small" fill={Colors.blue_50} />
      </a>
    </div>
  );
}

JsonLink.propTypes = {
  json: React.PropTypes.string.isRequired,
};
