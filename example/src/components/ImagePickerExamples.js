/* eslint max-len: 0 */

import React from 'react';
import ImagePicker from '../../../src/components/ImagePicker';
import TextInput from '../../../src/components/TextInput';
import Code from '../../../src/components/Code';

export default React.createClass({
  getInitialState() {
    return {
      urlError: null,
      fileError: null,
      error: null,
    };
  },

  render() {
    return (
      <section id="ImagePicker">
        <h2 className="base--h2">ImagePicker</h2>
        <ImagePicker />
        <Code language="html">
{'<ImagePicker />'}
        </Code>

        <h3 className="base--h3">ImagePicker with errors</h3>
        <ImagePicker
          urlError={this.state.urlError}
          fileError={this.state.fileError}
          error={this.state.error}
        />

        <p className="base--p">Regular Error</p>
        <TextInput
          onInput={(e) => {
            this.setState({ error: e.target.value });
          }}
          placeholder="Type a message for a regular error"
        />
        <p className="base--p">File Error</p>
        <TextInput
          onInput={(e) => {
            this.setState({ fileError: e.target.value });
          }}
          placeholder="Type a message for a file error"
        />
        <p className="base--p">Url Error</p>
        <TextInput
          onInput={(e) => {
            this.setState({ urlError: e.target.value });
          }}
          placeholder="Type a message for a url error"
        />

        <Code language="html">
{`<ImagePicker
  urlError={this.state.urlError}
  fileError={this.state.fileError}
  error={this.state.error}
/>`}
        </Code>

        <p className="base--p">Properties</p>
        <Code language="js">
{`{
  // Event Handlers
  onClickTile: React.PropTypes.func, // args: image obj this.props.images, index; when file is clicked
  onDrop: React.PropTypes.func, // args: File image; when file is chosen or dragged and dropped
  onDropAccepted: React.PropTypes.func, // args: File image; when file is chosen successfully
  onDropRejected: React.PropTypes.func, // args: File image; when file is chosen unsuccessfully
  onUrlSubmit: React.PropTypes.func,  // when hitting enter as url input is focused
  onUrlInputChange: React.PropTypes.func, // event when url input changes

  // tile props
  images: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    alt: React.PropTypes.string,
  })),

  // preview tile props
  disablePreviewImage: React.PropTypes.bool,
  initialPreviewImage: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
  }), // have component display a preview image by default

  // file input props
  // detailed documentation on dropzone properties can be found at
  // https://github.com/okonet/react-dropzone
  disableFileInput: React.PropTypes.bool, // option to remove File Input / Dropzone component
  accept: React.PropTypes.string, // accepted filetypes
  disableClick: React.PropTypes.bool, // option to make dropzone clickable or not
  inputProps: React.PropTypes.object, // file chooser input properties
  maxSize: React.PropTypes.number,  // max file size
  minSize: React.PropTypes.number,  // min file size
  multiple: React.PropTypes.bool, // option for multiple files
  name: React.PropTypes.string,
  fileError: React.PropTypes.string, // error message on file input

  // url input props
  disableUrlInput: React.PropTypes.bool,  // option to remove url input component
  urlPlaceholder: React.PropTypes.string, // placeholder text for url input
  urlError: React.PropTypes.string, // error message on url input
}`}
        </Code>
      </section>
    );
  },
});
