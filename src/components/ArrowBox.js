/* eslint max-len:off */
import React from 'react';
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

export default React.createClass({
  propTypes: {
    direction: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'none']),
    show: React.PropTypes.bool,
    icon: React.PropTypes.oneOf([].concat(IconTypes, null)),
    color: React.PropTypes.string,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    // Offset from element that arrow box is relative to.
    // Ex. if relativeOffset = '50%', then the arrow box is
    // 50% of the main element's width or height
    relativeOffset: React.PropTypes.string,  // css values in string form
    manualPositioning: React.PropTypes.string,  // css values in string form
    // style and arrowStyle are inline css style objects
    style: React.PropTypes.object,  // eslint-disable-line
    arrowStyle: React.PropTypes.object,  // eslint-disable-line
    className: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
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
  },

  render() {
    // Use manualPositioning first.
    // If no manualPositioning, but height/width has a defined unit value
    // in css, then use half of that. Or else just use 0px.
    let posHeight = this.props.manualPositioning;
    let posWidth = this.props.manualPositioning;

    if (!posHeight) {
      if (hasUnit(this.props.height)) {
        posHeight = halfUnit(this.props.height);
      } else {
        posHeight = '0px';
      }
    }

    if (!posWidth) {
      if (hasUnit(this.props.width)) {
        posWidth = halfUnit(this.props.width);
      } else {
        posWidth = '0px';
      }
    }

    const directions = {
      top: {
        bottom: 'calc(100% + 1rem)',
        left: `calc(${this.props.relativeOffset} - ${posWidth})`,
      },
      right: {
        left: 'calc(100% + 1rem)',
        top: `calc(${this.props.relativeOffset} - ${posHeight})`,
      },
      bottom: {
        top: 'calc(100% + 1rem)',
        left: `calc(${this.props.relativeOffset} - ${posWidth})`,
      },
      left: {
        right: 'calc(100% + 1rem)',
        top: `calc(${this.props.relativeOffset} - ${posHeight})`,
      },
      none: {},
    };
    const borderStyle = {};
    if (this.props.direction !== 'none') {
      borderStyle[`border${capitalize(this.props.direction)}Color`] = this.props.color;
    }

    return (
      <div
        className={classNames(
          'arrow-box',
          { 'arrow-box_top': this.props.direction === 'top' },
          { 'arrow-box_right': this.props.direction === 'right' },
          { 'arrow-box_bottom': this.props.direction === 'bottom' },
          { 'arrow-box_left': this.props.direction === 'left' },
          { 'arrow-box_no-arrow': this.props.direction === 'none' },
          { 'arrow-box_hidden': !this.props.show },
          this.props.className
        )}
        style={Object.assign(
          directions[this.props.direction],
          { width: this.props.width },
          { height: this.props.height },
          { backgroundColor: this.props.color },
          this.props.style
        )}
      >
        { // eslint-disable-next-line react/prop-types
          this.props.children }
        <span
          className="arrow-box--arrow"
          style={Object.assign(
            borderStyle,
            this.props.arrowStyle
          )}
        />
        { this.props.icon ?
          (<Icon
            className="arrow-box--icon"
            type={this.props.icon}
            size="regular"
            fill={this.props.color}
          />) : null }
      </div>
    );
  },
});
