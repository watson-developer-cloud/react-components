const React = require('react');

function Up(props) {
  const fill = props.fill || '#000';
  const width = props.width || '1rem';
  const height = props.height || '1rem';

  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 26.8 16.2"
      enableBackground="new 0 0 26.8 16.2"
      width={width}
      height={height}
      className="icon"
    >
      <path
        fill={fill}
        d="M26.8,13.4L13.4,0L0,13.4l2.8,2.8L13.4,5.7L24,16.2L26.8,13.4z"
      />
    </svg>
  );
}

Up.propTypes = {
  fill: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

module.exports = Up;
