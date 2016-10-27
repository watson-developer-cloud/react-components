import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ButtonsGroup extends React.Component {

  static propTypes = {
    children: PropTypes.string,
    type: PropTypes.string, // for backwards compatibility - don't use this
  };

  static defaultProps = {
    language: 'js',
  };

  render() {
    const name = 'graph';
    const arr = [{
      value: 1,
      id: 'graph-day',
      text: 'Day',
    }, {
      value: 2,
      id: 'graph-12',
      text: '12 Hours',
    }, {
      value: 3,
      id: 'graph-6',
      text: '6 Hours',
    }];

    return (
      <div className="buttons-group">
        {arr.map((button, index) => (
          <div>
            <input
              className="base--radio buttons-group--radio"
              type="radio"
              id={button.id}
              name={name}
              value={button.value}
            />
            <label
              className={classNames(
                'base--inline-label',
                'base--button',
                'buttons-group--button',
                { 'buttons-group--button_first': index === 0 },
                { 'buttons-group--button_last': index === arr.length - 1 }
              )}
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
