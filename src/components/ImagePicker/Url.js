const React = require('react');

const InputImageUrl = React.createClass({
  propTypes: {
    onImageUrl: React.PropTypes.func.isRequired,
  },
  getDefaultProps() {
    return { url: '' };
  },
  getInitialState() {
    return { url: '' };
  },
  /**
   * During changes to the url input
   */
  handleInputChange(e) {
    this.setState({ url: e.target.value });
  },
  /**
   * On Input url key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.url !== '') {
      this.props.onImageUrl(this.state.url);
    }
  },
  render() {
    return (
      <input
        type=""
        value={this.state.url}
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
        placeholder="Parse an image URL"
        className="input--url-input base--input"
      />
    );
  },
});

module.exports = InputImageUrl;
