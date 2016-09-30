import {Component, PropTypes} from 'react';
import {RadioGroup as ChengLouRadioGroup, Radio as ChengLouRadio} from 'react-radio-group'; // This component was created by Cheng Lou of Facebook


export class Radio extends ChengLouRadio {
  render() {
    const {name, selectedValue, onChange, tabStyle} = this.context.radioGroup;
    const {Component, children, ...props} = this.props;
    const optional = {};
    if(selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.value);
    }

    let classes = "base--inline-label";
    if (tabStyle){
      classes += " clickable-tab";
    }

    const id = name + "-" + this.props.value;

    return (
      <Component>
        <input {...props} id={id} role="radio" type="radio" name={name} className="base--radio" {...optional} />
        <label className={classes} htmlFor={id}>{children}</label>
      </Component>
    );
  }
}
Radio.defaultProps = {Component: 'div'}; // this is the poorly-document equivalent to getDefaultProps for ES6 classes - https://facebook.github.io/react/docs/reusable-components.html#es6-classes

export class RadioGroup extends ChengLouRadioGroup  {
  render() {
    const {Component, name, selectedValue, onChange, tabStyle, children, ...rest} = this.props;
    return <Component {...rest}>{children}</Component>;
  }
  getChildContext() {
    const {name, selectedValue, onChange, tabStyle} = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange, tabStyle
      }
    }
  }
}
RadioGroup.propTypes.tabStyle = PropTypes.bool;

