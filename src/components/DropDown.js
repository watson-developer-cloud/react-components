import React from 'react';
import { Icon } from './Icon';
import Colors from './Colors.js';

export default function dropdown() {

  return (
    <div>
    <div className="dropdown">
    <button className="dropbtn">Dropdown</button>
    <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
    </div>
    </div>
  );
}
