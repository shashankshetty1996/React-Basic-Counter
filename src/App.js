import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <h1
            style={{ textAlign: 'center', margin: '0%', padding: '16px 0px' }}
          >
            React Basics
          </h1>
        </Navbar>
        <div className="container">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
