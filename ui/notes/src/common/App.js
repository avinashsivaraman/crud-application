import React, {Component} from 'react';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="Header">Posit</h1>
        </div>
        <div className= 'block' />
        <div className="App-intro">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
