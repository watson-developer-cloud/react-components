/* eslint max-len: 0 */

import React from 'react';
import Code from '../../../src/components/Code';

export default function CodeExamples() {
  return (
    <section className="_full-width-row" id="Code">
      <div className="_container _container_large">
        <h2 className="base--h2">Code</h2>
        <div className="row">
          <div className="block-example">
            <Code type="markup">
{`<div>
  <ul>
    <li> foo </li>
    <li> bar </li>
  </ul>
</div>`}
            </Code>
          </div>
          <div className="block-code">
            <Code type="jsx">
{`<Code type="json">
{\`<div>
  <ul>
    <li> foo </li>
    <li> bar </li>
  </ul>
</div>\`}
</Code>
`}</Code>
          </div>
        </div>
      </div>
    </section>
  );
}
