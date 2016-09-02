const React = require('react');

function Reset(props) {
  const fill = props.fill || '#000';
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
    >
      <path
        fill={fill}
        d="M19,5C12.4,5,7,10.4,7,17v6.6l-4.3-4.3l-1.4,1.4L8,
          27.4l6.7-6.7l-1.4-1.4L9,23.6V17c0-5.5,4.5-10,10-10s10,
          4.5,10,10 c0,2.7-1,5.2-2.9,7.1l1.4,1.4c2.3-2.3,3.5-5.3,3.5-8.5C31,
          10.4,25.6,5,19,5z"
      />
    </svg>
  );
}

Reset.propTypes = {
  fill: React.PropTypes.string,
};

module.exports = Reset;
