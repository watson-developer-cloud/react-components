/* eslint max-len:off */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from './Icon';
import Colors from './Colors';

// error, alert, warning,

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialHide: true,
    };
    this.initialHide = this.initialHide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      nextProps.onEnter.call(this);
    }
  }

  initialHide() {
    setTimeout(() => {
      this.setState({
        initialHide: false,
      });
    }, 2000);
  }

  render() {
    this.initialHide();
    return (
      <div
        className={classNames(
          'overlay',
          { hide: this.state.initialHide },
          { show: this.props.isOpen }
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
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  // style is inline css style objects
  style: PropTypes.object,  // eslint-disable-line
  onExit: PropTypes.func,
  // onEnter is used in componentWillReceiveProps
  onEnter: PropTypes.func  // eslint-disable-line
};

Modal.defaultProps = {
  isOpen: false,
  onExit: () => {},
  onEnter: () => {},
};
