import React, { PropTypes } from 'react';

import { PrismCode } from 'react-prism';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-json.js';

// these aren't actually languages:
const nonlangs = {
  extend: true,
  insertBefore: true,
  DFS: true,
};

const languages = Object.keys(Prism.languages).filter(lang => !nonlangs[lang]);

export default class CodeBlock extends React.Component {

  static languages = languages;

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
    language: PropTypes.oneOf(languages),
    type: PropTypes.string, // for backwards compatibility - don't use this
  };

  static defaultProps = {
    language: 'js',
  };

  render() {
    const lang = this.props.type || this.props.language;

    return (
      <div className="code-block--code">
        <pre className="base--pre">
          <PrismCode className={`prism language-${lang}`}>
            {this.props.children}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
