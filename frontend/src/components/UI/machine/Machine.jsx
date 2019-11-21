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
        bar1: [0, 0, 100],
        bar2: [0, 0, 150],
        bar3: [0, 0, 250],
        seven: [0, 0, 500],
        cherry: [2, 5, 10],
        anybar: [0, 0, 80],
      },
      slots: [
        ['bar2', 'bar3', 'bar1', 'cherry', 'bar1', 'cherry', 'seven'],
        ['bar2', 'bar3', 'bar1', 'cherry', 'bar1', 'cherry', 'seven'],
        ['bar2', 'bar3', 'bar1', 'cherry', 'bar1', 'cherry', 'seven'],
      ],
      spinning: 3,
      spin: [0, 0, 0],
      credits: 15,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.startSlot = this.startSlot.bind(this);
    this.endSlot = this.endSlot.bind(this);
    this.addCredit = this.addCredit.bind(this);
    this.spin = this.spin.bind(this);
    this.blink = this.blink.bind(this);
    this.blur = this.blur.bind(this);
    this.slotTriggerDown = this.slotTriggerDown.bind(this);
    this.slotTriggerUp = this.slotTriggerUp.bind(this);
  }


  async componentDidMount() {
    this.startSlot();
    // this.endSlot();
    // this.spin();
  }

  startSlot() {
    this.setState({
      spinning: false,
    });
    const {
      slotTrigger,
    } = this.refs;

    slotTrigger.classList.remove('slot-triggerDisabled');
    return false;
  }

  endSlot() {
    const {
      slotCredit,
    } = this.refs;
    this.blink(slotCredit);
  }

  spin() {
    const {
      wheel1,
      wheel2,
      wheel3,
      SlotCredits,
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
      console.log('arm', arm);
      arm.classList.add('pushArmAnimation');
      this.setState({
        spinning: 3,
        credits: credits - 1,
      });
      spin[0] = parseInt(Math.random() * 23, 10);
      spin[1] = parseInt(Math.random() * 23, 10);
      spin[2] = parseInt(Math.random() * 23, 10);

      slotTrigger.classList.remove('slot-triggerDisabled');
    }
  }

  // stopSpin(slot) {

  // }

  endSpin() {
    const {
      slotsTypes,
      slots,
      spin,
      credits,
    } = this.state;

    const {
      slotTrigger,
    } = this.refs;

    let slotType = slots[0][spin[0]];
    let matches = 1;
    let barMatch = /bar/.test(slotType) ? 1 : 0;
    let winnedCredits = 0;
    let waitToSpin = 10;
    if (slotType === slots[1][spin[1]]) {
      matches += 1;

      if (slotType === slots[2][spin[2]]) {
        matches += 1;
      } else if (barMatch !== 0 && /bar/.test(slots[2][spin[2]])) {
        barMatch += 1;
      }
    } else if (barMatch !== 0 && /bar/.test(slots[1][spin[1]])) {
      barMatch += 1;

      if (/bar/.test(slots[2][spin[2]])) {
        barMatch += 1;
      }
    }

    if (matches !== 3 && barMatch === 3) {
      slotType = 'anybar';
      matches = 3;
    }

    winnedCredits = slotsTypes[slotType][matches - 1];

    if (winnedCredits > 0) {
      this.addCredit(winnedCredits);
      waitToSpin = 410 + winnedCredits;
    }

    setTimeout(() => {
      if (credits === 0) {
        this.endSlot();
      } else {
        slotTrigger.classList.remove('slot-triggerDisabled');
        this.setState({
          spinning: false,
        });
      }
    }, waitToSpin);
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

  blink(element) {
    element.classList.add('blinkAnimation');
  }

  slotTriggerDown() {
    const {
      slotTrigger,
    } = this.refs;
    slotTrigger.classList.add('slot-triggerDown');
    this.spin();
  }

  slotTriggerUp() {
    const {
      slotTrigger,
    } = this.refs;
    slotTrigger.classList.remove('slot-triggerDown');
    this.spin();
  }


  render() {
    const { credits } = this.state;
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
              <Wheel ref="wheel1" id="wheel1">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel ref="wheel2" id="wheel2">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel ref="wheel3" id="wheel3">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
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
