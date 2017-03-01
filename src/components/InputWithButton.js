import React from 'react';
import { Icon } from './index';

let value = '';

function InputWithButton(props) {
  function onKeyUp(e) {
    value = e.target.value;
    if (e.keyCode === 13) {
      props.onSubmit.call(this, e);
    }
  }
  function onSubmit(e) {
    e.target.value = value; // eslint-disable-line
    props.onSubmit.call(this, e);
  }

  return (
    <div className="input-with-button">
      <input
        type="text"
        placeholder="Input text here"
        {...props}
        onKeyUp={onKeyUp}
      />
      <button
        className="input-with-button--button"
        onClick={onSubmit}
      >
        <Icon type="right" size="small" />
      </button>
    </div>
  );
}

InputWithButton.propTypes = {
  onSubmit: React.PropTypes.func,
};

InputWithButton.defaultProps = {
  onSubmit: () => {},
};

export default InputWithButton;
