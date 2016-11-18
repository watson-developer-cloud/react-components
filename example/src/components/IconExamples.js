import React from 'react';
import Code from '../../../src/components/Code';
import { Icon } from '../../../src/components/Icon';

export default function IconExamples() {
  return (
    <section id="Icon">
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
          <div>
            <Icon type="loader" />
            <p className="base--p icon-example" style={{ display: 'inline-block' }}>
              - loader
            </p>
          </div>
          <p className="base--p icon-example">
            <Icon type="right" />
            - link
          </p>
          <p className="base--p icon-example">
            <Icon type="ibm" />
            - IBM
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
<Icon type="right" />
<Icon type="ibm" />
`}
          </Code>
        </div>
      </div>
      <div className="row">
        <div className="block-example">
          <div>
            <Icon type="loader" size="small" />
            <p className="base--p icon-example" style={{ display: 'inline-block' }}>
              - small loader
            </p>
          </div>
          <div>
            <Icon type="loader" size="regular" />
            <p className="base--p icon-example" style={{ display: 'inline-block' }}>
              - regular loader
            </p>
          </div>
          <div>
            <Icon type="loader" size="large" />
            <p className="base--p icon-example" style={{ display: 'inline-block' }}>
              - large loader
            </p>
          </div>
        </div>
        <div className="block-code">
          <Code type="jsx">
{`<Icon type="loader" size="small" />
<Icon type="loader" />
<Icon type="loader" size="large" />
`}
          </Code>
        </div>
      </div>
    </section>
  );
}
