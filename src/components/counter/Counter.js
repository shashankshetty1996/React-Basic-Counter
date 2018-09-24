import React, { Component, Fragment } from 'react';
import uuid from 'uuid';

import CounterButton from './CounterButton';
import CounterList from './CounterList';

export default class Counter extends Component {
  state = {
    counter: 0,
    changeBy: 5,
    counterList: [],
    input: ''
  };

  updateList = () => {
    // Get the counter List
    let updList = [...this.state.counterList];
    // Prepare item {id: 'Unique ID', counter: 'value of counter in the state', username: value from input state}
    let item = {
      id: uuid(),
      counter: this.state.counter,
      username: this.state.input
    };

    // Add the element to list
    updList.push(item);

    // Update the state
    this.setState({
      ...this.state,
      counterList: updList
    });
  };

  removeList = id => {
    // console.log(`Element id is ${id}`);
    // Get the counter List
    let updList = [...this.state.counterList];
    // By filter remove the clicked item by id
    updList = updList.filter(item => item.id !== id);

    // updList = updList.filter((item) => {
    //   if(item.id === id) {
    //     return false
    //   } else {
    //     return true
    //   }
    // });

    // Update the state
    this.setState({
      ...this.state,
      counterList: updList
    });
  };

  increaseCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    this.setState(prevState => {
      return {
        ...this.state,
        counter: prevState.counter + 1
      };
    });
  };

  decreaseCounter = () => {
    // this.setState({
    //   counter: this.state.counter - 1
    // });
    this.setState(prevState => {
      return {
        ...prevState.state,
        counter: prevState.counter - 1
      };
    });
  };

  changeCounter = value => {
    this.setState(prevState => {
      return {
        ...prevState.state,
        counter: prevState.counter + value
      };
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h4>Counter: {this.state.counter}</h4>
        </div>
        <CounterButton
          increase={this.increaseCounter}
          decrease={this.decreaseCounter}
          changeCounter={this.changeCounter}
          changeBy={this.state.changeBy}
        />
        <CounterList
          list={this.state.counterList}
          updateList={this.updateList}
          removeList={this.removeList}
          inputName="input"
          inputValue={this.state.input}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}
