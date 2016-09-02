const React = require('react');

const Tabs = React.createClass({
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element,
    ]).isRequired,
  },
  getDefaultProps() {
    return {
      selected: 0,
      children: [],
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected,
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({ selected: index });
  },
  renderTitles() {
    function labels(child, index) {
      const activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li className="tab-panels--tab-list-item base--li" role="presentation" key={index}>
          <a
            href={`#${child.props.label.replace(/ /g, '-').toLowerCase()}`}
            className={`${activeClass} tab-panels--tab base--a`}
            // eslint-disable-next-line
            onClick={this.handleClick.bind(this, index)}
            role="tab"
          >
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tab-panels--tab-list" role="tablist">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  },
  renderContent() {
    return (
      <div className="tab-panels--tab-content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="tab-panels" role="tabpanel">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  },
});

module.exports = Tabs;
