import React, { Component, Fragment } from 'react';
import CounterButton from './CounterButton';
import CounterList from './CounterList';

export default class Counter extends Component {
  state = {
    counter: 0,
    changeBy: 5,
    counterList: []
  };

  updateList = () => {
    // Get the counter List
    let updList = [...this.state.counterList];
    // Prepare item {id: 'length of the counter', counter: 'value of counter in the state'}
    let item = { id: updList.length, counter: this.state.counter };

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
        counter: prevState.counter + 1
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
        />
      </Fragment>
    );
  }
}
