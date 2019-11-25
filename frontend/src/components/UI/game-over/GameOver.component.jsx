/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  GameOverShadow,
  GameOverBody,
  Title,
  Content,
  P,
  Name,
  Balance,
} from '../../../styled-components/game-over.styled-components';

export default class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      PlayerName,
      PlayerBalance,
    } = this.props;
    return (
      <>
        <GameOverShadow>
          <GameOverBody>
            <Title>
              Game Over
            </Title>
            <Content>
              <Name>{PlayerName}</Name>
              <P>
                your total balance is
              </P>
              <Balance>{PlayerBalance}</Balance>
            </Content>
          </GameOverBody>
        </GameOverShadow>
      </>
    );
  }
}
