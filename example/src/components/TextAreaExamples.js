import React from 'react';
import TextArea from '../../../src/components/TextArea';
import Code from '../../../src/components/Code';

export default function TextAreaExamples() {
  return (
    <section id="TextArea">
      <h2 className="base--h2">Text Area</h2>
      <div className="row">
      <textarea className="base--textarea" name="text-area" id="textarea1" cols="30" rows="10"></textarea>
      <div>
      <Code type="jsx">
      {'<textarea className="base--textarea" name="text-area" id="textarea1" cols="30" rows="10"></textarea>'}
          </Code>
        </div>
      </div>
    </section>
  );
}
