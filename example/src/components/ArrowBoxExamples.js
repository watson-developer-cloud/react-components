import React from 'react';
import ArrowBox from '../../../src/components/ArrowBox';
import Code from '../../../src/components/Code';
// import Icon from '../../../src/components/Icon';

export default function ArrowBoxExamples() {
  // const colors = ['green', 'yellow', 'blue', 'red', 'red'];
  // const types = ['success', 'warning', 'info', 'error', 'error-o'];
  return (
    <section className="_full-width-row" id="ArrowBox">
      <div className="_container _container_large">
        <h2 className="base--h2">Alert</h2>
        <div className="row">
          <div className="block-example">
            <ArrowBox arrowDirection="right">
              Higher value, writer more likely to be perceived as open to experiences for a variety of activities.
            </ArrowBox>
          </div>
          <div className="block-code">
            <Code type="jsx">
{}
            </Code>
          </div>
        </div>
      </div>
    </section>
  );
}
