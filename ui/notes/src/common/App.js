import React, {Component} from 'react';
import logo from './../logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h1 className="Header">Posit</h1>
        </div>
        <p className="App-intro">
          <img src={logo} className="App-logo" alt="logo"/>
        </p>
      </div>
    );
  }
}

export default App;
