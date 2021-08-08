import { Component } from 'react';
import FetchUser from './components/fetch-user'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchUser></FetchUser>
      </div>
    );
  }
}

export default App;
