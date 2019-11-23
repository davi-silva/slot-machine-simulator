import React, { Component } from 'react';

import {
  Paytable,
  PaytableBody,
} from '../../../styled-components/paytable.styled-components';

export default class PayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // winningCombination: [

      // ],
      // playerCombination: [],
    };
  }

  async componentDidMount() {

  }

  render() {
    return (
      <>
        <Paytable>
          <PaytableBody />
        </Paytable>
      </>
    );
  }
}
