const React = require('react');

function Tile(prop) {
  return (
    <button
      className={prop.grayout ? 'image-picker--tile image-picker--tile_unselected' : 'image-picker--tile'}
      onClick={prop.onClick || ''}
      data-id={prop.dataId || ''}
    >
      <div className="image-picker--tile-image-container">
        <div className="content">
          <img
            className="image-picker--tile-image"
            src={prop.image}
            alt={prop.alt}
          />
        </div>
      </div>
    </button>
  );
}

Tile.propTypes = {
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  grayout: React.PropTypes.bool.isRequired,
  dataId: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func,
};

Tile.defaultProps = {
  onClick: () => {},
};

module.exports = Tile;
