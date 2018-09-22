import React from 'react';

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

export default Button;
