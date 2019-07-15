import React from 'react';
import ButtonsGroup from '../../../src/components/ButtonsGroup';
import Code from '../../../src/components/Code';

export default function ButtonsGroupExamples() {
  return (
    <section id="ButtonsGroup">
      <h2 className="base--h2">Buttons Group</h2>
      <div className="row">
        <h5 className="base--h5">Normal Buttons</h5>
        <ButtonsGroup
          type="button"
          name="button"
          // eslint-disable-next-line no-console
          onClick={e => console.log('button clicked', e)}
          // eslint-disable-next-line no-console
          onChange={e => console.log('button changed', e)}
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
          // eslint-disable-next-line no-console
          onClick={e => console.log('radio clicked', e)}
          // eslint-disable-next-line no-console
          onChange={e => console.log('radio changed', e)}
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
          // eslint-disable-next-line no-console
          onClick={e => console.log('checkbox clicked', e)}
          // eslint-disable-next-line no-console
          onChange={e => console.log('checkbox changed', e)}
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
        <h5 className="base--h5">ButtonsGroup with HTML Content</h5>
        <ButtonsGroup
          type="button"
          name="buttons-with-html-content"
          // eslint-disable-next-line no-console
          onClick={e => console.log('checkbox clicked', e)}
          // eslint-disable-next-line no-console
          onChange={e => console.log('checkbox changed', e)}
          buttons={[{
            value: 1,
            id: 'buttons-with-html-content-1',
            text: <p><a href="https://github.com/watson-developer-cloud/node-sdk">wdc node-sdk</a></p>,
          }, {
            value: 2,
            id: 'buttons-with-html-content-2',
            text: <p><a href="https://github.com/watson-developer-cloud/python-sdk">wdc python-sdk</a></p>,
          }, {
            value: 3,
            id: 'buttons-with-html-content-3',
            text: <p><a href="https://github.com/watson-developer-cloud/java-sdk">wdc java-sdk</a></p>,
          }]}
        />
      </div>
      <Code type="jsx">
{`<ButtonsGroup
  type="radio"  // radio, button, or checkbox
  name="radio-buttons"
  onClick={e => console.log('clicked', e)}
  onChange={e => console.log('changed', e)}
  buttons={[{
    value: 1,
    id: 'radio-buttons-1',  // id's must be unique across the entire page. Default value is name-value
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
    </section>
  );
}
