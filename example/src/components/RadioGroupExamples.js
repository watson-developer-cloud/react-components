import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, Radio } from '../../../src/components';
import Code from '../../../src/components/Code';

export class FooBarBazRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'foo',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log('Clicked', value); // eslint-disable-line no-console
    this.setState({ selectedValue: value });
  }

  render() {
    return (
      <RadioGroup
        tabStyle={this.props.tabStyle}
        name={this.props.name}
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}
      >
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
        <Radio value="baz">Baz</Radio>
      </RadioGroup>
    );
  }
}

FooBarBazRadio.defaultProps = {
  tabStyle: false,
};

FooBarBazRadio.propTypes = {
  name: PropTypes.string.isRequired,
  tabStyle: PropTypes.bool,
};

export default function RadioGroupExample() {
  return (
    <section id="RadioGroup">
      <h2 className="base--h2">Radio Buttons</h2>
      <div className="row">
        <div className="block-example">
          <h3>Radio Style:</h3>
          <FooBarBazRadio name="without-tabs" tabStyle={false} />
          <h3>Tab Style:</h3>
          <FooBarBazRadio name="with-tabs" tabStyle />
          <h3>Notes:</h3>
          <p>React prevents side-effects, so radio buttons will not act &quot;clickable&quot; without something
            to handle the <code>onChange</code> event and set the <code>selectedValue</code>.</p>
          <p>The example code to the left wraps the RadioGroup and Radio buttons in a class that
            handles state and logs clicks to the console.</p>
        </div>
        <div className="block-code">
          <Code type="jsx">
                {`class FooBarBazRadio extends React.Component {
  constructor() {
    super(props);
    state = {selectedValue: 'foo',};
  }

  handleChange(value) {
    console.log('FooBarBazRadio Clicked', value)
    this.setState({selectedValue: value});
  }

  render() {
    return (
      <RadioGroup tabStyle={true}
                  name="input-name"
                  selectedValue={this.state.selectedValue}
                  onChange={this.handleChange}>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
        <Radio value="baz">Baz</Radio>
      </RadioGroup>
    );
  }
}`}
          </Code>
        </div>
      </div>
    </section>
  );
}
