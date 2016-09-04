import React, { PropTypes } from 'react';

import { PrismCode } from 'react-prism';
import 'prismjs/prism.js';
import 'prismjs/components/prism-jsx.js';

export default class CodeBlock extends React.Component {

  static propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'js',
  }

  types = {
    js: 'javascript',
    jsx: 'jsx',
    html: 'html',
    markup: 'markup',
  }

  render() {
    return (
      <div className="code-block--code">
        <pre>
          <PrismCode className={`base--pre prism language-${this.types[this.props.type]}`}>
            {this.props.children}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
