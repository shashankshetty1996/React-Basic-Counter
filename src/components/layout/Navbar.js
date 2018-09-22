import React from 'react';

const style = {
  div: {
    backgroundColor: 'black',
    color: 'white'
  }
};

const Navbar = props => {
  return <div style={style.div}>{props.children}</div>;
};

export default Navbar;
