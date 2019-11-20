import React, { Component } from 'react';

import PlayerModal from '../components/UI/player/Player';

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: null,
      game: null,
      round: null,
      showModal: true,
    };
    this.hidePlayModal = this.hidePlayModal.bind(this);
    this.setPlayerInfo = this.setPlayerInfo.bind(this);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  hidePlayModal() {
    this.setState({
      showModal: false,
    });
    console.log('hidePlayModal');
  }

  setPlayerInfo(playerInfo) {
    this.setStateAsync({
      playerInfo
    })
  }

  render() {
    const { showModal } = this.state;
    let modal;
    if (showModal) {
      modal = (
        <>
          <PlayerModal handler={this.hidePlayModal} setPlayer={this.setPlayerInfo}/>
        </>
      );
    } else {
      modal = (
        <>
        </>
      );
    }
    return (
      <>
        {modal}
      </>
    );
  }
}
