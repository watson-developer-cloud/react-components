const React = require('react');

const InputImageUrl = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func,
    onInputChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      url: '',
      placeholder: 'Sample Placeholder',
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
      <input
        className="input--url-input base--input"
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
        placeholder={this.props.placeholder}
        type="text"
        value={this.state.url}
      />
    );
  },
});

module.exports = InputImageUrl;
