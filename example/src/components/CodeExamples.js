/* eslint max-len: 0 */

import React from 'react';
import Code from '../../../src/components/Code';

export default function CodeExamples() {
  return (
    <section id="Code">
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
          <Code language="jsx">
{`<Code language="html">
{\`<div>
  <ul>
    <li> foo </li>
    <li> bar </li>
  </ul>
</div>\`}
</Code>
`}</Code>
          <p>The following languages are automatically included:</p>
          <code>{Code.languages.join(', ')}</code>
          <p>To include an additional language, import it <b>before</b> importing <code>watson-react-components</code>:</p>
          <Code language="js">
{`import 'prismjs';
import 'prismjs/components/prism-sql.js';
import { Code } from 'watson-react-components';
`}
          </Code>
          <p>See the PrismJS website for a list of <a className="base--a" href="http://prismjs.com/#languages-list">available languages</a>.</p>
        </div>
      </div>
    </section>
  );
}
