const React = require('react');

function Tile(prop) {
  return (
    <div
      className={prop.grayout ? 'input--tile input--tile_unselected' : 'input--tile'}
      onClick={prop.onClick || ''}
      data-id={prop.dataId || ''}
    >
      <div className="input--tile-image-container">
        <div className="content">
          <img
            className="input--tile-image"
            src={prop.image}
            alt={prop.alt}
          />
        </div>
      </div>
    </div>
  );
}

Tile.propTypes = {
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  grayout: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  dataId: React.PropTypes.number,
};

module.exports = Tile;
