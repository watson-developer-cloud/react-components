import React from 'react';
import Code from '../../../src/components/Code';
import Colors from '../../../src/components/Colors';

export default function ColorsExamples() {
  return (
    <section id="Colors">
      <h2 className="base--h2">Colors</h2>
      <ul className="base--ul base--ul_inline base--ul_no-bullets">
        {Object.keys(Colors).map(c => (<li
          className="base--li" key={c} style={{
            backgroundColor: Colors[c],
                // 8947848 is #888888, converted to decimal - darker
            color: parseInt(Colors[c].substr(1), 16) > 8947848 ? 'black' : 'white',
          }}
        >{c}</li>)
        )}
      </ul>
      <Code language="jsx">{`
import { Colors } from 'watson-react-components';

export function ColorExample() {
  return (<div style={{color: Colors.blue_60}}>I'm blue.</div>);
}
`}</Code>
    </section>
  );
}
