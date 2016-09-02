const React = require('react');

function Image(prop) {
  return (
    <div className="similar-images--tile">
      <div className="similar-images--tile-image-container">
        <div className="content">
          <img
            className="similar-images--tile-image"
            src={prop.image_file || 'images/sample-image.jpg'}
            alt={prop.image_id}
          />
        </div>
      </div>
      <div className="similar-images--graph">
        <div className="similar-images--graph-bar">
          <div
            className="similar-images--graph-percent"
            style="width: 84%"
          />
        </div>
        <div className="similar-images--label">0.84</div>
      </div>
    </div>
  );
}

Image.propTypes = {
  image_file: React.PropTypes.string.isRequired,
  image_id: React.PropTypes.string.isRequired,
};

module.exports = Image;
