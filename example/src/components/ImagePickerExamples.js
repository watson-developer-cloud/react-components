/* eslint max-len: 0 */
import React from 'react';
import ImagePicker from '../../../src/components/ImagePicker';
import TextInput from '../../../src/components/TextInput';
import Code from '../../../src/components/Code';

export default class ImagePickerExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlError: null,
      fileError: null,
      error: null,
    };
  }

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
  onClickTile: PropTypes.func, // args: image obj this.props.images, index; when file is clicked
  onDrop: PropTypes.func, // args: File image; when file is chosen or dragged and dropped
  onDropAccepted: PropTypes.func, // args: File image; when file is chosen successfully
  onDropRejected: PropTypes.func, // args: File image; when file is chosen unsuccessfully
  onUrlSubmit: PropTypes.func,  // when hitting enter as url input is focused
  onUrlInputChange: PropTypes.func, // event when url input changes

  // tile props
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  })),

  // preview tile props
  disablePreviewImage: PropTypes.bool,
  initialPreviewImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }), // have component display a preview image by default

  // file input props
  // detailed documentation on dropzone properties can be found at
  // https://github.com/okonet/react-dropzone
  disableFileInput: PropTypes.bool, // option to remove File Input / Dropzone component
  accept: PropTypes.string, // accepted filetypes
  disableClick: PropTypes.bool, // option to make dropzone clickable or not
  inputProps: PropTypes.object, // file chooser input properties
  maxSize: PropTypes.number,  // max file size
  minSize: PropTypes.number,  // min file size
  multiple: PropTypes.bool, // option for multiple files
  name: PropTypes.string,
  fileError: PropTypes.string, // error message on file input

  // url input props
  disableUrlInput: PropTypes.bool,  // option to remove url input component
  urlPlaceholder: PropTypes.string, // placeholder text for url input
  urlError: PropTypes.string, // error message on url input
}`}
        </Code>
      </section>
    );
  }
}
