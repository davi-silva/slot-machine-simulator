/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-string-refs */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import BAR from '../../../static/img/BAR.png';
import BAR2 from '../../../static/img/2xBAR.png';
import BAR3 from '../../../static/img/3xBAR.png';
import Seven from '../../../static/img/7.png';
import Cherry from '../../../static/img/Cherry.png';

import PayTable from '../paytable/PayTable';
import CombinationSelector from '../combination-selection/CombinationSelector';
import GameOver from '../game-over/GameOver.component';

import {
  SlotMachine,
  MachineBody,
  MachineFeet,
  SlotBlock,
  SlotFrame,
  SlotGlazeBottom,
  SlotDisplay,
  SlotOverlayLine,
  SlotCredits,
  Credits,
  SlotZeros,
  SlotWheels,
  WinningLineTop,
  WinningLineCenter,
  WinningLineBottom,
  Wheel,
  WheelOverlay,
  BeforeSpinningWheelImage,
  SpinningWheelImage,
  WheelImageBAR3,
  WheelImageBAR1,
  WheelImageBAR2,
  WheelImageSeven,
  WheelImageCherry,
  SlotTrigger,
  Arm,
  Knob,
  BlueKnob,
  ArmShadow,
  Ring1,
  RingShadow1,
  Ring2,
  RingShadow2,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  DebugTitle,
  Icon,
  BalanceTitle,
  Balance,
  ShowPaytable,
  ShowCombinationSelectorButton,
} from '../../../styled-components/machine.styled-components';

export default class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debugMode: false,
      zeros: '0000000000',
      slots: [
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
      ],
      isSpinnig: false,
      spinning: 3,
      isWheel1Spinning: false,
      isWheel2Spinning: false,
      isWheel3Spinning: false,
      spin: [0, 0, 0],
      fixedSpin: [0, 0, 0],
      fixedSpinChosen: false,
      credits: 15,
      balance: 0,
      showPayTable: false,
      showCombinationSelector: false,
      winningLines: [0, 0, 0],
      triggerDisabled: false,
      hasStarted: false,
      hasEnded: false,
      paytableRow: {
        cherryTop: false,
        cherryCenter: false,
        cherryBottom: false,
        sevens: false,
        sevenCherry: false,
        cherrySeven: false,
        bars3: false,
        bars2: false,
        bars: false,
        barsAny: false,
      },
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.startSlot = this.startSlot.bind(this);
    // this.endSlot = this.endSlot.bind(this);
    this.addCredit = this.addCredit.bind(this);
    this.spin = this.spin.bind(this);
    this.blink = this.blink.bind(this);
    this.blur = this.blur.bind(this);
    this.unblur = this.unblur.bind(this);
    this.slotTriggerDown = this.slotTriggerDown.bind(this);
    this.slotTriggerUp = this.slotTriggerUp.bind(this);
    this.onCreditsChange = this.onCreditsChange.bind(this);
    this.onSetDebugMode = this.onSetDebugMode.bind(this);
    this.submitRound = this.submitRound.bind(this);
    this.getRoundsByPlayer = this.getRoundsByPlayer.bind(this);
    this.submitFullGameResult = this.submitFullGameResult.bind(this);
    this.endGame = this.endGame.bind(this);
    this.ShowPaytable = this.ShowPaytable.bind(this);
    this.ShowCombinationSelector = this.ShowCombinationSelector.bind(this);
    this.chooseFixedSpin = this.chooseFixedSpin.bind(this);
    this.RedirectToScoreboard = this.RedirectToScoreboard.bind(this);
  }


  async componentDidMount() {
    this.startSlot();
  }

  onSetDebugMode(e) {
    this.setState({
      debugMode: e.target.checked,
    });
  }

  onCreditsChange(e) {
    if (e.target.value <= 5000) {
      if (e.target.value.toString().length === 0) {
        this.setState({
          zeros: '000000000000',
        });
      } else if (e.target.value.toString().length === 1) {
        this.setState({
          zeros: '00000000000',
        });
      } else if (e.target.value.toString().length === 2) {
        this.setState({
          zeros: '0000000000',
        });
      } else if (e.target.value.toString().length === 3) {
        this.setState({
          zeros: '000000000',
        });
      } else if (e.target.value.toString().length === 4) {
        this.setState({
          zeros: '00000000',
        });
      }
      this.setState({
        credits: e.target.value,
      });
    }
  }

  async getRoundsByPlayer(player) {
    const response = await fetch(
      `http://localhost:5000/rounds/all/player/${player}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async endSpin() {
    const {
      slots,
      spin,
      credits,
      balance,
      paytableRow,
      winningLines,
    } = this.state;
    const {
      playerInfo,
    } = this.props;
    const {
      slotTrigger,
      slotCredit,
      balanceRef,
    } = this.refs;

    let tempBalance = balance;

    // Getting Top Combination
    const playerCombTop = [];
    const spinTop = spin;
    for (let i = 0; i < 3; i += 1) {
      if (spinTop[i] - 1 < 0) {
        spinTop[i] = 4;
        playerCombTop.push(slots[i][spinTop[i]]);
      } else {
        playerCombTop.push(slots[i][spinTop[i] - 1]);
      }
    }

    // Getting Center Combination
    const spinCenter = spin;
    const playerCombCenter = [
      slots[0][spinCenter[0]],
      slots[1][spinCenter[1]],
      slots[2][spinCenter[2]],
    ];

    console.log('playerCombCenter:', playerCombCenter);

    // Getting Bottom Combination
    const playerCombBottom = [];
    const spinBottom = spin;
    for (let i = 0; i < 3; i += 1) {
      if (spinBottom[i] + 1 > 4) {
        spinBottom[i] = 0;
        playerCombBottom.push(slots[i][spinBottom[i]]);
      } else {
        playerCombBottom.push(slots[i][spinBottom[i] + 1]);
      }
    }

    // Counting each symbol on the Top line
    let bar3AmountTop = 0;
    let barAmountTop = 0;
    let bar2AmountTop = 0;
    let cherriesAmountTop = 0;
    let sevensAmountTop = 0;
    playerCombTop.forEach((symbol) => {
      if (symbol === 'bar3') {
        bar3AmountTop += 1;
      }
      if (symbol === 'bar') {
        barAmountTop += 1;
      }
      if (symbol === 'bar2') {
        bar2AmountTop += 1;
      }
      if (symbol === 'seven') {
        sevensAmountTop += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountTop += 1;
      }
    });

    // Looking for any winning combination on the Top line
    if (sevensAmountTop === 2 && cherriesAmountTop === 1) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setState({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
      });
    } else if (sevensAmountTop === 1 && cherriesAmountTop === 2) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setState({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
      });
    }

    // Counting each symbol on the Center line
    let bar3AmountCenter = 0;
    let barAmountCenter = 0;
    let bar2AmountCenter = 0;
    let cherriesAmountCenter = 0;
    let sevensAmountCenter = 0;
    playerCombCenter.forEach((symbol) => {
      if (symbol === 'bar3') {
        bar3AmountCenter += 1;
      }
      if (symbol === 'bar') {
        barAmountCenter += 1;
      }
      if (symbol === 'bar2') {
        bar2AmountCenter += 1;
      }
      if (symbol === 'seven') {
        sevensAmountCenter += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountCenter += 1;
      }
    });

    // Looking for any winning combination on the Center line
    if (sevensAmountCenter === 2 && cherriesAmountCenter === 1) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setState({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
      });
    } else if (sevensAmountCenter === 1 && cherriesAmountCenter === 2) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setState({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
      });
    }

    // Counting each symbol on the Bottom line
    let bar3AmountBottom = 0;
    let barAmountBottom = 0;
    let bar2AmountBottom = 0;
    let cherriesAmountBottom = 0;
    let sevensAmountBottom = 0;
    playerCombBottom.forEach((symbol) => {
      if (symbol === 'bar3') {
        bar3AmountBottom += 1;
      }
      if (symbol === 'bar') {
        barAmountBottom += 1;
      }
      if (symbol === 'bar2') {
        bar2AmountBottom += 1;
      }
      if (symbol === 'seven') {
        sevensAmountBottom += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountBottom += 1;
      }
    });

    if (cherriesAmountTop === 3) {
      tempBalance += 2000;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        paytableRow: {
          cherryTop: true,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    console.log('cherriesAmountCenter:', cherriesAmountCenter);
    if (cherriesAmountCenter === 3) {
      tempBalance += 1000;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: true,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (cherriesAmountBottom === 3) {
      tempBalance += 4000;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: true,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (sevensAmountTop === 3) {
      tempBalance += 150;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: true,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (sevensAmountCenter === 3) {
      tempBalance += 150;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: true,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (sevensAmountBottom === 3) {
      tempBalance += 150;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: true,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (sevensAmountBottom === 2 && cherriesAmountBottom === 1) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: true,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (sevensAmountBottom === 1 && cherriesAmountBottom === 2) {
      tempBalance += 75;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: true,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }
    if (bar3AmountTop === 3) {
      tempBalance += 50;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: true,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (bar3AmountCenter === 3) {
      tempBalance += 50;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: true,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (bar3AmountBottom === 3) {
      tempBalance += 50;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: true,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (bar2AmountTop === 3) {
      tempBalance += 20;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: true,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (bar2AmountCenter === 3) {
      tempBalance += 20;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: true,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (bar2AmountBottom === 3) {
      tempBalance += 20;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: true,
          bars: paytableRow.bars,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (barAmountTop === 3) {
      tempBalance += 10;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: true,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (barAmountCenter === 3) {
      tempBalance += 10;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: true,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (barAmountBottom === 3) {
      tempBalance += 10;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: true,
          barsAny: paytableRow.barsAny,
        },
      });
    }

    if (barAmountTop > 0 && barAmountTop < 3) {
      tempBalance += 5;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          1,
          winningLines[1],
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: true,
        },
      });
    }

    if (barAmountCenter > 0 && barAmountCenter < 3) {
      tempBalance += 5;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          1,
          winningLines[2],
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: true,
        },
      });
    }

    if (barAmountBottom > 0 && barAmountBottom < 3) {
      tempBalance += 5;
      this.blink(balanceRef);
      this.setStateAsync({
        balance: tempBalance,
        winningLines: [
          winningLines[0],
          winningLines[1],
          1,
        ],
        paytableRow: {
          cherryTop: paytableRow.cherryTop,
          cherryCenter: paytableRow.cherryCenter,
          cherryBottom: paytableRow.cherryBottom,
          sevens: paytableRow.sevens,
          sevenCherry: paytableRow.sevenCherry,
          cherrySeven: paytableRow.cherrySeven,
          bars3: paytableRow.bars3,
          bars2: paytableRow.bars2,
          bars: paytableRow.bars,
          barsAny: true,
        },
      });
    }

    setTimeout(() => {
      this.setStateAsync({
        triggerDisabled: false,
        isSpinnig: false,
      });
      slotTrigger.classList.remove('slotTriggerDisabled');
      slotCredit.classList.remove('blinkAnimation');
    }, 500);
    const round = {
      player: playerInfo._id,
      name: playerInfo.name,
      topCombination: playerCombTop,
      mainCombination: playerCombCenter,
      bottomCombination: playerCombBottom,
    };
    this.submitRound(round);
    if (credits <= 0 || credits === '0') {
      const allRoundsPlayed = await this.getRoundsByPlayer(playerInfo._id);
      const game = {
        playerInfo,
        rounds: allRoundsPlayed,
        totalBalance: balance,
      };
      this.endGame(game);
      this.setState({
        hasEnded: true,
      });
      setTimeout(() => {
        this.RedirectToScoreboard();
      }, 4000);
    }
  }

  RedirectToScoreboard() {
    const { RedirectTo } = this.props;
    const Redirect = RedirectTo;
    Redirect('scoreboard');
  }

  stopSpin(wheelNumber) {
    const { spinning } = this.state;
    let tempSpinning = spinning;
    if (wheelNumber === 1) {
      tempSpinning -= 1;
      this.setState({
        spinning: tempSpinning,
        isSpinnig: false,
        isWheel1Spinning: false,
      });
    }
    if (wheelNumber === 2) {
      tempSpinning -= 1;
      this.setState({
        spinning: tempSpinning,
        isWheel2Spinning: false,
      });
    }
    if (wheelNumber === 3) {
      tempSpinning -= 1;
      this.setState({
        spinning: tempSpinning,
        isWheel3Spinning: false,
      });
    }
    if (wheelNumber === 4) {
      this.setState({
        spinning: false,
      });

      this.endSpin();
    }
  }

  async spin() {
    const {
      slotTrigger,
      creditInput,
      slotZeros,
    } = this.refs;
    const {
      spin,
      spinning,
      credits,
      triggerDisabled,
      debugMode,
      fixedSpin,
      fixedSpinChosen,
    } = this.state;

    if (!triggerDisabled) {
      let tempCredits = credits;

      if (spinning === false) {
        this.blink(creditInput);
        this.blink(slotZeros);
        this.setState({
          spinning: 3,
          credits: credits - 1,
          winningLines: [0, 0, 0],
        });
        tempCredits -= 1;
        // Update the credits display
        if (tempCredits.toString().length === 1) {
          this.setState({
            zeros: '00000000000',
          });
        }
        if (tempCredits.toString().length === 2) {
          this.setState({
            zeros: '0000000000',
          });
        }
        if (tempCredits.toString().length === 3) {
          this.setState({
            zeros: '000000000',
          });
        }
        if (tempCredits.toString().length === 4) {
          this.setState({
            zeros: '00000000',
          });
        }
        // Get ramdom number from 0 to 4
        if (debugMode) {
          if (!fixedSpinChosen) {
            spin[0] = parseInt(Math.random() * 5, 10);
            spin[1] = parseInt(Math.random() * 5, 10);
            spin[2] = parseInt(Math.random() * 5, 10);
          } else {
            spin[0] = fixedSpin[0];
            spin[1] = fixedSpin[1];
            spin[2] = fixedSpin[2];
          }
        } else {
          spin[0] = parseInt(Math.random() * 5, 10);
          spin[1] = parseInt(Math.random() * 5, 10);
          spin[2] = parseInt(Math.random() * 5, 10);
        }
        this.setState({
          isWheel1Spinning: true,
          isWheel2Spinning: true,
          isWheel3Spinning: true,
          hasStarted: true,
          triggerDisabled: true,
          isSpinnig: true,
        });
        // Disable Slot Machine trigger while the wheels are spinning
        slotTrigger.classList.add('slotTriggerDisabled');
        // Stop spinning wheels
        setTimeout(() => {
          this.stopSpin(1);
        }, 2000);

        setTimeout(() => {
          this.stopSpin(2);
        }, 2500);

        setTimeout(() => {
          this.stopSpin(3);
        }, 3000);

        setTimeout(() => {
          this.stopSpin(4);
        }, 3500);
      }
    }
    return false;
  }

  chooseFixedSpin(wheel1, wheel2, wheel3) {
    const tempFixedSpin = [0, 0, 0];

    this.setState({
      fixedSpinChosen: true,
    });

    if (wheel1 === 'bar3') {
      tempFixedSpin[0] = 0;
      this.setState({
        fixedSpin: [
          0,
          tempFixedSpin[1],
          tempFixedSpin[2],
        ],
      });
    } else if (wheel1 === 'bar') {
      tempFixedSpin[0] = 1;
      this.setState({
        fixedSpin: [
          1,
          tempFixedSpin[1],
          tempFixedSpin[2],
        ],
      });
    } else if (wheel1 === 'bar2') {
      tempFixedSpin[0] = 2;
      this.setState({
        fixedSpin: [
          2,
          tempFixedSpin[1],
          tempFixedSpin[2],
        ],
      });
    } else if (wheel1 === 'seven') {
      tempFixedSpin[0] = 3;
      this.setState({
        fixedSpin: [
          3,
          tempFixedSpin[1],
          tempFixedSpin[2],
        ],
      });
    } else if (wheel1 === 'cherry') {
      tempFixedSpin[0] = 4;
      this.setState({
        fixedSpin: [
          4,
          tempFixedSpin[1],
          tempFixedSpin[2],
        ],
      });
    }

    if (wheel2 === 'bar3') {
      tempFixedSpin[1] = 0;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          0,
          tempFixedSpin[2],
        ],
      });
    } else if (wheel2 === 'bar') {
      tempFixedSpin[1] = 1;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          1,
          tempFixedSpin[2],
        ],
      });
    } else if (wheel2 === 'bar2') {
      tempFixedSpin[1] = 2;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          2,
          tempFixedSpin[2],
        ],
      });
    } else if (wheel2 === 'seven') {
      tempFixedSpin[1] = 3;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          3,
          tempFixedSpin[2],
        ],
      });
    } else if (wheel2 === 'cherry') {
      tempFixedSpin[1] = 4;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          4,
          tempFixedSpin[2],
        ],
      });
    }

    if (wheel3 === 'bar3') {
      tempFixedSpin[2] = 0;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          tempFixedSpin[1],
          0,
        ],
      });
    } else if (wheel3 === 'bar') {
      tempFixedSpin[2] = 1;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          tempFixedSpin[1],
          1,
        ],
      });
    } else if (wheel3 === 'bar2') {
      tempFixedSpin[2] = 2;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          tempFixedSpin[1],
          2,
        ],
      });
    } else if (wheel3 === 'seven') {
      tempFixedSpin[2] = 3;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          tempFixedSpin[1],
          3,
        ],
      });
    } else if (wheel3 === 'cherry') {
      tempFixedSpin[2] = 4;
      this.setState({
        fixedSpin: [
          tempFixedSpin[0],
          tempFixedSpin[1],
          4,
        ],
      });
    }
    setTimeout(() => {
      this.setState({
        showCombinationSelector: false,
      });
    }, 400);
  }

  startSlot() {
    this.setState({
      spinning: false,
    });
    const {
      slotTrigger,
    } = this.refs;
    slotTrigger.classList.remove('slotTriggerDisabled');
    return false;
  }

  async endGame(game) {
    const response = await fetch(
      'http://localhost:5000/games/play',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      },
    );
    const data = await response.json();
    return data;
  }

  ShowPaytable() {
    const {
      showPayTable,
    } = this.state;
    if (showPayTable) {
      this.setState({
        showPayTable: false,
      });
    } else {
      this.setState({
        showPayTable: true,
      });
    }
  }

  ShowCombinationSelector() {
    const {
      showCombinationSelector,
    } = this.state;
    if (showCombinationSelector) {
      this.setState({
        showCombinationSelector: false,
      });
    } else {
      this.setState({
        showCombinationSelector: true,
      });
    }
  }

  addCredit(incrementCredits) {
    const { credits } = this.state;
    const { slotCredit } = this.refs;
    this.setState({
      credits: credits + incrementCredits,
    });
    this.blink(slotCredit);
  }

  blur(element) {
    element.classList.remove('unblurEffect');
    element.classList.add('blurEffect');
  }

  unblur(element) {
    element.classList.remove('blurEffect');
    element.classList.add('unblurEffect');
  }

  blink(element) {
    element.classList.remove('blinkAnimation');
    element.classList.add('blinkAnimation');
    setTimeout(() => {
      element.classList.remove('blinkAnimation');
    }, 1000);
  }


  slotTriggerDown() {
    const {
      slotTrigger,
      arm,
    } = this.refs;
    const {
      credits,
    } = this.state;
    if (!(credits <= 0 || credits === '0')) {
      slotTrigger.classList.remove('slotTriggerDown');
      slotTrigger.classList.add('slotTriggerDown');
      arm.classList.remove('releaseArmAnimation');
      arm.classList.remove('pushArmAnimation');
      this.spin();
    }
  }

  slotTriggerUp() {
    const {
      slotTrigger,
      arm,
    } = this.refs;
    slotTrigger.classList.remove('slotTriggerDown');
    arm.classList.remove('pushArmAnimation');
    arm.classList.remove('releaseArmAnimation');
    arm.classList.add('releaseArmAnimation');
  }

  async submitRound(round) {
    const response = await fetch(
      'http://localhost:5000/rounds/play',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(round),
      },
    );
    const data = await response.json();
    return data;
  }

  async submitFullGameResult(game) {
    const response = await fetch(
      'http://localhost:5000/rounds/play',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      },
    );
    const data = await response.json();
    return data;
  }


  render() {
    const {
      credits,
      isSpinnig,
      isWheel1Spinning,
      isWheel2Spinning,
      isWheel3Spinning,
      winningLines,
      spin,
      debugMode,
      zeros,
      balance,
      triggerDisabled,
      showPayTable,
      showCombinationSelector,
      paytableRow,
      hasStarted,
      hasEnded,
    } = this.state;
    const {
      playerInfo,
    } = this.props;
    let spinningWheel1;
    let spinningWheel2;
    let spinningWheel3;
    let disabledInput;
    let paytable;
    let showCombSelector;
    let combSelector;
    let gameOverModal;
    let winningLineTop;
    let winningLineCenter;
    let winningLineBottom;

    if (hasEnded) {
      gameOverModal = (
        <>
          <GameOver
            PlayerName={playerInfo.name}
            PlayerBalance={balance}
          />
        </>
      );
    } else {
      gameOverModal = (
        <>
        </>
      );
    }

    if (debugMode) {
      disabledInput = (
        <>
          <Credits
            type="text"
            value={credits}
            onChange={this.onCreditsChange}
            ref="creditInput"
            style={{
              color: '#ffc108',
            }}
          />
        </>
      );
      showCombSelector = (
        <>
          <ShowCombinationSelectorButton
            onClick={this.ShowCombinationSelector}
          >
            COMBINATION SELECTOR
          </ShowCombinationSelectorButton>
        </>
      );
    } else {
      disabledInput = (
        <>
          <Credits
            type="text"
            value={credits}
            onChange={this.onCreditsChange}
            ref="creditInput"
            disabled
          />
        </>
      );
      showCombSelector = (
        <>
        </>
      );
    }

    if (showCombinationSelector) {
      combSelector = (
        <>
          <CombinationSelector
            ShowCombSelector={this.ShowCombinationSelector}
            ChooseFixedSpin={this.chooseFixedSpin}
          />
        </>
      );
    } else {
      combSelector = (
        <>
        </>
      );
    }


    if (winningLines[0] === 1) {
      winningLineTop = (
        <>
          <WinningLineTop />
        </>
      );
    } else if (winningLines[0] === 0) {
      winningLineTop = (
        <>
        </>
      );
    }

    if (winningLines[1] === 1) {
      winningLineCenter = (
        <>
          <WinningLineCenter />
        </>
      );
    } else if (winningLines[1] === 0) {
      winningLineCenter = (
        <>
        </>
      );
    }

    if (winningLines[2] === 1) {
      winningLineBottom = (
        <>
          <WinningLineBottom />
        </>
      );
    } else if (winningLines[2] === 0) {
      winningLineBottom = (
        <>
        </>
      );
    }

    if (hasStarted) {
      if (isSpinnig) {
        if (isWheel1Spinning) {
          spinningWheel1 = (
            <>
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
              <SpinningWheelImage src={BAR} />
              <SpinningWheelImage src={BAR2} />
              <SpinningWheelImage src={Seven} />
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
            </>
          );
        }

        if (isWheel2Spinning) {
          spinningWheel2 = (
            <>
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
              <SpinningWheelImage src={BAR} />
              <SpinningWheelImage src={BAR2} />
              <SpinningWheelImage src={Seven} />
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
            </>
          );
        }

        if (isWheel3Spinning) {
          spinningWheel3 = (
            <>
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
              <SpinningWheelImage src={BAR} />
              <SpinningWheelImage src={BAR2} />
              <SpinningWheelImage src={Seven} />
              <SpinningWheelImage src={Cherry} />
              <SpinningWheelImage src={BAR3} />
            </>
          );
        }
      } else {
        // Stopped spinning wheel on the right symbol
        // First Spinning Wheel
        if (spin[0] === 0) {
          spinningWheel1 = (
            <>
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
              <WheelImageBAR3 src={BAR} />
              <WheelImageBAR3 src={BAR2} />
              <WheelImageBAR3 src={Seven} />
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
            </>
          );
        }

        if (spin[0] === 1) {
          spinningWheel1 = (
            <>
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
              <WheelImageBAR1 src={BAR} />
              <WheelImageBAR1 src={BAR2} />
              <WheelImageBAR1 src={Seven} />
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
            </>
          );
        }

        if (spin[0] === 2) {
          spinningWheel1 = (
            <>
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
              <WheelImageBAR2 src={BAR} />
              <WheelImageBAR2 src={BAR2} />
              <WheelImageBAR2 src={Seven} />
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
            </>
          );
        }

        if (spin[0] === 3) {
          spinningWheel1 = (
            <>
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
              <WheelImageSeven src={BAR} />
              <WheelImageSeven src={BAR2} />
              <WheelImageSeven src={Seven} />
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
            </>
          );
        }

        if (spin[0] === 4) {
          spinningWheel1 = (
            <>
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
              <WheelImageCherry src={BAR} />
              <WheelImageCherry src={BAR2} />
              <WheelImageCherry src={Seven} />
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
            </>
          );
        }

        // Second spinning wheel
        if (spin[1] === 0) {
          spinningWheel2 = (
            <>
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
              <WheelImageBAR3 src={BAR} />
              <WheelImageBAR3 src={BAR2} />
              <WheelImageBAR3 src={Seven} />
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
            </>
          );
        }

        if (spin[1] === 1) {
          spinningWheel2 = (
            <>
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
              <WheelImageBAR1 src={BAR} />
              <WheelImageBAR1 src={BAR2} />
              <WheelImageBAR1 src={Seven} />
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
            </>
          );
        }

        if (spin[1] === 2) {
          spinningWheel2 = (
            <>
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
              <WheelImageBAR2 src={BAR} />
              <WheelImageBAR2 src={BAR2} />
              <WheelImageBAR2 src={Seven} />
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
            </>
          );
        }

        if (spin[1] === 3) {
          spinningWheel2 = (
            <>
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
              <WheelImageSeven src={BAR} />
              <WheelImageSeven src={BAR2} />
              <WheelImageSeven src={Seven} />
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
            </>
          );
        }

        if (spin[1] === 4) {
          spinningWheel2 = (
            <>
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
              <WheelImageCherry src={BAR} />
              <WheelImageCherry src={BAR2} />
              <WheelImageCherry src={Seven} />
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
            </>
          );
        }

        // Third spinning wheel
        if (spin[2] === 0) {
          spinningWheel3 = (
            <>
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
              <WheelImageBAR3 src={BAR} />
              <WheelImageBAR3 src={BAR2} />
              <WheelImageBAR3 src={Seven} />
              <WheelImageBAR3 src={Cherry} />
              <WheelImageBAR3 src={BAR3} />
            </>
          );
        }

        if (spin[2] === 1) {
          spinningWheel3 = (
            <>
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
              <WheelImageBAR1 src={BAR} />
              <WheelImageBAR1 src={BAR2} />
              <WheelImageBAR1 src={Seven} />
              <WheelImageBAR1 src={Cherry} />
              <WheelImageBAR1 src={BAR3} />
            </>
          );
        }

        if (spin[2] === 2) {
          spinningWheel3 = (
            <>
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
              <WheelImageBAR2 src={BAR} />
              <WheelImageBAR2 src={BAR2} />
              <WheelImageBAR2 src={Seven} />
              <WheelImageBAR2 src={Cherry} />
              <WheelImageBAR2 src={BAR3} />
            </>
          );
        }

        if (spin[2] === 3) {
          spinningWheel3 = (
            <>
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
              <WheelImageSeven src={BAR} />
              <WheelImageSeven src={BAR2} />
              <WheelImageSeven src={Seven} />
              <WheelImageSeven src={Cherry} />
              <WheelImageSeven src={BAR3} />
            </>
          );
        }

        if (spin[2] === 4) {
          spinningWheel3 = (
            <>
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
              <WheelImageCherry src={BAR} />
              <WheelImageCherry src={BAR2} />
              <WheelImageCherry src={Seven} />
              <WheelImageCherry src={Cherry} />
              <WheelImageCherry src={BAR3} />
            </>
          );
        }
      }
    } else {
      spinningWheel1 = (
        <>
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
          <BeforeSpinningWheelImage src={BAR} />
          <BeforeSpinningWheelImage src={BAR2} />
          <BeforeSpinningWheelImage src={Seven} />
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
        </>
      );

      spinningWheel2 = (
        <>
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
          <BeforeSpinningWheelImage src={BAR} />
          <BeforeSpinningWheelImage src={BAR2} />
          <BeforeSpinningWheelImage src={Seven} />
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
        </>
      );

      spinningWheel3 = (
        <>
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
          <BeforeSpinningWheelImage src={BAR} />
          <BeforeSpinningWheelImage src={BAR2} />
          <BeforeSpinningWheelImage src={Seven} />
          <BeforeSpinningWheelImage src={Cherry} />
          <BeforeSpinningWheelImage src={BAR3} />
        </>
      );
    }


    const Checkbox = ({ className, checked, ...props }) => (
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={debugMode} {...props} />
        <StyledCheckbox checked={debugMode}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    );

    let trigger;

    if (triggerDisabled) {
      trigger = (
        <>
          <SlotTrigger ref="slotTrigger">
            <Arm ref="arm">
              <BlueKnob ref="knob" />
            </Arm>
            <ArmShadow ref="armShadow" />
            <Ring1>
              <RingShadow1 />
            </Ring1>
            <Ring2>
              <RingShadow2 />
            </Ring2>
          </SlotTrigger>
        </>
      );
    } else {
      trigger = (
        <>
          <SlotTrigger ref="slotTrigger" onMouseDown={this.slotTriggerDown} onMouseUp={this.slotTriggerUp}>
            <Arm ref="arm">
              <Knob ref="knob" />
            </Arm>
            <ArmShadow ref="armShadow" />
            <Ring1>
              <RingShadow1 />
            </Ring1>
            <Ring2>
              <RingShadow2 />
            </Ring2>
          </SlotTrigger>
        </>
      );
    }

    if (showPayTable) {
      paytable = (
        <>
          <PayTable
            ShowPaytable={this.ShowPaytable}
            CherryTop={paytableRow.cherryTop}
            CherryCenter={paytableRow.cherryCenter}
            CherryBottom={paytableRow.cherryBottom}
            Sevens={paytableRow.sevens}
            SevenCherry={paytableRow.sevenCherry}
            CherrySeven={paytableRow.cherrySeven}
            Bars3={paytableRow.bars3}
            Bars2={paytableRow.bars2}
            Bars={paytableRow.bars}
            BarsAny={paytableRow.barsAny}
          />
        </>
      );
    } else {
      paytable = (
        <>
        </>
      );
    }


    return (
      <>
        <BalanceTitle>
        BALANCE
        </BalanceTitle>
        <Balance ref="balanceRef">
          {balance}
        </Balance>
        <SlotMachine>
          <MachineBody>
            <SlotBlock />
            <SlotFrame />
            {winningLineTop}
            {winningLineCenter}
            {winningLineBottom}
            <SlotGlazeBottom />
            {showCombSelector}
            <SlotDisplay>
              <SlotOverlayLine />
              <SlotCredits
                ref="slotCredit"
              />
              {disabledInput}
              <SlotZeros ref="slotZeros">{zeros}</SlotZeros>
            </SlotDisplay>
            <SlotWheels>
              <Wheel
                ref="wheel1"
                id="wheel1"
              >
                <WheelOverlay />
                {spinningWheel1}
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel
                ref="wheel2"
                id="wheel2"
              >
                <WheelOverlay />
                {spinningWheel2}
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel
                ref="wheel3"
                id="wheel3"
              >
                <WheelOverlay />
                {spinningWheel3}
              </Wheel>
            </SlotWheels>
            {trigger}
          </MachineBody>
        </SlotMachine>
        <MachineFeet />
        <DebugTitle>
        DEBUG
        </DebugTitle>
        <Checkbox
          checked={debugMode}
          onChange={this.onSetDebugMode}
        />
        <input
          type="checkbox"
          onChange={this.onSetDebugMode}
          style={{
            top: '27.4%',
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'fixed',
          }}
        />
        <ShowPaytable
          type="button"
          value="Pay Table"
          onMouseDown={this.ShowPaytable}
        />
        {paytable}
        {combSelector}
        {gameOverModal}
      </>
    );
  }
}
