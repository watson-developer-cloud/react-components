import React from 'react';
import Code from '../../../src/components/Code';
import Colors from '../../../src/components/Colors';
import { Icon, IconTypes } from '../../../src/components/Icon';

export default function IconExamples() {
  const icons = IconTypes.map((iconName, index) => (<div className="base--p icon-example" key={`icons-${index}`}>
      <Icon type={iconName} />
      - {iconName}
    </div>));

  const iconsCode = IconTypes.map(iconName => (`<Icon type="${iconName}" />\n`));

  return (
    <section id="Icon">
      <h2 className="base--h2">Icons</h2>

      <div className="row">
        <div className="block-example">
          {icons}
        </div>
        <div className="block-code">
          <Code type="jsx">
{iconsCode}
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

      <div className="row">
        <div className="block-example">
          <div>
            <Icon type="microphone" fill={Colors.red_50} />
          </div>
          <div>
            <Icon type="plus" fill="#4178BE" />
          </div>
        </div>
        <div className="block-code">
          <Code type="jsx">
{`<Icon type="microphone" fill={Colors.red_50} />
<Icon type="plus" fill="#4178BE" />`}
          </Code>
        </div>
      </div>

    </section>
  );
}
