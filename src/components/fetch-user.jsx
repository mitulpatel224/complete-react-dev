import { Component } from 'react';

class FetchUser extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
  }
  render() {
    return (
      <div className="App">
        {
          this.state.users.map(user =>
            <h2 key={user.id}>{user.name}</h2>
          )
        }
      </div>
    );
  }
}

export default FetchUser;
