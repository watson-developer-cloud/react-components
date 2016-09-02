'use strict';

var React = require('react');

var Tabs = React.createClass({
  displayName: 'Tabs',

  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.element]).isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      selected: 0,
      children: []
    };
  },
  getInitialState: function getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick: function handleClick(index, event) {
    event.preventDefault();
    this.setState({ selected: index });
  },
  renderTitles: function renderTitles() {
    function labels(child, index) {
      var activeClass = this.state.selected === index ? 'active' : '';
      return React.createElement(
        'li',
        { className: 'tab-panels--tab-list-item base--li', role: 'presentation', key: index },
        React.createElement(
          'a',
          {
            href: '#' + child.props.label.replace(/ /g, '-').toLowerCase(),
            className: activeClass + ' tab-panels--tab base--a'
            // eslint-disable-next-line
            , onClick: this.handleClick.bind(this, index),
            role: 'tab'
          },
          child.props.label
        )
      );
    }
    return React.createElement(
      'ul',
      { className: 'tab-panels--tab-list', role: 'tablist' },
      this.props.children.map(labels.bind(this))
    );
  },
  renderContent: function renderContent() {
    return React.createElement(
      'div',
      { className: 'tab-panels--tab-content' },
      this.props.children[this.state.selected]
    );
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'tab-panels', role: 'tabpanel' },
      this.renderTitles(),
      this.renderContent()
    );
  }
});

module.exports = Tabs;
//# sourceMappingURL=index.js.map
