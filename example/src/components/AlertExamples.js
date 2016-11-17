import React from 'react';
import Alert from '../../../src/components/Alert';
import Code from '../../../src/components/Code';
import { Icon } from '../../../src/components/Icon';

export default function AlertExamples() {
  const colors = ['green', 'yellow', 'blue', 'red', 'red'];
  const types = ['success', 'warning', 'info', 'error', 'error-o'];
  return (
    <section id="Alert">
      <h2 className="base--h2">Alert</h2>
      <div className="row">
        <div className="block-example">
          {types.map((type, index) => (
            <Alert type={type} color={colors[index]} key={`alert-${type}-${index}`}>
              <p className="base--p">This is <b>{type}</b> box.</p>
            </Alert>
          ))}
          <Alert>
            <p className="base--p">
              This is a message box with more content.<br />
              This is a message box with more content.<br />
              This is a message box with more content.<br />
              This is a message box with more content.<br />
              This is a message box with more content.<br />
              This is a message box with more content.<br />
            </p>
          </Alert>
          <Alert icon={<Icon type="link" />}>
            <p className="base--p">
              This alert uses a custom icon.  Custom icons will override &nbsp;
              <code className="base--code">type</code> and <code className="base--code">color</code> properties.
            </p>
          </Alert>
        </div>
        <div className="block-code">
          <Code type="jsx">
{`<Alert type="success" color="green">
  <p className="base--p">This is <b>success</b> box.</p>
</Alert>

<Alert type="warning" color="yellow">
  <p className="base--p">This is <b>warning</b> box.</p>
</Alert>

<Alert type="info" color="blue">
  <p className="base--p">This is <b>info</b> box.</p>
</Alert>

<Alert type="error" color="red">
  <p className="base--p">This is <b>error</b> box.</p>
</Alert>

<Alert type="error-o" color="red">
  <p className="base--p">This is <b>error-o</b> box.</p>
</Alert>

<Alert>
<p className="base--p">
  This is a message box with more content.<br />
  This is a message box with more content.<br />
  This is a message box with more content.<br />
  This is a message box with more content.<br />
  This is a message box with more content.<br />
  This is a message box with more content.<br />
</p>
</Alert>

<Alert icon={<Icon type="link" />}>
  <p className="base--p">
    This alert uses a custom icon.  Custom icons will override &nbsp;
    <code className="base--code">type</code> and <code className="base--code">color</code> properties.
  </p>
</Alert>`}
          </Code>
        </div>
      </div>
    </section>
  );
}
