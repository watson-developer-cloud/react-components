import React from 'react';
import ArrowBox from '../../../src/components/ArrowBox';
import Code from '../../../src/components/Code';
import Colors from '../../../src/components/Colors';

export default React.createClass({
  render() {
    return (
      <section className="_full-width-row" id="ArrowBox">
        <div className="_container _container_large">
          <h2 className="base--h2">Arrow Box</h2>
          <div className="row">
            <div
              style={{
                position: 'relative',
                width: '10rem',
                margin: 'auto',
                backgroundColor: Colors.gray_10,
                display: 'block',
                padding: '1rem',
              }}
            >
              This is the element that the ArrowBox is anchored to.
              <ArrowBox
                direction="top"
                show
                color={Colors.red_50}
                icon="error"
              >
                <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
                  This arrow box is now oriented to the <b>top</b>.
                </p>
              </ArrowBox>
            </div>
            <p className="base--p">The container that the ArrowBox is anchored must have its position set to <code className="base--code">relative</code>.</p>
            <Code type="jsx">
{`
<div style={{ position: 'relative' }}>
  This is the element that the ArrowBox is anchored to.
  <ArrowBox
    direction="top"
    show
    color={Colors.red_50}
    icon="error"
  >
    <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
      This arrow box is now oriented to the <b>top</b>.
    </p>
  </ArrowBox>
</div>
`}
            </Code>
          </div>
        </div>
      </section>
    );
  },
});
