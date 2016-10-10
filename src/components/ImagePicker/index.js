import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
const Dropzone = require('react-dropzone');

const Tile = require('./Tile');
const InputImageUrl = require('./Url');

export default React.createClass({
  propTypes: {
    error: React.PropTypes.string,

    // tile props
    images: React.PropTypes.arrayOf(React.PropTypes.shape({
      url: React.PropTypes.string,
      alt: React.PropTypes.string,
    })),
    onClickTile: React.PropTypes.func, // args: image obj this.props.images, index

    // preview tile props
    initialPreviewImage: React.PropTypes.shape({
      url: React.PropTypes.string.isRequired,
      alt: React.PropTypes.string,
    }), // have component display a preview image by default

    // file input props
    // detailed documentation on dropzone properties can be found at
    // https://github.com/okonet/react-dropzone
    onDrop: React.PropTypes.func, // args: File image
    onDropAccepted: React.PropTypes.func, // args: File image
    onDropRejected: React.PropTypes.func, // args: File image
    accept: React.PropTypes.string,
    disableClick: React.PropTypes.bool,
    inputProps: React.PropTypes.object,
    maxSize: React.PropTypes.number,
    minSize: React.PropTypes.number,
    multiple: React.PropTypes.bool,
    name: React.PropTypes.string,
    fileError: React.PropTypes.string, // error message on file input

    // url input props
    onUrlSubmit: React.PropTypes.func,  // when hitting enter as url input is focused
    onUrlInputChange: React.PropTypes.func, // event when url input changes
    urlPlaceholder: React.PropTypes.string, // placeholder text for url input
    urlError: React.PropTypes.string, // error message on url input
  },

  getDefaultProps: () => ({
    // eslint-disable-next-line
    images: [0, 1, 2, 3].map((_, i) => {
      return {
        url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97150&w=200&h=150',
        alt: `Sample ${i}`,
      };
    }),
    initialPreviewImage: null,

    accept: 'image/*',
    disableClick: false,
    inputProps: {},
    maxSize: Infinity,
    minSize: 0,
    multiple: false,
    name: 'file-chooser',

    urlPlaceholder: 'Paste an image URL',
  }),

  getInitialState() {
    let state = {
      previewImage: null,  // { url: string, alt: string }
      selectedTile: -1,
      isDragging: false,
    };

    // no image selected
    if (!this.props.initialPreviewImage || this.props.initialPreviewImage === null) {
      return state;
    }

    // image tile is already selected
    const index = this.props.images.map((e) => e.url).indexOf(this.props.initialPreviewImage.url);
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

  render() {
    return (
      <div className="input--section">
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
        {this.state.previewImage ? (
          <Tile
            grayout={false}
            image={this.state.previewImage.url}
            alt={this.state.previewImage.alt}
          />
        ) : null}
        <div className="input--tile">
          <label className="input--tile-input-container" htmlFor="input--file-input">
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
              <div className="input--tile-input-description">
                Select or drag an image relative to the shopping category
              </div>
              <div className="input--tile-input-icon">
                <Icon type="plus" size="regular" />
              </div>
            </Dropzone>
          </label>
          <InputImageUrl
            onInputChange={this.props.onUrlInputChange}
            onSubmit={this.onUrlSubmit}
            placeholder={this.props.urlPlaceholder}
          />
        </div>
      </div>
    );
  },
});
