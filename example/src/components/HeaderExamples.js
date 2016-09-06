import React from 'react';
import Header from '../../../src/components/Header';
import Code from '../../../src/components/Code';

export default function HeaderExamples() {
  return (
    <section className="_full-width-row header" id="Header">
      <div className="_container _container_large">
        <h2 className="base--h2">Header</h2>
        <div className="row">
          <div>
            <Header />
          </div>
          <div>
            <Code type="jsx">
{`<Header />
`}</Code>
          </div>
        </div>
      </div>
    </section>
  );
}
