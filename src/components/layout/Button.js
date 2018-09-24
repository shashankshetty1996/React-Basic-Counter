import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  let classNames;
  if (props.className) {
    classNames = 'btn ' + props.className;
  } else {
    classNames = 'btn';
  }

  return (
    <button className={classNames} onClick={() => props.click(props.changeBy)}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  changeBy: 0
};

Button.protoTypes = {
  className: PropTypes.string,
  changeBy: PropTypes.number,
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default Button;
