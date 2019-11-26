import React, { Component } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';
import {
  Title,
  PastMatches,
  PastMatchesBody,
  List,
  LoadingAllContent,
  Label,
  LabelLiName,
  LabelLiBalance,
  LabelLiDate,
} from '../styled-components/past-matches.styled-components';

import PastMatchesList from '../components/UI/list/PastMatchesList.component';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      page: 1,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFirstGames = this.getFirstGames.bind(this);
    // this.getMoreGames = this.getMoreGames.bind(this);
  }

  async componentDidMount() {
    const gamesList = await this.getFirstGames();
    await this.setStateAsync({
      gamesList,
    });
  }

  async getFirstGames() {
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
    const { gamesList } = this.state;
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
                  <Label>
                    <LabelLiName>
Player Name
                    </LabelLiName>
                    <LabelLiBalance>
Total Balance
                    </LabelLiBalance>
                    <LabelLiDate>
Date
                    </LabelLiDate>
                  </Label>
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
