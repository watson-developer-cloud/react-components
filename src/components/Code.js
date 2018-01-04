import React from 'react';
import PropTypes from 'prop-types';

import { PrismCode } from 'react-prism';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';

// these aren't actually languages:
const nonlangs = {
  extend: true,
  insertBefore: true,
  DFS: true,
};

const languages = Object.keys(Prism.languages).filter(lang => !nonlangs[lang]);

export default class CodeBlock extends React.Component {

  static languages = languages;

  render() {
    const lang = this.props.language;
    const lineNum = this.props.lineNumbers ? 'line-numbers' : '';

    return (
      <div className="code-block--code">
        <pre className={`base--pre ${lineNum}`}>
          <PrismCode className={`prism language-${lang}`}>
            {this.props.children}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]).isRequired,
  language: PropTypes.oneOf(languages),
  lineNumbers: PropTypes.bool,
};

CodeBlock.defaultProps = {
  language: 'js',
  lineNumbers: false,
};
