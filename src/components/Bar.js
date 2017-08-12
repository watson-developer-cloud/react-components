import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import map from 'map-range';

function Bar(props) {
  const mapped = map(x => x, props.rangeStart, props.rangeEnd, 0, 1);
  return (props.withScore ?
    <div className="bar">
      <div className="bar--full-bar">
        <div className="bar--value-bar" style={{ width: `${Math.round(mapped(props.score) * 100)}%` }} />
      </div>
      <div className="bar--score">{numeral(props.score).format('0.00')}</div>
    </div> :
    <div className="bar">
      <div className="bar--full-bar bar--full-bar_bar-only">
        <div className="bar--value-bar" style={{ width: `${Math.round(mapped(props.score) * 100)}%` }} />
      </div>
    </div>
  );
}

Bar.propTypes = {
  score: PropTypes.number,  // percentage number from 0 - 100
  withScore: PropTypes.bool,  // show score or not
  rangeStart: PropTypes.number,
  rangeEnd: PropTypes.number,
};

Bar.defaultProps = {
  score: 0,
  withScore: true,
  rangeStart: 0,
  rangeEnd: 1,
};

export default Bar;
