import React, { Component } from 'react';

import BAR3 from '../../../static/img/3xBAR.png';
import BAR2 from '../../../static/img/2xBAR.png';
import BAR from '../../../static/img/BAR.png';
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
    };
  }

  render() {
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
              <SlotCredits>15</SlotCredits>
              <SlotZeros>0000000000</SlotZeros>
            </SlotDisplay>
            <SlotWheels>
              <Wheel id="wheel1">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel id="wheel2">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
            </SlotWheels>
            <SlotWheels>
              <Wheel id="wheel3">
                <WheelOverlay />
                <WheelImage src={BAR3} />
                <WheelImage src={BAR2} />
                <WheelImage src={BAR} />
                <WheelImage src={Seven} />
                <WheelImage src={Cherry} />
              </Wheel>
            </SlotWheels>
            <SlotTrigger>
              <Arm>
                <Knob />
              </Arm>
              <ArmShadow />
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
