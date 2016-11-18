import React from 'react';
import Header from '../../../src/components/Header';
import Code from '../../../src/components/Code';

export default function HeaderExamples() {
  return (
    <section id="Header">
      <h2 className="base--h2">Header</h2>
      <div className="row">
        <div>
          <Header
            mainBreadcrumbs="Service Name"
            mainBreadcrumbsUrl="someUrl"
            subBreadcrumbs="Demo Name"
            subBreadcrumbsUrl="someUrl"
            hasWordmark={false}
          />
        </div>
        <div>
          <Code type="jsx">
{`<Header
  mainBreadcrumbs="Service Name"
  mainBreadcrumbsUrl="someUrl"
  subBreadcrumbs="Demo Name"
  subBreadcrumbsUrl="someUrl"
  hasWordmark={false}
/>`}</Code>
        </div>
      </div>
    </section>
  );
}
