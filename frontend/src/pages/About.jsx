import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
    };
  }

  render() {
    return (
      <>
        <h1>About page</h1>
      </>
    );
  }
}
