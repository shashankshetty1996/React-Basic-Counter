import React from 'react';
import Button from '../layout/Button';

const CounterList = props => {
  return (
    <div>
      <Button className="btn-block" click={props.updateList}>
        Save
      </Button>
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
    </div>
  );
};

export default CounterList;
