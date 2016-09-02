const React = require('react');

function Left(props) {
  const fill = props.fill || '#000';
  const width = props.width || '1rem';
  const height = props.height || '1rem';
  return (
    <svg
      viewBox="0 0 16.2 26.8"
      enableBackground="new 0 0 16.2 26.8"
      width={width}
      height={height}
      aria-labelledby="Left"
      className="icon"
    >
      <path
        fill={fill}
        d="M13.4,0L0,13.4l13.4,13.4l2.8-2.8L5.7,13.4L16.2,2.8L13.4,0z"
      />
    </svg>
  );
}

Left.propTypes = {
  fill: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

module.exports = Left;
