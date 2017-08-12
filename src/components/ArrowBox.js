/* eslint max-len:off */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, IconTypes } from './Icon';
import Colors from './Colors';

const getValue = str => str.match(/^[0-9]*/g)[0];
const getUnit = str => str.match(/[^0-9].*/g)[0];
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const hasUnit = (str) => {
  let bool = false;
  if (typeof str !== 'undefined' &&
      str !== null &&
      getValue(str).length > 0) {
    bool = true;
  }
  return bool;
};
const halfUnit = str => (getValue(str) / 2) + getUnit(str);

export default function ArrowBox(props) {
  // Use manualPositioning first.
  // If no manualPositioning, but height/width has a defined unit value
  // in css, then use half of that. Or else just use 0px.
  let posHeight = props.manualPositioning;
  let posWidth = props.manualPositioning;

  if (!posHeight) {
    if (hasUnit(props.height)) {
      posHeight = halfUnit(props.height);
    } else {
      posHeight = '0px';
    }
  }

  if (!posWidth) {
    if (hasUnit(props.width)) {
      posWidth = halfUnit(props.width);
    } else {
      posWidth = '0px';
    }
  }

  const directions = {
    top: {
      bottom: 'calc(100% + 1rem)',
      left: `calc(${props.relativeOffset} - ${posWidth})`,
    },
    right: {
      left: 'calc(100% + 1rem)',
      top: `calc(${props.relativeOffset} - ${posHeight})`,
    },
    bottom: {
      top: 'calc(100% + 1rem)',
      left: `calc(${props.relativeOffset} - ${posWidth})`,
    },
    left: {
      right: 'calc(100% + 1rem)',
      top: `calc(${props.relativeOffset} - ${posHeight})`,
    },
    none: {},
  };
  const borderStyle = {};
  if (props.direction !== 'none') {
    borderStyle[`border${capitalize(props.direction)}Color`] = props.color;
  }

  return (
    <div
      className={classNames(
        'arrow-box',
        { 'arrow-box_top': props.direction === 'top' },
        { 'arrow-box_right': props.direction === 'right' },
        { 'arrow-box_bottom': props.direction === 'bottom' },
        { 'arrow-box_left': props.direction === 'left' },
        { 'arrow-box_no-arrow': props.direction === 'none' },
        { 'arrow-box_hidden': !props.show },
        props.className
      )}
      style={Object.assign(
        directions[props.direction],
        { width: props.width },
        { height: props.height },
        { backgroundColor: props.color },
        props.style
      )}
    >
      { // eslint-disable-next-line react/prop-types
        props.children }
      <span
        className="arrow-box--arrow"
        style={Object.assign(
          borderStyle,
          props.arrowStyle
        )}
      />
      { props.icon ?
        (<Icon
          className="arrow-box--icon"
          type={props.icon}
          size="regular"
          fill={props.color}
        />) : null }
    </div>
  );
}

ArrowBox.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'none']),
  show: PropTypes.bool,
  icon: PropTypes.oneOf([].concat(IconTypes, null)),
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  // Offset from element that arrow box is relative to.
  // Ex. if relativeOffset = '50%', then the arrow box is
  // 50% of the main element's width or height
  relativeOffset: PropTypes.string,  // css values in string form
  manualPositioning: PropTypes.string,  // css values in string form
  // style and arrowStyle are inline css style objects
  style: PropTypes.object,  // eslint-disable-line
  arrowStyle: PropTypes.object,  // eslint-disable-line
  className: PropTypes.string,
};

ArrowBox.defaultProps = {
  direction: 'top',
  show: false,
  width: '15rem',
  height: 'auto',
  relativeOffset: '50%',
  manualPositioning: null,
  icon: null,
  color: Colors.gray_50,
  className: '',
};
