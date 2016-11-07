/* eslint max-len:off */
import React from 'react';
// import Icon from './Icon';
// import Colors from './Colors';

// error, alert, warning,

export default function Modal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        { // eslint-disable-next-line react/prop-types
          props.children }
      </div>
    </div>
  );
}

Modal.propTypes = {
  isFixed: React.PropTypes.bool,
};

Modal.defaultProps = {
  isFixed: true,
};
