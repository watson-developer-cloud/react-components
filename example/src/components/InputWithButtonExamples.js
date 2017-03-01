import React from 'react';
import InputWithButton from '../../../src/components/InputWithButton';
import Code from '../../../src/components/Code';

export default React.createClass({
  getInitialState() {
    return {
      submitText: '',
    };
  },

  render() {
    return (
      <section id="InputWithButton">
        <h2 className="base--h2">InputWithButton</h2>
        <div className="row">
          <InputWithButton
            onSubmit={(e) => {
              this.setState({ submitText: e.target.value });
            }}
            placeholder="Type some text here to see something happen."
          />
          <p>{this.state.submitText}</p>
          <Code type="jsx">
{`<InputWithButton
  onSubmit={(e) => {
    this.setState({ submitText: e.target.value });
  }}
  placeholder="Input some text here"
/>`}
          </Code>
        </div>
      </section>
    );
  },
});
