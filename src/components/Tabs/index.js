import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    selected: 0,
    children: [],
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      children: [],
    };
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({ selected: index });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(index);
    }
  }

  // if there is exactly one child, props.children is an object not an array
  // this getter always returns an array
  get children() {
    const children = this.props.children;
    return Array.isArray(children) ? children : [children];
  }

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
        {this.children.map(labels.bind(this))}
      </ul>
    );
  }

  renderContent() {
    return (
      <div className="tab-panels--tab-content">
        {this.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tab-panels" role="tabpanel">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  }
}
