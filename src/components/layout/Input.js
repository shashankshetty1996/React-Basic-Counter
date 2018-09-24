import React from 'react';
import PropTypes from 'prop-types';

const InputFields = ({ type, name, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

// InputFields.defaultProps = {
//   type: "text"
// }

InputFields.prototype = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputFields;
