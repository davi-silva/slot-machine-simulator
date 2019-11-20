/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  Background,
  Wrapper,
  Title,
  Input,
  Button,
} from '../../../styled-components/player-modal.styled-components';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { handler } = this.props;
    const handlerHideModal = handler;
    e.preventDefault();
    console.log("Let's Play");

    handlerHideModal();
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async createNewPlayer(player) {
    this.response = await fetch(
      'http://localhost:5000/players/new',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      },
    );
    const data = await this.response.json();
    return data;
  }


  render() {
    return (
      <>
        <Background>
          <Wrapper>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Title>Player Name</Title>
                  <form onSubmit={this.onSubmit}>
                    <Input required />
                    <Button>
                    Play
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Wrapper>
        </Background>

      </>
    );
  }
}
