import React from 'react';
import PropTypes from 'prop-types';

import { PrismCode } from 'react-prism';
import Prism from 'prismjs';
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

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]).isRequired,
  language: PropTypes.oneOf(languages),
};

CodeBlock.defaultProps = {
  language: 'js',
};
