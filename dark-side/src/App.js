import React from 'react';
import './App.css';
import axios from "axios";
// step 1: build out components and think about layout
// step 2: install axios in your dark-side file and import it
// step 3: change app to a class component - use constructor and super
// set initial state to an empty array assigned the name characters
// put a render surrounding your return statement
// step 4: create a componentDidMount and put axios call inside there

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  };

  componentDidMount() {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      this.setState({
        characters: res.data
      })
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>"The Force will be with you. Always" - Obi-Wan Kenobi</h1>
      </div>
    );
  }
}

export default App;
