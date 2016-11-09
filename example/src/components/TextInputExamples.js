import React from 'react';
import TextInput from '../../../src/components/TextInput';
import Code from '../../../src/components/Code';
// import Icon from '../../../src/components/Icon';

export default function TextInputExamples() {
  return (
    <section className="_full-width-row" id="TextInput">
      <div className="_container _container_large">
        <h2 className="base--h2">Text Input</h2>
        <div className="row">
          <div className="block-example">
            <TextInput />
          </div>
          <div className="block-code">
            <Code type="jsx">
{}
            </Code>
          </div>
        </div>
      </div>
    </section>
  );
}
