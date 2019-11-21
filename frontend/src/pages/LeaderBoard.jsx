import React, { Component } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Title
} from '../styled-components/leaderboard.styled-components';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList: [],
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>Leaderboard</Title>
              
            </div>
          </div>
        </div>

      </>
    );
  }
}
