import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../layout/Button';

const CounterButton = props => {
  return (
    <Fragment>
      <p style={{ textAlign: 'center', color: 'grey' }}>
        Change Counter values on click of this events
      </p>
      <div style={{ width: '80%', margin: '16px auto', textAlign: 'center' }}>
        {/* <button className="btn" onClick={() => props.changeCounter(changeBy)}>
          Increase
        </button> */}
        {/* <button className="btn" onClick={props.changeCounter.bind(this, 10)}>
          Increase
        </button> */}
        {/* <button className="btn" onClick={props.increase}>
          Increase
        </button> */}
        {/* <button className="btn" onClick={props.decrease}>
          Decrease
        </button> */}
        {/* <button className="btn" onClick={() => props.changeCounter(-changeBy)}>
          Decrease
        </button> */}

        <Button click={props.changeCounter} changeBy={props.changeBy}>
          Increase
        </Button>
        <Button click={props.changeCounter} changeBy={-props.changeBy}>
          Decrease
        </Button>
      </div>
    </Fragment>
  );
};

CounterButton.defaultProps = {
  changeBy: 3
};

CounterButton.protoTypes = {
  changeBy: PropTypes.number,
  changeCounter: PropTypes.func.isRequired
};

export default CounterButton;
