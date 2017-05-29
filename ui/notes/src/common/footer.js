import React, { Component } from 'react';

class footer extends Component {

  render() {
    return (
      <footer className="page-footer blue">
          <div className="container l2 s12">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Posit</h5>
                <p className="grey-text text-lighten-4">Designed for Prolific you</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright to Posit
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
  }

}

export default footer;
