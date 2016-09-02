const React = require('react');

function Pane(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}


Pane.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

module.exports = Pane;
