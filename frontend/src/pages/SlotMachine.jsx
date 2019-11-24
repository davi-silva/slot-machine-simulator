import React, { Component } from 'react';

import PlayerModal from '../components/UI/player/Player';
import Machine from '../components/UI/machine/Machine';

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: null,
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

  setPlayerInfo(playerInfo) {
    this.setStateAsync({
      playerInfo,
    });
  }

  hidePlayModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {
      showModal,
      playerInfo,
    } = this.state;
    let modal;
    let slotMachine;
    if (showModal) {
      modal = (
        <>
          <PlayerModal handler={this.hidePlayModal} setPlayer={this.setPlayerInfo} />
        </>
      );
      slotMachine = (
        <>
        </>
      );
    } else {
      modal = (
        <>
        </>
      );
      slotMachine = (
        <>
          <Machine playerInfo={playerInfo} />
        </>
      );
    }
    return (
      <>
        {modal}
        <div className="container">
          <div className="row">
            <div className="col-12">
              {slotMachine}
            </div>
          </div>
        </div>

      </>
    );
  }
}
