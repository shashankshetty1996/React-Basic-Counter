import React from 'react';
import Button from '../layout/Button';

const CounterList = props => {
  let ul = (
    <ul className="list">
      {props.list.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => {
              props.removeList(item.id);
            }}
          >
            {item.counter}
          </li>
        );
      })}
    </ul>
  );

  const renderMe =
    props.list.length !== 0 ? ul : <h1 style={{ textAlign: 'center' }} />;
  return (
    <div>
      <Button className="btn-block" click={props.updateList}>
        Save
      </Button>
      {renderMe}
    </div>
  );
};

export default CounterList;
