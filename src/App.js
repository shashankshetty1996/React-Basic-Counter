import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar>
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/users" exact>
              Users
            </NavLink>
          </Navbar>
          {/* <Navbar>
            <Link to="/" exact>
              Home
            </Link>
            <Link to="/users" exact>
              Users
            </Link>
          </Navbar> */}
          <div className="container">
            {/* <Route path="/" exact component={Counter} />
            <Route path="/users" exact component={User} /> */}
            <Switch>
              <Route path="/" exact component={Counter} />
              <Route path="/users" exact component={User} />
            </Switch>
            {/* <User />
            <Counter /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
