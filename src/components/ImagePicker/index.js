import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import Colors from '../Colors';
import ArrowBox from '../ArrowBox';
const Dropzone = require('react-dropzone');

const Tile = require('./Tile');
const InputImageUrl = require('./Url');

export default React.createClass({
  propTypes: {
    error: React.PropTypes.string,

    // Event Handlers
    onClickTile: React.PropTypes.func, // args: image obj this.props.images, index; when file is clicked
    onDrop: React.PropTypes.func, // args: File image; when file is chosen or dragged and dropped
    onDropAccepted: React.PropTypes.func, // args: File image; when file is chosen successfully
    onDropRejected: React.PropTypes.func, // args: File image; when file is chosen unsuccessfully
    onUrlSubmit: React.PropTypes.func,  // when hitting enter as url input is focused
    onUrlInputChange: React.PropTypes.func, // event when url input changes
    onClosePreview: React.PropTypes.func, // event when preview image is closing

    // tile props
    images: React.PropTypes.arrayOf(React.PropTypes.shape({
      url: React.PropTypes.string,
      alt: React.PropTypes.string,
    })).isRequired,

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
    // file chooser input properties
    inputProps: React.PropTypes.object, // eslint-disable-line
    maxSize: React.PropTypes.number,  // max file size
    minSize: React.PropTypes.number,  // min file size
    multiple: React.PropTypes.bool, // option for multiple files
    name: React.PropTypes.string,
    fileError: React.PropTypes.string, // error message on file input

    // url input props
    disableUrlInput: React.PropTypes.bool,  // option to remove url input component
    urlPlaceholder: React.PropTypes.string, // placeholder text for url input
    urlError: React.PropTypes.string, // error message on url input
  },

  getDefaultProps() {
    return {
      images: [0, 1, 2, 3].map((_, i) => ({
        url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97150&w=200&h=150',
        alt: `Sample ${i}`,
      })),
      disablePreviewImage: false,
      initialPreviewImage: null,

      disableFileInput: false,
      accept: 'image/*',
      disableClick: false,
      inputProps: {},
      maxSize: Infinity,
      minSize: 0,
      multiple: false,
      name: 'file-chooser',

      disableUrlInput: false,
      urlPlaceholder: 'Paste an image URL',

      error: null,
      fileError: null,
      urlError: null,
      onClickTile: () => {},
      onDrop: () => {},
      onDropAccepted: () => {},
      onDropRejected: () => {},
      onUrlSubmit: () => {},
      onUrlInputChange: () => {},
      onClosePreview: () => {},
    };
  },

  getInitialState() {
    const state = {
      previewImage: null,  // { url: string, alt: string }
      selectedTile: -1,
      isDragging: false,
    };

    // no image selected
    if (!this.props.initialPreviewImage || this.props.initialPreviewImage === null) {
      return state;
    }

    // image tile is already selected
    const index = this.props.images.map(e => e.url).indexOf(this.props.initialPreviewImage.url);
    if (index !== -1) {
      state.selectedTile = index;
      return state;
    }

    // url image selected
    if (this.props.initialPreviewImage.url) {
      state.previewImage = {
        url: this.props.initialPreviewImage.url,
        alt: this.props.initialPreviewImage.alt || 'User supplied url',
      };
      return state;
    }

    return state;
  },

  componentDidMount() {
    document.addEventListener('dragover', this.onDragOver, false);
    document.addEventListener('dragleave', this.onDragLeave, false);
  },

  componentWillUnmount() {
    document.removeEventListener('dragover', this.onDragOver);
    document.removeEventListener('dragover', this.onDragLeave);
  },

  onDragOver() {
    this.setState({ isDragging: true });
  },

  onDragLeave() {
    this.setState({ isDragging: false });
  },

  onUrlSubmit(event, url) {
    this.setState({
      previewImage: {
        url,
        alt: 'User supplied url',
      },
      selectedTile: -1,
    });
    if (this.props.onUrlSubmit) {
      this.props.onUrlSubmit.call(this, { url });
    }
  },

  onDrop(files) {
    const image = files[0];
    if (this.props.onDrop) {
      this.props.onDrop.call(this, image);
    }
  },

  onDropAccepted(files) {
    const image = files[0];
    this.setState({
      previewImage: { url: image.preview, alt: 'preview image' },
      selectedTile: -1,
      isDragging: false,
    });
    if (this.props.onDropAccepted) {
      this.props.onDropAccepted.call(this, image);
    }
  },

  onDropRejected(files) {
    const image = files[0];
    this.setState({
      previewImage: null,
      selectedTile: -1,
      isDragging: false,
    });
    if (this.props.onDropRejected) {
      this.props.onDropRejected.call(this, image);
    }
  },

  onClickTile(index) {
    this.setState({
      selectedTile: index,
      previewImage: null,
    });
    if (this.props.onClickTile) {
      this.props.onClickTile.call(this, this.props.images[index], index);
    }
  },

  onClosePreview() {
    this.setState({
      previewImage: null,
    });
    if (this.props.onClosePreview) {
      this.props.onClosePreview.call(this);
    }
  },

  // boolean logic for showing preview image or not
  showPreview() {
    return !this.props.disablePreviewImage &&
      this.state.previewImage &&
      !(this.props.fileError || this.props.urlError || this.props.error);
  },

  // boolean logic for showing url input or not
  showUrlInput() {
    // if there is no previewImage, or the previewImage is disabled,
    // and urlInput is not disabled, and there are any error messages,
    // then show the url input
    return (((!this.state.previewImage ||
      (this.state.previewImage && this.disablePreviewImage)) &&
      !this.props.disableUrlInput) ||
      this.props.fileError ||
      this.props.urlError ||
      this.props.error);
  },

  render() {
    return (
      <div className="image-picker--section">
        <div>
          {this.props.images.map((image, index) => (
            <Tile
              grayout={(
                (this.state.previewImage != null) ||
                (this.state.selectedTile > -1 && index !== this.state.selectedTile)
              )}
              image={image.url}
              alt={image.alt}
              key={index}
              // eslint-disable-next-line
              onClick={this.onClickTile.bind(null, index)}
              dataId={index}
            />)
          )}
          {!this.props.disableFileInput ? (
            <div className="image-picker--tile">
              <ArrowBox
                className="image-picker--arrow-box"
                direction="top"
                icon="error"
                color={Colors.red_50}
                width="100%"
                show={Boolean(this.props.fileError)}
              >
                <p className="base--p image-picker--error-message">{this.props.fileError}</p>
              </ArrowBox>
              { this.showPreview() ? (
                <Icon
                  className="image-picker--preview-x"
                  type="close"
                  size="small"
                  onClick={this.onClosePreview}
                />
              ) : null}
              <label
                className={classNames(
                  'image-picker--tile-input-container',
                  { 'image-picker--tile-input-container_error': this.props.fileError }
                )}
                htmlFor="image-picker--file-input"
              >
                { this.showPreview() ? (
                  <div className="image-picker--preview-image-container">
                    <img
                      className="image-picker--preview-image"
                      src={this.state.previewImage.url}
                      alt={this.state.previewImage.alt}
                    />
                  </div>
                  ) : null}
                <Dropzone
                  accept={this.props.accept}
                  className={classNames(
                      'content',
                      'dropzone',
                      { 'dropzone_on-drag': this.state.isDragging }
                  )}
                  disableClick={this.props.disableClick}
                  inputProps={this.props.inputProps}
                  maxSize={this.props.maxSize}
                  minSize={this.props.minSize}
                  multiple={this.props.multiple}
                  name={this.props.name}
                  onDrop={this.onDrop}
                  onDropAccepted={this.onDropAccepted}
                  onDropRejected={this.onDropRejected}
                >
                  <div className="image-picker--tile-input-description">
                    Select or drag an image relative to the shopping category
                  </div>
                  <div className="image-picker--tile-input-icon">
                    <Icon type="plus" size="regular" />
                  </div>
                </Dropzone>
              </label>

              {this.showUrlInput() ? (<InputImageUrl
                onInputChange={this.props.onUrlInputChange}
                onSubmit={this.onUrlSubmit}
                placeholder={this.props.urlPlaceholder}
                error={this.props.urlError}
              />) : null}

            </div>
          ) : null}
        </div>
        {this.props.error ? (
          <ArrowBox
            className="image-picker--arrow-box"
            direction="none"
            icon="error"
            color={Colors.red_50}
            style={{
              display: 'block',
              position: 'relative',
              visibility: 'visible',
              opacity: '1',
              margin: 'auto',
            }}
          >
            <p className="base--p image-picker--error-message">{this.props.error}</p>
          </ArrowBox>
        ) : null}
      </div>
    );
  },
});
