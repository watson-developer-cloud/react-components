import React from 'react';
import Code from '../../../src/components/Code';

/* eslint-disable react/jsx-indent */
export default function GettingStarted() {
  return (
    <div>
        <h1 id="#getting-started" className="base--h1">Installation</h1>

        <h2 className="base--h2">npm</h2>
        <Code type="bash">
          npm install watson-react-components --save
        </Code>
        <p className="base--p">
          Add components to your React file where needed:
        </p>
        <Code type="jsx">
{'import { Header, Jumbotron, Code, Tabs } from \'watson-react-components/dist/components\';'}
        </Code>
        <p className="base--p">
          Add a reference to the stylesheet:
        </p>
        <Code type="markup">
{`<!-- HTML if you use Gulp or Grunt -->
<link
  rel="stylesheet"
  type="text/css"
  href="./node_modules/watson-react-components/dist/css/
  watson-react-components.min.css"
>`}
        </Code>

        <h2 className="base--h2">Browser</h2>
        <Code type="markup">
{`<script src="https://unpkg.com/watson-react-components@0.0.1/dist/js/watson-react-components.min.js"></script>
<link href="https://unpkg.com/watson-react-components@0.0.1/dist/css/watson-react-components.min.css" rel="stylesheet" type="text/css" />
`}
        </Code>
        <p className="base--p">
          To use components that use images, make sure that the image files are
          correctly referenced in your project relative to the CSS output file.
        </p>
    </div>
  );
}
