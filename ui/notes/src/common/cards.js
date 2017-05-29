import React, { Component } from 'react';

const randomColor = ['blue-grey', 'yellow', 'red', 'green', 'purple', 'indigo', 'cyan', 'lime']

class cards extends Component {
  render() {
    const cardColor = randomColor[Math.floor(Math.random() * randomColor.length)]
    return (
      <div className="hoverable card-view">
        <div className="col s12 m3">
          <div className={`card ${cardColor} darken-1`}>
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
