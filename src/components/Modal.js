/* eslint max-len:off */
import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import Colors from './Colors';

// error, alert, warning,

export default React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool,
    onExit: React.PropTypes.func,
    style: React.PropTypes.object,
  },

  defaultProps: {
    isOpen: false,
  },

  render() {
    return (
      <div
        className={classNames(
          'overlay',
          { show: this.props.isOpen },
        )}
      >
        <div className="modal" style={this.props.style || null}>
          { // eslint-disable-next-line react/prop-types
            this.props.children }
          <button className="modal--x" onClick={this.props.onExit}>
            <Icon type="close" fill={Colors.gray_50} />
          </button>
        </div>
      </div>
    );
  },
});