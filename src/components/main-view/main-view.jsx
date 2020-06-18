import React from 'react';
import axios from 'axios';

class MainView extends React.Component{
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {};
  }

  render() {
    return (
      <div className="main-view"></div>
    );
  }
}