import React from 'react';
import dropdown from '../../../src/components/DropDown';
import Code from '../../../src/components/Code';
import { Icon, IconTypes } from '../../../src/components/Icon';

export default function DropDownExamples() {
  return (
    <section id="DropDownExamples">
      <h2 className="base--h2">Drop Down</h2>
      <div className="row">

      <div className="block-example">
      <div className="dropdown">
        <div className="dropbtn">Dropdown <Icon className="drowndownicon" type="right" size="small" /></div>
        <div className="dropdown-content">
          <a href="#DropDownExamples">Link 1</a>
          <a href="#DropDownExamples">Link 2</a>
          <a href="#DropDownExamples">Link 3</a>
        </div>
      </div>
      </div>
        <div className="block-code">
      <Code type="jsx">
      {`<div className="dropdown">
  <div className="dropbtn">Dropdown <Icon className="drowndownicon" type="right" size="small" /></div>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
</div>`}</Code>
        </div>
      </div>
    </section>
  );
}
