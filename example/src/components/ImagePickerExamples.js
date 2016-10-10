/* eslint max-len: 0 */

import React from 'react';
import ImagePicker from '../../../src/components/ImagePicker';
import Code from '../../../src/components/Code';

export default function ImagePickerExamples() {
  return (
    <section className="_full-width-row">
      <div className="_container _container_large">
        <h2 className="base--h2">ImagePicker</h2>
        <ImagePicker
          initialPreviewImage={{
            url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=preview%20image&w=200&h=150',
            // url: 'blob:http://localhost:3000/b045e346-d5d1-4728-be1d-9e5709fdd188',
            alt: 'Sample preview',
          }}
          onDropAccepted={(image) => {
            console.log(image);
          }}
          onDropRejected={(image) => {
            console.log(image);
          }}
          onClickTile={(image) => {
            console.log(image);
          }}
          onUrlInputChange={(event) => {
            console.log(event.target.value);
          }}
          onUrlSubmit={(event, url) => {
            event.target.value = '';
            console.dir(url);
            event.target.blur();
          }}
        />
        <Code language="html">
{`<div>
<ul>
<li> foo </li>
<li> bar </li>
</ul>
</div>`}
        </Code>
      </div>
    </section>
  );
}
