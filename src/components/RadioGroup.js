import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as ChengLouRadioGroup, Radio as ChengLouRadio } from 'react-radio-group'; // This component was created by Cheng Lou of Facebook

export class Radio extends ChengLouRadio {
  render() {
    const { name, selectedValue, onChange, tabStyle } = this.context.radioGroup;
    const { Component, children, ...props } = this.props;
    const optional = {};
    if (selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if (typeof onChange === 'function') {
      optional.onChange = () => onChange(this.props.value);
    }

    let classes = 'base--inline-label';
    if (tabStyle) {
      classes += ' clickable-tab';
    }

    // todo: se if we need to do extra work to ensure this is unique
    const id = `${name}-${this.props.value}`;

    return (
      <Component>
        <input {...props} id={id} type="radio" name={name} className="base--radio" {...optional} role="radio" aria-checked={optional.checked} />
        <label className={classes} htmlFor={id}>{children}</label>
      </Component>
    );
  }
}
// this is the poorly-document equivalent to getDefaultProps for ES6 classes - https://facebook.github.io/react/docs/reusable-components.html#es6-classes
Radio.defaultProps = { Component: 'div' };

export class RadioGroup extends ChengLouRadioGroup {
  getChildContext() {
    const { name, selectedValue, onChange, tabStyle } = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange, tabStyle,
      },
    };
  }

  render() {
    // these vars are intentionally pulled out so that ...rest as the correct properties
    // eslint-disable-next-line no-unused-vars
    const { Component, children, name, selectedValue, onChange, tabStyle, ...rest } = this.props;
    return <Component {...rest}>{children}</Component>;
  }
}
RadioGroup.propTypes.tabStyle = PropTypes.bool;
RadioGroup.defaultProps.tabStyle = false;
