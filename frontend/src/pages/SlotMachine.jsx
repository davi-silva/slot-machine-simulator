import React, { Component } from 'react';

import PlayerModal from '../components/UI/player/Player';

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
      showModal: true,
    };
    this.hidePlayModal = this.hidePlayModal.bind(this);
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
    if (showModal) {
      modal = (
        <>
          <PlayerModal handler={this.hidePlayModal} />
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
