import React from 'react';
import ButtonsGroup from '../../../src/components/ButtonsGroup';
import Code from '../../../src/components/Code';

export default function ButtonsGroupExamples() {
  return (
    <section className="_full-width-row" id="Footer">
      <div className="_container _container_large">
        <h2 className="base--h2">Footer</h2>
        <div className="row">
          <h5 className="base--h5">Normal Buttons</h5>
          <ButtonsGroup
            type="button"
            name="button"
            buttons={[{
              value: 1,
              id: 'button-1',
              text: 'hello',
            }, {
              value: 2,
              id: 'button-2',
              text: 'world',
            }, {
              value: 3,
              id: 'button-3',
              text: 'foo',
            }]}
          />
          <h5 className="base--h5">Radio Buttons</h5>
          <ButtonsGroup
            type="radio"
            name="radio-buttons"
            buttons={[{
              value: 1,
              id: 'radio-buttons-1',
              text: 'hello',
            }, {
              value: 2,
              id: 'radio-buttons-2',
              text: 'world',
            }, {
              value: 3,
              id: 'radio-buttons-3',
              text: 'foo',
            }]}
          />
          <h5 className="base--h5">Checkbox Buttons</h5>
          <ButtonsGroup
            type="checkbox"
            name="check-buttons"
            buttons={[{
              value: 1,
              id: 'check-buttons-1',
              text: 'hello',
            }, {
              value: 2,
              id: 'check-buttons-2',
              text: 'world',
            }, {
              value: 3,
              id: 'check-buttons-3',
              text: 'foo',
            }, {
              value: 4,
              id: 'check-buttons-4',
              text: 'bar',
            }, {
              value: 5,
              id: 'check-buttons-5',
              text: 'baz',
            }]}
          />
        </div>
        <Code type="jsx">
{`<ButtonsGroup
  type="radio"  // radio, button, or checkbox
  name="radio-buttons"
  buttons={[{
    value: 1,
    id: 'radio-buttons-1',  // id's need to be unique
    text: 'hello',
  }, {
    value: 2,
    id: 'radio-buttons-2',
    text: 'world',
  }, {
    value: 3,
    id: 'radio-buttons-3',
    text: 'foo',
  }]}
/>`}
        </Code>
      </div>
    </section>
  );
}
