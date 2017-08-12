/*
This implementation was modeled after the input in
https://conversation-simple.mybluemix.net/
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const padding = 2;

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWidth: padding,
    };
    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const dummy = e.target.nextSibling;
    // this is a hack for when you type space,
    // input text gets shifted because of mismatched width between
    // dummy and real input.  Char 'r' is used because it has the same
    // length as a char ' ' in order for the width of the space to count.
    // eslint-disable-next-line
    e.target.value = e.target.value.replace(/\t/g, ' '); // change tabs to spaces
    const text = e.target.value.replace(/\s/g, 'r');
    dummy.textContent = text;
    this.setState({
      inputWidth: dummy.offsetWidth + padding,
    });

    if (this.props.onInput) {
      this.props.onInput.call(this, e);
    }
  }

  render() {
    return (
      <label
        // eslint-disable-next-line react/prop-types
        htmlFor={this.props.id}
        className="text-input"
      >
        <input
          type="text"
          className={classNames(
            'text-input--input',
            'base--input',
            { empty: this.state.inputWidth === padding }
          )}
          style={{ width:
            (this.state.inputWidth > padding ?
              `${this.state.inputWidth}px` :
              '100%'),
          }}
          {...this.props}
          onInput={this.onInput}
        />
        <span className="text-input--dummy" />
      </label>
    );
  }
}

  // all html input[type="text"] properties are valid
TextInput.propTypes = {
  onInput: PropTypes.func,
};

TextInput.defaultProps = {
  id: `textinput-${Math.round(Math.random() * 1000)}`,
  placeholder: 'Type Something',
  onInput: () => {},
};
