import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../src/components/Icon';

export default function ToC(props) {
  // the docs mention a displayName property, but I don't see it on most elements.
  // However, child.type is a reference to the constructor function,
  // and child.type.name (usually) gives the name of the constructor function
  // so, that's a good enough fallback for our use case.

  const tocElements = props.children.map((c) => {
    const id = c.type.displayName || c.type.name;
    return (
      <li key={`${id}-toc-entry`} className="base--li">
        <a className="base--a" href={`#${id}`}>
          { /* add a space before each capital letter in the ID, then drop "Examples" */}
          {id.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/Examples?$/, '')}
        </a>
      </li>
    );
  });

  const children = props.children.map((c) => {
    const id = c.type.displayName || c.type.name;
    return (
      <div id={id} key={`${id}-anchor`}>
        {c}
        <a href="#ToC" style={{ float: 'right' }}>
          <Icon type="up" size="small" />
        </a>
      </div>
    );
  });

  return (
    <section id="ToC">
      <h2 className="base--h2">Table of Contents</h2>
      <ul className="base--ul" style={{ paddingLeft: '1em' }}>
        {tocElements}
      </ul>
      {children}
    </section>
  );
}

ToC.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
