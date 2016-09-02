const React = require('react');

function IBM(props) {
  const fill = props.fill || '#131414';
  return (
    <svg
      x="0px"
      y="0px"
      width="69.9px"
      height="28.4px"
      viewBox="0 0 69.9 28.4"
      enableBackground="new 0 0 69.9 28.4"
      aria-labelledby="IBM"
      className="icon"
    >
      <g>
        <path fill={fill} d="M43.4,7.6v1.9h10.1c-0.2-0.7-0.3-1.1-0.6-1.9" />
        <polyline fill={fill} points="66.1,9.5 66.1,7.6 56.6,7.6 56,9.5  " />
        <path fill={fill} d="M54.1,11.4h-5c0,0,0.5,1.5,0.6,1.9h5C54.8,13.2,54.2,11.7,54.1,11.4" />
        <polyline fill={fill} points="59.8,13.2 60.4,11.4 55.4,11.4 54.8,13.2  " />
        <path fill={fill} d="M51,17h7.5l0.6-1.9h-8.8C50.6,15.8,50.7,16.2,51,17" />
        <rect x="43.4" y="18.9" fill={fill} width="5.7" height="1.9" />
        <rect x="60.4" y="18.9" fill={fill} width="5.7" height="1.9" />
        <rect x="43.4" y="15.1" fill={fill} width="5.7" height="1.9" />
        <rect x="60.4" y="15.1" fill={fill} width="5.7" height="1.9" />
        <rect x="43.4" y="11.4" fill={fill} width="5.7" height="1.9" />
        <rect x="60.4" y="11.4" fill={fill} width="5.7" height="1.9" />
        <rect x="39.7" y="22.7" fill={fill} width="9.4" height="1.9" />
        <rect x="39.7" y="26.5" fill={fill} width="9.4" height="1.9" />
        <rect x="18.9" y="18.9" fill={fill} width="5.7" height="1.9" />
        <rect x="18.9" y="7.6" fill={fill} width="5.7" height="1.9" />
        <rect x="3.8" y="18.9" fill={fill} width="5.7" height="1.9" />
        <rect x="3.8" y="15.1" fill={fill} width="5.7" height="1.9" />
        <rect x="3.8" y="11.4" fill={fill} width="5.7" height="1.9" />
        <rect x="3.8" y="7.6" fill={fill} width="5.7" height="1.9" />
        <rect x="0" y="22.7" fill={fill} width="13.2" height="1.9" />
        <rect x="0" y="26.5" fill={fill} width="13.2" height="1.9" />
        <rect x="0" y="0" fill={fill} width="13.2" height="1.9" />
        <rect x="0" y="3.8" fill={fill} width="13.2" height="1.9" />
        <path fill={fill} d="M39.7,0v1.9H51c-0.3-0.8-0.4-1.2-0.6-1.9" />
        <path fill={fill} d="M39.7,3.8v1.9h12.6c-0.3-0.9-0.3-1-0.6-1.9" />
        <polyline fill={fill} points="69.9,0 59.2,0 58.5,1.9 69.9,1.9  " />
        <polyline fill={fill} points="69.9,5.7 69.9,3.8 57.9,3.8 57.3,5.7  " />
        <rect x="60.4" y="22.7" fill={fill} width="9.4" height="1.9" />
        <rect x="60.4" y="26.5" fill={fill} width="9.4" height="1.9" />
        <path fill={fill} d="M54.8,28.4l0.6-1.9h-1.3C54.2,26.9,54.8,28.4,54.8,28.4" />
        <path fill={fill} d="M53.5,24.6H56l0.6-1.9h-3.8C53.1,23.6,53.3,24,53.5,24.6" />
        <path fill={fill} d="M52.2,20.8h5l0.6-1.9h-6.3C51.9,19.9,51.9,19.9,52.2,20.8" />
        <path fill={fill} d="M35.2,15.1H18.9V17h17.9C36.3,16.3,35.8,15.7,35.2,15.1" />
        <path fill={fill} d="M30.2,20.8h7.5c0-0.7-0.1-1.3-0.2-1.9h-7.3" />
        <path fill={fill} d="M15.1,24.6h21.6c0.3-0.6,0.6-1.2,0.8-1.9H15.1" />
        <path fill={fill} d="M15.1,28.4h15.1c1.9,0,3.7-0.7,5-1.9H15.1" />
        <path fill={fill} d="M18.9,13.2h16.3c0.6-0.5,1.1-1.2,1.5-1.9H18.9" />
        <path fill={fill} d="M30.2,9.5h7.3c0.2-0.6,0.2-1.2,0.2-1.9h-7.5" />
        <path fill={fill} d="M15.1,0v1.9h20.1c-1.3-1.2-3.1-1.9-5-1.9" />
        <path fill={fill} d="M15.1,5.7h22.4c-0.2-0.7-0.4-1.3-0.8-1.9H15.1" />
      </g>
    </svg>
  );
}

IBM.propTypes = {
  fill: React.PropTypes.string,
};

module.exports = IBM;
