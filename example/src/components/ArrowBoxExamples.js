import React from 'react';
import ArrowBox from '../../../src/components/ArrowBox';
import Code from '../../../src/components/Code';
import Colors from '../../../src/components/Colors';

const directions = ['top', 'right', 'bottom', 'left'];

export default React.createClass({
  getInitialState() {
    return {
      box1Show: false,
      box2Location: 0,  // 0, 1, 2, 3 ~= 'top', 'right', 'bottom', 'left'
      box2Show: false,
    };
  },

  onClick1() {
    this.setState({
      box1Show: !this.state.box1Show,
    });
  },

  onClick2() {
    this.setState({
      box2Location: this.state.box2Show ? (this.state.box2Location + 1) % 4 : this.state.box2Location,
      box2Show: !this.state.box2Show,
    });
  },

  render() {
    return (
      <section className="_full-width-row" id="ArrowBox">
        <div className="_container _container_large">
          <h2 className="base--h2">Arrow Box</h2>
          <div className="row">
            <button
              className="base--button arrow-box-button"
              onClick={this.onClick1}
              style={{ position: 'relative' }}
            >
              Click me!
              <ArrowBox
                direction="top"
                show={this.state.box1Show}
                color={Colors.red_50}
                icon="error"
              >
                <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
                  This arrow box is now oriented to the <b>top</b>.
                </p>
              </ArrowBox>
            </button>
            <Code type="jsx">
{`
getInitialState() {
  return {
    box1Show: false,
  };
},

onClick1() {
  this.setState({
    box1Show: !this.state.box1Show,
  });
},

// the container of ArrowBox must have relative position
<button
  className="base--button arrow-box-button"
  onClick={this.onClick1}
  style={{ position: 'relative' }}
>
  Click me!
  <ArrowBox
    direction="top"
    show={this.state.box1Show}
    color={Colors.red_50}
    icon="error"
  >
    <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
      This arrow box is now oriented to the <b>top</b>.
    </p>
  </ArrowBox>
</button>`}
            </Code>
          </div>
          <div className="row">
            <button
              className="base--button arrow-box-button"
              onClick={this.onClick2}
            >
              Click me!
              <ArrowBox
                direction={directions[this.state.box2Location]}
                show={this.state.box2Show}
                icon="error-o"
                height="6rem"
              >
                <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
                  This arrow box is now oriented to the <b>{directions[(this.state.box2Location)]}.</b>
                </p>
              </ArrowBox>
            </button>
            <Code type="jsx">
{`const directions = ['top', 'right', 'bottom', 'left'];

...

getInitialState() {
  return {
    box2Location: 0,  // 0, 1, 2, 3 ~= 'top', 'right', 'bottom', 'left'
    box2Show: false,
  };
},

onClick2() {
  this.setState({
    box2Location: this.state.box2Show ? (this.state.box2Location + 1) % 4 : this.state.box2Location,
    box2Show: !this.state.box2Show,
  });
},

<button
  className="base--button arrow-box-button"
  onClick={this.onClick2} // this function cycles box2Location and box2Show
>
  Click me!
  <ArrowBox
    direction={directions[this.state.box2Location]}
    show={this.state.box2Show}
    icon="error-o"
    height="6rem"
  >
    <p className="base--p" style={{ color: '#fff', textAlign: 'left' }}>
      This arrow box is now oriented to the <b>{directions[(this.state.box2Location)]}.</b>
    </p>
  </ArrowBox>
</button>`}
            </Code>
          </div>
        </div>
      </section>
    );
  },
});
