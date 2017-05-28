import React, {Component} from 'react';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Posit</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="#">Notes</a>
              </li>
              <li>
                <a href="#">Add</a>
              </li>
              <li>
                <a href="#">Login / Signup</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="App-intro">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
    );
  }
}

export default App;
