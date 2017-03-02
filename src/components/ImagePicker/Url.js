import ArrowBox from '../ArrowBox';
import Colors from '../Colors';
const React = require('react');
const classNames = require('classnames');

const InputImageUrl = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func,
    onInputChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    error: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      url: '',
      placeholder: 'Sample Placeholder',
      onSubmit: () => {},
      onInputChange: () => {},
      error: null,
    };
  },
  getInitialState() {
    return { url: '' };
  },
  /**
   * During changes to the url input
   */
  handleInputChange(e) {
    this.setState({ url: e.target.value });
    if (this.props.onInputChange) {
      this.props.onInputChange.call(this, e);
    }
  },
  /**
   * On Input url key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.url !== '') {
      if (this.props.onSubmit) {
        this.props.onSubmit.call(this, e, this.state.url);
      }
    }
  },
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
  },
});

module.exports = InputImageUrl;
