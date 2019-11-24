import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';
import {
  Title,
  PastMatches,
  PastMatchesBody,
  List,
  LoadingAllContent,
} from '../styled-components/past-matches.styled-components';

import PastMatchesList from '../components/UI/list/PastMatchesList.component';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      page: 1,
      hasMore: null,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstGames = this.getFirstGames.bind(this);
    // this.getMoreGames = this.getMoreGames.bind(this);
  }

  async componentDidMount() {
    const gamesList = await this.getFirstGames();
    let more = true;
    if (gamesList.length < 10) {
      more = false;
    }
    await this.setStateAsync({
      gamesList,
      hasMore: more,
    });
  }

  async getFirstGames() {
    // const { page } = this.state;
    this.response = await fetch('http://localhost:5000/games/', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    const { gamesList, hasMore } = this.state;
    let allGames;
    if (gamesList.length === 0) {
      allGames = (
        <>
          <LoadingAllContent>
            <FaSpinner
              style={{
                color: '#fff',
              }}
            />
          </LoadingAllContent>
        </>
      );
    } else {
      allGames = (
        <>
          <List>
            <InfiniteScroll
              dataLength={gamesList.length}
              next={this.getMorePodcasts}
              hasMore={hasMore}
            >
              {
            gamesList.reverse().map((game, key) => (
              <PastMatchesList
                key={key}
                playerName={game.rounds[0].player.name}
                totalBalance={game.totalBalance}
                playedOn={game.playedOn}
              />
            ))
            }
            </InfiniteScroll>
          </List>
        </>
      );
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>Past Matches</Title>
              <PastMatches>
                <PastMatchesBody>
                  <ul
                    style={{
                      display: 'table',
                      margin: '0 auto',
                      color: '#fff',
                      textTransform: 'uppercase',
                      fontSize: '13px',
                      fontWeight: '900',
                    }}
                  >
                    <li
                      style={{
                        display: 'inline',
                        position: 'absolute',
                        top: '29px',
                        left: '93px',
                      }}
                    >
Player Name
                    </li>
                    <li
                      style={{
                        display: 'inline',
                        position: 'absolute',
                        top: '29px',
                        left: '246px',
                      }}
                    >
Total Balance
                    </li>
                    <li
                      style={{
                        display: 'inline',
                        position: 'absolute',
                        top: '29px',
                        left: '447px',
                      }}
                    >
Date
                    </li>
                  </ul>
                  <List>
                    {allGames}
                  </List>
                </PastMatchesBody>
              </PastMatches>
            </div>
          </div>
        </div>

      </>
    );
  }
}
