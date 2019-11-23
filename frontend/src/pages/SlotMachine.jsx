import React, { Component } from 'react';

import PlayerModal from '../components/UI/player/Player';
import Machine from '../components/UI/machine/Machine';
import PayTable from '../components/UI/paytable/PayTable';

import {
  ShowPaytable,
} from '../styled-components/slot-machine.styled-components';

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: null,
      showModal: false,
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
    console.log('hidePlayModal');
  }

  render() {
    const { showModal } = this.state;
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
          <Machine />
          {/* <PayTable
            style={{
              display: 'none!important',
            }}
          />
          <ShowPaytable>
            Show Pay Table
          </ShowPaytable> */}
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
