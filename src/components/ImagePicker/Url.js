import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowBox from '../ArrowBox';
import Colors from '../Colors';

class InputImageUrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  /**
   * During changes to the url input
   */
  handleInputChange(e) {
    this.setState({ url: e.target.value });
    if (this.props.onInputChange) {
      this.props.onInputChange.call(this, e);
    }
  }
  /**
   * On Input url key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.url !== '') {
      if (this.props.onSubmit) {
        this.props.onSubmit.call(this, e, this.state.url);
      }
    }
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <input
          className={classNames(
            'image-picker--url-input',
            'base--input',
            { 'image-picker--url-input_error': this.props.error }
          )}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.url}
        />
        <ArrowBox
          className="image-picker--arrow-box"
          direction="bottom"
          icon="error"
          color={Colors.red_50}
          width="100%"
          show={Boolean(this.props.error)}
        >
          <p className="base--p image-picker--error-message">{this.props.error}</p>
        </ArrowBox>
      </div>
    );
  }
}

InputImageUrl.defaultProps = {
  url: '',
  placeholder: 'Sample Placeholder',
  onSubmit: () => {},
  onInputChange: () => {},
  error: null,
};

InputImageUrl.propTypes = {
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

module.exports = InputImageUrl;
