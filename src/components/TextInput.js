/*
This implementation was modeled after the input in
https://conversation-simple.mybluemix.net/
 */

import React from 'react';
import classNames from 'classnames';

const padding = 2;

export default React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      placeholder: 'Type Something',
      isOpen: false,
    };
  },

  getInitialState() {
    return {
      inputWidth: 0,
    };
  },

  onInput(e) {
    const dummy = e.target.nextSibling;
    // this is a hack for when you type space,
    // input text gets shifted because of mismatched width between
    // dummy and real input.  Char 'r' is used because it has the same
    // length as a char ' ' in order for the width of the space to count.
    const text = e.target.value.replace(/\s/g, 'r');
    dummy.textContent = text;
    this.setState({
      inputWidth: dummy.offsetWidth + padding,
    });
  },

  render() {
    return (
      <label
        htmlFor="textInput"
        className="text-input"
      >
        <input
          id="textInput"
          className={classNames(
            'text-input--input',
            'base--input',
            { empty: this.state.inputWidth === padding },
          )}
          style={{ width:
            (this.state.inputWidth > padding ?
              `${this.state.inputWidth}px` :
              '100%'),
          }}
          placeholder={this.props.placeholder}
          type="text"
          onInput={this.onInput}
        />
        <span className="text-input--dummy" />
      </label>
    );
  },
});
