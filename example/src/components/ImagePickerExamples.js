/* eslint max-len: 0 */

import React from 'react';
import ImagePicker from '../../../src/components/ImagePicker';
import Code from '../../../src/components/Code';

export default function CodeExamples() {
  return (
    <section className="_full-width-row" id="Code">
      <div className="_container _container_large">
        <h2 className="base--h2">Code</h2>
        <div className="row">
          <div className="block-example">
            <Code language="html">
{`<div>
  <ul>
    <li> foo </li>
    <li> bar </li>
  </ul>
</div>`}
            </Code>

          </div>
          <div className="block-code">
          <ImagePicker />

          </div>
        </div>
      </div>
    </section>
  );
}
