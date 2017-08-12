import React from 'react';
import PropTypes from 'prop-types';

export default function Pane(props) {
  return (
    <div data-id={props.label}>
      {props.children}
    </div>
  );
}

Pane.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};
