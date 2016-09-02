const React = require('react');

function Info(props) {
  const fill = props.fill || '#000';
  return (
    <svg
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      aria-labelledby="Info"
    >
      <path
        fill={fill}
        d="M18,14h-6v2h2v6h-2v2h8v-2h-2V14z
        M16,8c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S14.9,8,16,8z
        M16,2C8.3,2,2,8.3,2,16 s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z
        M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12S22.6,28,16,28z"
      />
    </svg>
  );
}

Info.propTypes = {
  fill: React.PropTypes.string,
};

module.exports = Info;
