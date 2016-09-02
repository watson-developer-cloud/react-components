const React = require('react');

function Alert(props) {
  const fill = props.fill || '#D64527';
  return (
    <svg
      viewBox="0 0 60 60"
      enableBackground="new 0 0 60 60"
      aria-labelledby="Alert"
    >
      <path
        fill={fill} d="M30,60C13.4,60,0,46.6,0,30c0-16.5,13.4-30,
         30-30c16.5,0,30,13.4,30,30C59.9,46.6,46.5,60,30,60z M30,3.8
         C15.5,3.8,3.7,15.6,3.7,30S15.5,56.3,30,56.3S56.2,44.5,56.2,30S44.4,3.8,30,3.8z"
      />
      <polygon
        fill={fill}
        points="26.3,11.6 26.3,19 28.1,37.4 31.8,37.4 33.6,19 33.6,11.6 "
      />
      <circle fill={fill} cx="30" cy="44.8" r="3.7" />
    </svg>
  );
}

Alert.propTypes = {
  fill: React.PropTypes.string,
};

module.exports = Alert;
