import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ButtonsGroup extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['button', 'radio', 'checkbox']),
    isExpanded: PropTypes.bool,
    minWidth: PropTypes.string, // will be overrided if isExpanded is true
    name: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isrequired,
    })),
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
    isExpanded: true,
    minWidth: '10rem',
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
              id={button.id}
              name={this.props.name}
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
            >
              {button.text}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
