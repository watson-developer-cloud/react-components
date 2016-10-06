const React = require('react');
const Dropzone = require('react-dropzone');
const $ = require('jquery');

const Tile = require('./Tile');
const InputImageUrl = require('./Url');

const Icon = require('../Icon');

const Input = React.createClass({
  propTypes: {
    images: React.PropTypes.arrayOf(React.PropTypes.shape({
      url: React.PropTypes.string,
      alt: React.PropTypes.string,
    })),
    onClassify: React.PropTypes.func,
    onError: React.PropTypes.func,
    selectedImage: React.PropTypes.object,
    preview: React.PropTypes.bool,
  },

  getDefaultProps: () => ({
    // eslint-disable-next-line
    images: [0, 1, 2, 3].map((_, i) => {
      return {
        url: `/images/samples/${i}.png`,
        alt: `Sample-${i}`,
      };
    }),
  }),

  getInitialState() {
    // no image selected
    if (!this.props.selectedImage || this.props.selectedImage === null) {
      return { selectedTile: -1, userImage: null };
    }
    const index = this.props.images.map((e) => e.url).indexOf(this.props.selectedImage.url);

    if (index !== -1) {
      // sample image selected
      return { selectedTile: index };
    }
    // url image selected
    if (this.props.selectedImage.url) {
      return {
        userImage: {
          preview: this.props.selectedImage.url,
          name: 'User supplied url',
        },
      };
    }

    if (!{}.hasOwnProperty.call(this.props.selectedImage, 'get')) {
      // safari doesn't support FormData.get so we will skip saving the image
      return { name: 'User uploaded' };
    }
    // upload image selected
    return {
      userImage: this.props.selectedImage.get('image'),
    };
  },

  componentDidMount() {
    $(document).on('dragover', () => {
      $('.dropzone').addClass('dropzone_on-drag');
    });

    $(document).on('dragleave', () => {
      $('.dropzone').removeClass('dropzone_on-drag');
    });
  },

  componentWillUnmount() {
    $(document).off('dragover');
    $(document).off('dragleave');
  },

  onImageUrl(url) {
    // if (this.props.selectedImage && this.props.selectedImage.url) {
    this.setState({
      userImage: {
        preview: url,
        name: 'User supplied url',
      },
      selectedTile: -1,
    });
    this.props.onClassify({ url });
    // }
  },

  onImageDrop(files) {
    const image = files[0];
    this.setState({
      userImage: image,
      selectedTile: -1,
    });
    const formData = new FormData();
    formData.append('image', image);
    this.props.onClassify(formData);
    $('.dropzone').removeClass('dropzone_on-drag');
  },

  onImageDropRejected(files) {
    const image = files[0];
    if (image.type !== 'image/png' &&
        image.type !== 'image/x-png' &&
        image.type !== 'image/jpeg' &&
        image.type !== 'image/jpg' &&
        image.type !== 'image/gif') {
      this.props.onError('Only JPGs, PNGs, and GIFs are supported');
    }
    if (image.size > 2000000) {
      this.props.onError('Ensure the image is under 2mb');
    }
    this.setState({
      userImage: null,
      selectedTile: -1,
    });
    $('.dropzone').removeClass('dropzone_on-drag');
  },

  onClickTile(index) {
    this.setState({
      selectedTile: index,
      userImage: null,
    });

    this.props.onClassify(this.props.images[index]);
  },

  render() {
    return (
      <div className="input--section">
        <h3 className="base--h3 input--title">Let's go shopping</h3>
        {this.props.images.map((image, index) => (
          <Tile
            grayout={(
              (this.state.userImage != null) ||
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
        {this.state.userImage && this.props.preview ? (
          <Tile
            grayout={false}
            image={this.state.userImage.preview}
            alt={this.state.userImage.name}
          />
        ) : null}
        <div className="input--tile">
          <label className="input--tile-input-container" htmlFor="input--file-input">
            <Dropzone
              multiple={false}
              className="content dropzone"
              // onDrop={this.onImageDrop}
              // onDropRejected={this.onImageDropRejected}
              maxSize={2000000}
              accept=".png, .gif, .jpg, .jpeg,
                image/png, image/x-png, image/gif, image/jpeg, image/jpg"
            >
              <div className="input--tile-input-description">
                Select or drag an image relative to the shopping category
              </div>
              <div className="input--tile-input-icon">
                <Icon type="plus" size="regular" />
              </div>
            </Dropzone>
          </label>
          <InputImageUrl onImageUrl={this.onImageUrl} />
        </div>
      </div>
    );
  },
});

export default Input;
