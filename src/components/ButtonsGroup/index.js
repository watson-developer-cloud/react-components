import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ButtonsGroup extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['button', 'radio', 'checkbox']),
    isExpanded: PropTypes.bool,
    minWidth: PropTypes.string, // will be overrided if isExpanded is true
    name: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      id: PropTypes.string,
      // text is either an element or string
      text: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
        PropTypes.string,
      ]).isRequired,
      selected: PropTypes.bool,
    })).isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
    isExpanded: true,
    minWidth: '10rem',
    onClick: () => {},
    onChange: () => {},
  };

  render() {
    const expandedWidths = `${100 / (this.props.buttons.length)}%`;
    return (
      <div className="buttons-group">
        {this.props.buttons.map((button, index) => (
          <div
            style={{
              display: 'inline-block',
              marginTop: '0rem',
              width: `${this.props.isExpanded ? expandedWidths : this.props.minWidth}`,
            }}
            key={index}
          >
            <input
              className="base--radio buttons-group--radio"
              type={this.props.type}
              id={button.id || `${this.props.name}-${button.value}`}
              name={this.props.name}
              checked={button.selected}
              value={button.value}
              onClick={this.props.onClick}
              onChange={this.props.onChange}
            />
            <label
              className={classNames(
                'base--inline-label',
                'base--button',
                'buttons-group--button',
                { 'buttons-group--button_first': index === 0 },
                { 'buttons-group--button_last': index === this.props.buttons.length - 1 }
              )}
              style={{
                width: '100%',
              }}
              htmlFor={button.id}
              title={button.text}
            >
              {button.text}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
