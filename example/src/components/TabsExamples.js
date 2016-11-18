/* eslint max-len: 0 */

import React from 'react';
import Tabs from '../../../src/components/Tabs';
import Pane from '../../../src/components/Tabs/Pane';
import Code from '../../../src/components/Code';

export default function TabsExamples() {
  return (
    <section id="Tabs">
      <h2 className="base--h2">Tabs</h2>
      <div className="row">
        <div className="block-example">
          <Tabs selected={0}>
            <Pane label="Tab1">
              <p className="base--p" >
                Tab-1 content
              </p>
            </Pane>
            <Pane label="Tab2">
              <p className="base--p" >
                Tab-2 content
              </p>
            </Pane>
          </Tabs>
        </div>
        <div className="block-code">
          <Code type="jsx">
{`<Tabs selected={0}>
  <Pane label="Tab1">
    <p className="base--p" >
      Tab-1 content
    </p>
  </Pane>
  <Pane label="Tab2">
    <p className="base--p" >
      Tab-2 content
    </p>
  </Pane>
</Tabs>`}</Code>
        </div>
      </div>
    </section>
  );
}
