import React from 'react';
import TextInput from '../../../src/components/TextInput';
import Code from '../../../src/components/Code';

export default React.createClass({

  getInitialState() {
    return {
      text: '',
    };
  },

  render() {
    return (
      <section id="TextInput">
        <h2 className="base--h2">Text Input</h2>
        <div className="row">
          <div className="block-example">
            <TextInput
              id="text-input-1"
              placeholder="Try typing something here"
              onInput={(e) => {
                this.setState({ text: e.target.value });
              }}
            />
            <p className="base--p">Showing event handling with the TextInput component:</p>
            <p className="base--p">{this.state.text}</p>
            <p className="base--p"><b>Notes:</b></p>
            <p className="base--p">Any dom property can be passed in as properties for this component.</p>
          </div>
          <div className="block-code">
            <Code type="jsx">
{`<TextInput
  id="text-input-1"
  placeholder="Try typing something here"
  onInput={(e) => {
    this.setState({ text: e.target.value });
  }}
/>`}
            </Code>
          </div>
        </div>
      </section>
    );
  },
});
