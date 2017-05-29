import React, {Component} from 'react';
import Cards from './common/cards';
import Footer from './common/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
