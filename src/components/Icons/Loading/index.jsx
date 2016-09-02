const React = require('react');

function Loading() {
  return (
    <svg
      viewBox="25 25 50 50"
      className="loader"
    >
      <circle cx="50" cy="50" r="20" className="loader--path" />
    </svg>
  );
}

module.exports = Loading;
