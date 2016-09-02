const React = require('react');

const Plus = require('../../Icons/Plus');

function Input(prop) {
  const images = prop.images || [
    '/images/sample-image.jpg',
    '/images/sample-image.jpg',
    '/images/sample-image.jpg',
    '/images/sample-image.jpg',
  ];

  return (
    <div className="input--section">
      <h3 className="base--h3 input--title">Let's go shopping</h3>
      {images.map((image) => (
        <div className="input--tile">
          <div className="input--tile-image-container">
            <div className="content">
              <img
                className="input--tile-image"
                src={image}
                alt="Sample input"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="input--tile">
        <div className="input--tile-input-container">
          <div className="content">
            <div className="input--tile-input-description">
              Select an image relative to the shopping category
            </div>
            <div className="input--tile-input-icon">
              <Plus />
            </div>
          </div>
        </div>
        <input
          className="input--url-input base--input"
          type="text"
          placeholder="Paste an image URL"
        />
      </div>
    </div>
  );
}

module.exports = Input;
