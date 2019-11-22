/* eslint-disable react/no-string-refs */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import BAR from '../../../static/img/BAR.png';
import BAR2 from '../../../static/img/2xBAR.png';
import BAR3 from '../../../static/img/3xBAR.png';
import Seven from '../../../static/img/7.png';
import Cherry from '../../../static/img/Cherry.png';


import {
  SlotMachine,
  MachineBody,
  MachineFeet,
  SlotBlock,
  SlotFrame,
  SlotGlazeBottom,
  SlotDisplay,
  SlotOverlay,
  SlotOverlayLine,
  SlotCredits,
  SlotZeros,
  SlotWheels,
  Wheel,
  WheelOverlay,
  WheelImage,
  SlotTrigger,
  Arm,
  Knob,
  ArmShadow,
  Ring1,
  RingShadow1,
  Ring2,
  RingShadow2,
} from '../../../styled-components/machine.styled-components';

export default class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
      round: null,
      startGame: false,
      slotsTypes: {
        bar3: [0, 0, 0],
        bar1: [1, 1, 1],
        bar2: [2, 2, 2],
        seven: [3, 3, 3],
        cherry: [4, 4, 4],
      },
      slots: [
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
        ['bar3', 'bar', 'bar2', 'seven', 'cherry'],
      ],
      winningCombinations: {
        top: ['cherry', 'cherry', 'cherry', 2000],
        center: ['cherry', 'cherry', 'cherry', 1000],
        bottom: ['cherry', 'cherry', 'cherry', 4000],
        anyLine: {
          sevenLine: {
            top: ['seven', 'seven', 'seven', 150],
            center: ['seven', 'seven', 'seven', 150],
            bottom: ['seven', 'seven', 'seven', 150],
          },
          Bar3Line: {
            top: ['bar3', 'bar3', 'bar3', 50],
            center: ['bar3', 'bar3', 'bar3', 50],
            bottom: ['bar3', 'bar3', 'bar3', 50],
          },
          Bar2Line: {
            top: ['bar2', 'bar2', 'bar2', 20],
            center: ['bar2', 'bar2', 'bar2', 20],
            bottom: ['bar2', 'bar2', 'bar2', 20],
          },
          BarLine: {
            top: ['bar', 'bar', 'bar', 10],
            center: ['bar', 'bar', 'bar', 10],
            bottom: ['bar', 'bar', 'bar', 10],
          },
        },
      },
      spinning: 3,
      spin: [0, 0, 0],
      credits: 15,
      balance: 0,
      spinningWheel1Styled: null,
      spinningWheel2Styled: null,
      spinningWheel3Styled: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.startSlot = this.startSlot.bind(this);
    this.endSlot = this.endSlot.bind(this);
    this.addCredit = this.addCredit.bind(this);
    this.spin = this.spin.bind(this);
    this.blink = this.blink.bind(this);
    this.blur = this.blur.bind(this);
    this.unblur = this.unblur.bind(this);
    this.slotTriggerDown = this.slotTriggerDown.bind(this);
    this.slotTriggerUp = this.slotTriggerUp.bind(this);
  }


  async componentDidMount() {
    this.startSlot();
    this.setState({
      spinningWheel1Styled: {
        img: {
          '&:first': {
            top: `${-(parseInt(Math.random() * 23, 10) * 44)}px`,
          },
        },
      },
      spinningWheel2Styled: {
        img: {
          '&:first': {
            top: `${-(parseInt(Math.random() * 23, 10) * 44)}px`,
          },
        },
      },
      spinningWheel3Styled: {
        img: {
          '&:first': {
            top: `${-(parseInt(Math.random() * 23, 10) * 44)}px`,
          },
        },
      },
    });
  }

  startSlot() {
    this.setState({
      spinning: false,
    });
    const {
      slotTrigger,
      wheel1,
      wheel2,
      wheel3,
    } = this.refs;
    slotTrigger.classList.remove('slotTriggerDisabled');
    return false;
  }

  endSlot() {
    const { spinning } = this.state;
    this.setState({

    });
  }

  spin() {
    const {
      wheel1,
      wheel2,
      wheel3,
      SlotCredits,
      slotCredit,
      slotTrigger,
      arm,
      knob,
      ArmShadow,
    } = this.refs;

    const {
      credits,
      spin,
      spinning,
    } = this.state;

    this.blur(wheel1);
    this.blur(wheel2);
    this.blur(wheel3);
    console.log('spinning: ', spinning);
    if (spinning === false) {
      this.blink(slotCredit);
      this.setState({
        spinning: 3,
        credits: credits - 1,
      });
      spin[0] = parseInt(Math.random() * 5, 10);
      spin[1] = parseInt(Math.random() * 5, 10);
      spin[2] = parseInt(Math.random() * 5, 10);

      slotTrigger.classList.add('slotTriggerDisabled');
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
    return false;
  }

  stopSpin(wheelNumber) {
    const {
      wheel1,
      wheel2,
      wheel3,
    } = this.refs;
    const { spinning } = this.state;
    if (wheelNumber === 1) {
      this.unblur(wheel1);
      this.setState({
        spinning: spinning - 1,
      });
    }
    if (wheelNumber === 2) {
      this.unblur(wheel2);
      this.setState({
        spinning: spinning - 1,
      });
    }
    if (wheelNumber === 3) {
      this.unblur(wheel3);
      this.setState({
        spinning: spinning - 1,
      });
    }
    if (wheelNumber === 4) {
      this.setState({
        spinning: false,
      });
      this.endSpin();
    }
  }

  endSpin() {
    const {
      slotsTypes,
      slots,
      spin,
      credits,
      balance,
      winningCombinations,
    } = this.state;
    // console.log('slotsTypes:', slotsTypes);
    console.log('slots:', slots);
    console.log('spin:', spin);
    // console.log('credits:', credits);
    const {
      slotTrigger,
    } = this.refs;


    const playerCombTop = [];
    const playerCombBottom = [];

    const spinTop = spin;
    for (let i = 0; i < 3; i += 1) {
      if (spinTop[i] - 1 < 0) {
        spinTop[i] = 4;
        playerCombTop.push(slots[i][spinTop[i]]);
      } else {
        playerCombTop.push(slots[i][spinTop[i] - 1]);
      }
    }
    console.log('playerCombTop:', playerCombTop);

    const spinCenter = spin;
    const playerCombCenter = [
      slots[0][spinCenter[0]],
      slots[1][spinCenter[1]],
      slots[2][spinCenter[2]],
    ];

    console.log('playerCombCenter:', playerCombCenter);

    const spinBottom = spin;
    for (let i = 0; i < 3; i += 1) {
      if (spinBottom[i] + 1 > 4) {
        spinBottom[i] = 0;
        playerCombBottom.push(slots[i][spinBottom[i]]);
      } else {
        playerCombBottom.push(slots[i][spinBottom[i] + 1]);
      }
    }
    console.log('playerCombBottom:', playerCombBottom);


    let cherriesAmountTop = 0;
    let sevensAmountTop = 0;
    playerCombTop.forEach((symbol) => {
      if (symbol === 'seven') {
        sevensAmountTop += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountTop += 1;
      }
    });

    if (sevensAmountTop === 2 && cherriesAmountTop === 1) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    } else if (sevensAmountTop === 1 && cherriesAmountTop === 2) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    }

    let cherriesAmountCenter = 0;
    let sevensAmountCenter = 0;
    playerCombCenter.forEach((symbol) => {
      if (symbol === 'seven') {
        sevensAmountCenter += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountCenter += 1;
      }
    });

    if (sevensAmountCenter === 2 && cherriesAmountCenter === 1) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    } else if (sevensAmountCenter === 1 && cherriesAmountCenter === 2) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    }

    let cherriesAmountBottom = 0;
    let sevensAmountBottom = 0;
    playerCombBottom.forEach((symbol) => {
      if (symbol === 'seven') {
        sevensAmountBottom += 1;
      }
      if (symbol === 'cherry') {
        cherriesAmountBottom += 1;
      }
    });

    if (sevensAmountBottom === 2 && cherriesAmountBottom === 1) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    } else if (sevensAmountBottom === 1 && cherriesAmountBottom === 2) {
      console.log('75 points earned');
      this.setState({
        balance: balance + 75,
      });
    }

    // let slotType = slots[0][spin[0]];
    // console.log('slotType:', slotType);
    // let matches = 1;
    // let barMatch = /bar/.test(slotType) ? 1 : 0;
    // let winnedCredits = 0;
    // let waitToSpin = 10;
    // if (slotType === slots[1][spin[1]]) {
    //   matches += 1;

    //   if (slotType === slots[2][spin[2]]) {
    //     matches += 1;
    //   } else if (barMatch !== 0 && /bar/.test(slots[2][spin[2]])) {
    //     barMatch += 1;
    //   }
    // } else if (barMatch !== 0 && /bar/.test(slots[1][spin[1]])) {
    //   barMatch += 1;

    //   if (/bar/.test(slots[2][spin[2]])) {
    //     barMatch += 1;
    //   }
    // }

    // if (matches !== 3 && barMatch === 3) {
    //   slotType = 'anybar';
    //   matches = 3;
    // }


    // winnedCredits = slotsTypes[slotType][matches - 1];

    // if (winnedCredits > 0) {
    //   this.addCredit(winnedCredits);
    //   waitToSpin = 410 + winnedCredits;
    // }

    {
      setTimeout(() => {
        if (credits === 0) {
          this.endSlot();
        } else {
          slotTrigger.classList.remove('slotTriggerDisabled');
          this.setState({
            spinning: false,
          });
        }
      }, 1000);
    }
  }

  addCredit(incrementCredits) {
    const { credits } = this.state;
    const { slotCredit } = this.refs;
    const currentCredits = credits;
    this.setState({
      credits: credits + incrementCredits,
    });
    console.log('slotCredit:', slotCredit);
    this.blink(slotCredit);
  }

  blur(element) {
    element.classList.add('blurEffect');
  }

  unblur(element) {
    element.classList.add('unblurEffect');
  }

  blink(element) {
    element.classList.add('blinkAnimation');
  }

  slotTriggerDown() {
    const {
      slotTrigger,
      arm,
    } = this.refs;
    slotTrigger.classList.add('slotTriggerDown');
    arm.classList.remove('releaseArmAnimation');
    arm.classList.add('pushArmAnimation');
    this.spin();
  }

  slotTriggerUp() {
    const {
      slotTrigger,
      arm,
    } = this.refs;
    slotTrigger.classList.remove('slotTriggerDown');
    arm.classList.remove('pushArmAnimation');
    arm.classList.add('releaseArmAnimation');
  }


  render() {
    const {
      credits,
      spin,
      spinningWheel1Styled,
      spinningWheel2Styled,
      spinningWheel3Styled,
    } = this.state;
    let spinningWheel1;
    let spinningWheel2;
    let spinningWheel3;

    if (spinningWheel1Styled === null) {
      spinningWheel1 = (
        <>
          <>
            <Wheel
              ref="wheel1"
              id="wheel1"
            >
              <WheelOverlay />
              <WheelImage src={BAR3} className="slotSpinAnimation" />
              <WheelImage src={BAR} className="slotSpinAnimation" />
              <WheelImage src={BAR2} className="slotSpinAnimation" />
              <WheelImage src={Seven} className="slotSpinAnimation" />
              <WheelImage src={Cherry} className="slotSpinAnimation" />
            </Wheel>
          </>
        </>
      );
    } else if (spinningWheel1Styled !== null) {
      spinningWheel1 = (
        <>
          <Wheel
            ref="wheel1"
            id="wheel1"
            style={
              spinningWheel1Styled
            }
          >
            <WheelOverlay />
            <WheelImage src={BAR3} className="slotSpinAnimation" />
            <WheelImage src={BAR} className="slotSpinAnimation" />
            <WheelImage src={BAR2} className="slotSpinAnimation" />
            <WheelImage src={Seven} className="slotSpinAnimation" />
            <WheelImage src={Cherry} className="slotSpinAnimation" />
          </Wheel>
        </>
      );
    }

    if (spinningWheel2Styled === null) {
      spinningWheel2 = (
        <>
          <Wheel
            ref="wheel2"
            id="wheel2"
          >
            <WheelOverlay />
            <WheelImage src={BAR3} className="slotSpinAnimation" />
            <WheelImage src={BAR} className="slotSpinAnimation" />
            <WheelImage src={BAR2} className="slotSpinAnimation" />
            <WheelImage src={Seven} className="slotSpinAnimation" />
            <WheelImage src={Cherry} className="slotSpinAnimation" />
          </Wheel>
        </>
      );
    } else if (spinningWheel2Styled !== null) {
      spinningWheel2 = (
        <>
          <Wheel
            ref="wheel2"
            id="wheel2"
            style={
              spinningWheel2Styled
            }
          >
            <WheelOverlay />
            <WheelImage src={BAR3} className="slotSpinAnimation" />
            <WheelImage src={BAR} className="slotSpinAnimation" />
            <WheelImage src={BAR2} className="slotSpinAnimation" />
            <WheelImage src={Seven} className="slotSpinAnimation" />
            <WheelImage src={Cherry} className="slotSpinAnimation" />
          </Wheel>
        </>
      );
    }

    if (spinningWheel3Styled === null) {
      spinningWheel3 = (
        <>
          <Wheel
            ref="wheel3"
            id="wheel3"
          >
            <WheelOverlay />
            <WheelImage src={BAR3} className="slotSpinAnimation" />
            <WheelImage src={BAR} className="slotSpinAnimation" />
            <WheelImage src={BAR2} className="slotSpinAnimation" />
            <WheelImage src={Seven} className="slotSpinAnimation" />
            <WheelImage src={Cherry} className="slotSpinAnimation" />
          </Wheel>
        </>
      );
    } else if (spinningWheel3Styled !== null) {
      spinningWheel3 = (
        <>
          <Wheel
            ref="wheel3"
            id="wheel3"
            style={
              spinningWheel3Styled
            }
          >
            <WheelOverlay />
            <WheelImage src={BAR3} className="slotSpinAnimation" />
            <WheelImage src={BAR} className="slotSpinAnimation" />
            <WheelImage src={BAR2} className="slotSpinAnimation" />
            <WheelImage src={Seven} className="slotSpinAnimation" />
            <WheelImage src={Cherry} className="slotSpinAnimation" />
          </Wheel>
        </>
      );
    }
    return (
      <>
        <SlotMachine>
          <MachineBody>
            <SlotBlock />
            <SlotFrame />
            <SlotGlazeBottom />
            <SlotDisplay>
              <SlotOverlay />
              <SlotOverlayLine />
              <SlotCredits
                ref="slotCredit"
                dangerouslySetInnerHTML={{ __html: credits }}
              />
              <SlotZeros ref="slotZeros">0000000000</SlotZeros>
            </SlotDisplay>
            <SlotWheels>
              {spinningWheel1}
            </SlotWheels>
            <SlotWheels>
              {spinningWheel2}
            </SlotWheels>
            <SlotWheels>
              {spinningWheel3}
            </SlotWheels>
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
          </MachineBody>
        </SlotMachine>
        <MachineFeet />
      </>
    );
  }
}
