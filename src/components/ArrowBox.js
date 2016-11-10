/* eslint max-len:off */
import React from 'react';
import classNames from 'classnames';
// import Icon from './Icon';
// import Colors from './Colors';

// error, alert, warning,

export default function ArrowBox(props) {
  return (
    <div
      className={classNames(
        'arrow-box',
        { 'arrow-box_top': props.arrowDirection === 'top' },
        { 'arrow-box_right': props.arrowDirection === 'right' },
        { 'arrow-box_bottom': props.arrowDirection === 'bottom' },
        { 'arrow-box_left': props.arrowDirection === 'left' },
      )}
    >
      { // eslint-disable-next-line react/prop-types
        props.children }
    </div>
  );
}

ArrowBox.propTypes = {
  arrowDirection: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'none']),
  show: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['success', 'warning', 'info', 'error', 'error-o']),
  color: React.PropTypes.oneOf(['red', 'yellow', 'green', 'blue', 'gray']),
  icon: React.PropTypes.element,
};

ArrowBox.defaultProps = {
  type: 'info',
  color: 'gray',
  arrowDirection: 'none',
  show: false,
};
