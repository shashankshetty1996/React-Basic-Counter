import React from 'react';

const style = {
  div: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'right'
  }
};

const Navbar = props => {
  return (
    <div style={style.div} className="navbar">
      {props.children}
    </div>
  );
};

export default Navbar;
