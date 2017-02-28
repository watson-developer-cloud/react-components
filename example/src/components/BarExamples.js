import React from 'react';
import Bar from '../../../src/components/Bar';
import Code from '../../../src/components/Code';

export default function BarExamples() {
  return (
    <section id="Bar">
      <h2 className="base--h2">Bar</h2>
      <div className="row">
        <div>
          <Bar score={0.25} />
          <Bar score={0.5} />
          <Bar score={0.75} />
          <p>Without a label:</p>
          <Bar score={0.75} withScore={false} />
          <p>With dynamic ranges:</p>
          <Bar score={-25} rangeStart={-100} rangeEnd={100} />
        </div>
        <div>
          <Code type="jsx">
{`<Bar score={0.25} />
<Bar score={0.50} />
<Bar score={0.75} />
<Bar score={0.80} withScore={false} />
<Bar score={-25} rangeStart={-100} rangeEnd={100} />`}
          </Code>
        </div>
      </div>
    </section>
  );
}
