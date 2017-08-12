import React from 'react';
import PropTypes from 'prop-types';

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
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  grayout: PropTypes.bool.isRequired,
  dataId: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Tile.defaultProps = {
  onClick: () => {},
};

module.exports = Tile;
