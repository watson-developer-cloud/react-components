import React from 'react';
import ArrowBox from '../../../src/components/ArrowBox';
import Code from '../../../src/components/Code';
import Colors from '../../../src/components/Colors';

export default function ArrowBoxExamples() {
  return (
    <section id="ArrowBox">
      <h2 className="base--h2">Arrow Box</h2>
      <div className="row">
        <div className="arrow-box-container" style={{ position: 'relative' }} >
          This is the element that the <code className="base--code">{'<ArrowBox>'}</code> component is anchored to.
          <ArrowBox
            direction="top"
            // eslint-disable-next-line
            show={true}
            color={Colors.red_50}
            icon="error"
          >
            <p className="base--p">
              This arrow box is now oriented to the <b>top</b>.
            </p>
          </ArrowBox>
        </div>
        <p className="base--p">The container that the ArrowBox is anchored to must have its position set to <code className="base--code">relative</code>.</p>
        <Code type="jsx">
{`
<div className="arrow-box-container" style={{ position: 'relative' }} >
  This is the element that the ArrowBox is anchored to.
  <ArrowBox
    direction="top"
    show={true}
    color={Colors.red_50}
    icon="error"
  >
    <p className="base--p">
      This arrow box is now oriented to the <b>top</b>.
    </p>
  </ArrowBox>
</div>
`}
        </Code>
      </div>
    </section>
  );
}
