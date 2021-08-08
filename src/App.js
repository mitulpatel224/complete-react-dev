import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], search: '' }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value })
  }

  render() {
    return (
      <div className="App">
        {/* <FetchUser></FetchUser> */}
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={this.state.monsters} search={this.state.search}></CardList>
      </div >
    );
  }
}

export default App;
