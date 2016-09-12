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

        <div className="row">
          <div className="block-example">
            <p className="base--p icon-example">
              <Icon type="plus" sizeType="large" />
              - large plus
            </p>
            <p className="base--p icon-example">
              <Icon type="back" sizeType="large" />
              - large back
            </p>
            <p className="base--p icon-example">
              <Icon type="close" sizeType="large" />
              - large close
            </p>
            <p className="base--p icon-example">
              <Icon type="check" sizeType="large" />
              - large check
            </p>
            <p className="base--p icon-example">
              <Icon type="success" sizeType="large" />
              - large success
            </p>
            <p className="base--p icon-example">
              <Icon type="success-o" sizeType="large" />
              - large success-o
            </p>
            <p className="base--p icon-example">
              <Icon type="error" sizeType="large" />
              - large error
            </p>
            <p className="base--p icon-example">
              <Icon type="error-o" sizeType="large" />
              - large error-o
            </p>
            <p className="base--p icon-example">
              <Icon type="warning" sizeType="large" />
              - large warning
            </p>
            <p className="base--p icon-example">
              <Icon type="info" sizeType="large" />
              - large info
            </p>
            <p className="base--p icon-example">
              <Icon type="reset" sizeType="large" />
              - large reset
            </p>
            <p className="base--p icon-example">
              <Icon type="up" sizeType="large" />
              - large up
            </p>
            <p className="base--p icon-example">
              <Icon type="link" sizeType="large" />
              - large link
            </p>
            <p className="base--p icon-example">
              <Icon type="loader" sizeType="large" />
              - large loader
            </p>
          </div>
          <div className="block-code">
            <Code type="jsx">
{`<Icon type="plus" sizeType="large" />
<Icon type="back" sizeType="large" />
<Icon type="close" sizeType="large" />
<Icon type="check" sizeType="large" />
<Icon type="success" sizeType="large" />
<Icon type="success-o" sizeType="large" />
<Icon type="error" sizeType="large" />
<Icon type="error-o" sizeType="large" />
<Icon type="warning" sizeType="large" />
<Icon type="info" sizeType="large" />
<Icon type="reset" sizeType="large" />
<Icon type="up" sizeType="large" />
<Icon type="link" sizeType="large" />
<Icon type="loader" sizeType="large" />
`}
            </Code>
          </div>
        </div>
      </div>
    </section>
  );
}
