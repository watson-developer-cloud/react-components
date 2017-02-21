import React from 'react';
import { Icon } from './Icon';
import Colors from './Colors.js';

export default function dropdown() {

  return (
    <div>
    <div className="dropdown">
<div className="dropbtn">Dropdown <Icon className="drowndownicon" type="right" size="small" /></div>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
    </div>
  );
}
