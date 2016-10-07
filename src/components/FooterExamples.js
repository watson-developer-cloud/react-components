import React from 'react';
import Footer from '../../../src/components/Footer';
import Code from '../../../src/components/Code';

export default function FooterExamples() {
  return (
    <section className="_full-width-row" id="Footer">
      <div className="_container _container_large">
        <h2 className="base--h2">Footer</h2>
        <div className="row">
          <div>
            <Footer />
          </div>
          <div>
            <Code type="jsx">
{`<Footer />
`}</Code>
          </div>
        </div>
      </div>
    </section>
  );
}
