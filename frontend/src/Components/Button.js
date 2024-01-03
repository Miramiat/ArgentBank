import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return (
    <button className="sign-in-button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Ajoutez la prop onClick
};

export default Button;
