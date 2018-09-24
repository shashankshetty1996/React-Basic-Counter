import React from 'react';
import Button from '../layout/Button';
import InputFields from '../layout/Input';

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
    props.list.length !== 0 ? (
      ul
    ) : (
      <h1 style={{ textAlign: 'center' }}>Add element to list</h1>
    );
  return (
    <div>
      <Button className="btn-block" click={props.updateList}>
        Save
      </Button>
      <InputFields
        type="text"
        placeholder="Enter Your name"
        name={props.inputName}
        value={props.inputValue}
        onChange={props.onChange}
      />
      {renderMe}
    </div>
  );
};

export default CounterList;
