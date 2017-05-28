import React, { Component } from 'react';

class cards extends Component {

  render() {
    return (
      <div className="hoverable card-view">
        <div className="col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn">Update</a>
              <a className="waves-effect waves-light btn red">Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default cards;
