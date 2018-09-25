import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    userList: []
  };

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          userList: response.data
        });
      })
      .catch(err => {
        console.log('Error in fetching');
      });
  }

  render() {
    let user;
    if (this.state.userList.length !== 0) {
      user = (
        <ul className="list">
          {this.state.userList.map(user => {
            return (
              <li key={user.id}>
                {user.id} {user.username}
              </li>
            );
          })}
        </ul>
      );
    } else {
      user = <h1>No data found</h1>;
    }

    return <Fragment>{user}</Fragment>;
  }
}

export default Users;
