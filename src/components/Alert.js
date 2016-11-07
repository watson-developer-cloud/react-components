/* eslint max-len:off */
import React from 'react';
import Icon from './Icon';
import Colors from './Colors';

// error, alert, warning,

export default function Alert(props) {
  return (
    <div className="alert" style={{ backgroundColor: Colors[`${props.color}_10`] }}>
      <div className="alert--icon-container">
        <Icon type={props.type} fill={Colors[`${props.color}_50`]} />
      </div>
      <div className="alert--content-container">
        { // eslint-disable-next-line react/prop-types
          props.children }
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: React.PropTypes.oneOf(['success', 'warning', 'info', 'error', 'error-o']),
  color: React.PropTypes.oneOf(['red', 'yellow', 'green', 'blue', 'gray']),
};

Alert.defaultProps = {
  type: 'info',
  color: 'gray',
};
