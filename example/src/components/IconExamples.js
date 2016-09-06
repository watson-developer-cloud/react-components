import React from 'react';
import Code from '../../../src/components/Code';
import Icon from '../../../src/components/Icon';

export default function IconExamples() {
  return (
    <section className="_full-width-row header" id="Icons">
      <div className="_container _container_large">
        <h2 className="base--h2">Icons</h2>
        <div className="row">
          <div className="block-example">
            <p className="base--p icon-example">
              <Icon type="plus" />
              - plus
            </p>
            <p className="base--p icon-example">
              <Icon type="back" />
              - back
            </p>
            <p className="base--p icon-example">
              <Icon type="close" />
              - close
            </p>
            <p className="base--p icon-example">
              <Icon type="check" />
              - check
            </p>
            <p className="base--p icon-example">
              <Icon type="success" />
              - success
            </p>
            <p className="base--p icon-example">
              <Icon type="success-o" />
              - success-o
            </p>
            <p className="base--p icon-example">
              <Icon type="error" />
              - error
            </p>
            <p className="base--p icon-example">
              <Icon type="error-o" />
              - error-o
            </p>
            <p className="base--p icon-example">
              <Icon type="warning" />
              - warning
            </p>
            <p className="base--p icon-example">
              <Icon type="info" />
              - info
            </p>
            <p className="base--p icon-example">
              <Icon type="reset" />
              - reset
            </p>
            <p className="base--p icon-example">
              <Icon type="up" />
              - up
            </p>
            <p className="base--p icon-example">
              <Icon type="link" />
              - link
            </p>
            <p className="base--p icon-example">
              <Icon type="loader" />
              - loader
            </p>
          </div>
          <div className="block-code">
            <Code type="jsx">
{`<Icon type="plus" />
<Icon type="back" />
<Icon type="close" />
<Icon type="check" />
<Icon type="success" />
<Icon type="success-o" />
<Icon type="error" />
<Icon type="error-o" />
<Icon type="warning" />
<Icon type="info" />
<Icon type="reset" />
<Icon type="up" />
<Icon type="link" />
<Icon type="loader" />
`}
            </Code>
          </div>
        </div>
        <h3 className="base--h3">Custom color and size</h3>
        <div className="row">
          <div className="block-example">
            <p className="base--p icon-example">
              <Icon type="plus" size="1em" />
              - 1em
            </p>
            <p className="base--p icon-example">
              <Icon type="plus" size="80px" />
              - 80px
            </p>
            <p className="base--p icon-example">
              <Icon type="plus" fill="#333333" />
              - #333333
            </p>
            <p className="base--p icon-example">
              <Icon type="plus" fill="green" />
              - green
            </p>
          </div>
          <div className="block-code">
            <Code type="jsx">
{`<Icon type="plus" size="1em" />
<Icon type="plus" size="80px" />
<Icon type="plus" fill="#333333" />
<Icon type="plus" fill="green" />
`}
            </Code>
          </div>
        </div>
      </div>
    </section>
  );
}
