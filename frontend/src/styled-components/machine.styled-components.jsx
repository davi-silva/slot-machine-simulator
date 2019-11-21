/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SlotMachine = styled.div`
  height: 247px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: linear-gradient(to left,#6d00e4 0%,#4100e4 100%);
  display: table;
  margin: 0 auto;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.6);
`;

export const MachineBody = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  position: relative;
  width: 400px;
  height: 247px;
  border-radius: 10px 150px;
  z-index: 2;
  &:first-child {
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 12px;
      background: linear-gradient(to right, #064ab3 0%, #6907a2 100%);
      top: 0px;
      left: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`;

export const MachineFeet = styled.div`
    width: 137px;
    height: 297px;
    position: fixed;
    top: 57%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: linear-gradient(to bottom, #000 0%, #333 100%);
    z-index: -1;
`;

export const SlotBlock = styled.div`
  display: none;
  height: 113%;
  left: 0;
  position: absolute;
  top: -18px;
  width: 225px;
  z-index: 4;
`;

export const SlotFrame = styled.div`
  background: #1b1b1b;
  background: linear-gradient(to bottom,#1b1b1b 0%,#2b2929 8%,#191919 20%,#000000 47%,#000000 50%,#000000 54%,#1d1b1b 100%);
  box-shadow: 0 0 16px rgba(255,255,255,0.3), 0 1px 1px rgba(255,255,255,0.5), 0 -1px 1px rgba(255,255,255,0.2), inset 0 -2px 15px #000;
  box-sizing: border-box;
  border: 2px solid linear-gradient(to left,#0058e4 0%,#9000e4 100%);
  height: 140px;
  width: 370px;
  border-radius: 10px;
  left: 25%;
  margin-left: -85px;
  position: absolute;
  top: 25px;
  z-index: 1;
`;

export const SlotGlazeBottom = styled.div`
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 45%,rgba(255,255,255,0.1) 100%);
  bottom: 2px;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  left: 3px;
  height: 14px;
  position: absolute;
  width: 100%;
`;

export const SlotDisplay = styled.div`
  background: #1b1b1b;
  background: linear-gradient(to bottom,#040404 0%,#19190E 8%,#1d1d1d 20%,#0a0a0a 47%,#010101 48%,#0d0d0d 54%,#151515 100%);
  border-radius: 6px;
  box-shadow: 0 0 16px rgba(255,255,255,0.3), 0 1px 1px rgba(255,255,255,0.5), 0 -1px 1px rgba(255,255,255,0.2), inset 0 -2px 15px #000;
  box-sizing: border-box;
  top: 185px;
  height: 40px;
  width: 370px;
  left: 25%;
  letter-spacing: 3px;
  line-height: 25px;
  margin-left: -85px;
  font-family: "Courier New",Courier,monospace;
  font-size: 18px;
  text-align: right;
  position: absolute;
  z-index: 2;
  div {
    position: absolute;
    width: 100%;
    top: 1px;
  }
`;

export const SlotOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0) 100%);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const SlotOverlayLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 46%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const SlotCredits = styled.div`
  color: #78FF00;
  font-weight: bold;
  margin-top: 6px;
  font-size: 20px;
  letter-spacing: 16px;
  z-index: 2;
`;

export const SlotZeros = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  margin-top: 6px;
  margin-left: -51px;
  letter-spacing: 16px;
  z-index: 1;
`;

export const SlotWheels = styled.div`
  height: 86px;
  left: 450px;
  overflow: hidden;
  position: fixed;
  top: 77px;
  width: 155px;
  z-index: 999;
  #wheel1 {
    left: 52px;
  }
  #wheel2 {
    left: 155px;
  }
  #wheel3 {
    left: 258px;
  }
`;

export const Wheel = styled.div`
  background: #FFF;
  box-shadow: 0 0 15px rgba(0,0,0,0.8);
  height: 122px;
  overflow: hidden;
  position: fixed;
  top: 35px;
  width: 92px;
`;

export const WheelOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.25) 25%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.25) 80%,rgba(0,0,0,1) 100%);
  border: 1px solid #000;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const WheelImage = styled.img`
  max-height: 60px;
  max-width: 87px;
  display: table;
  margin: 0 auto;
`;

export const SlotTrigger = styled.div`
  cursor: pointer;
  height: 85px;
  right: -40px;
  top: 30px;
  position: absolute;
  width: 37px;
  div {
    position: absolute;
    top: 0;
  }
`;

export const Arm = styled.div`
  background: #0d0d0d;
  background: linear-gradient(to right,#0d0d0d 0%,#4e4e4e 47%,#383838 87%,#1b1b1b 100%);
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
  height: 65%;
  left: 10px;
  top: 17px!important;
  width: 6px;
  z-index: 3;
  overflow: visible !important;
`;

export const Knob = styled.div`
  background: #ff6363;
  background: radial-gradient(ellipse at center, #ff6363 0%,#cf0404 100%);
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  height: 16px;
  left: -7px;
  top: -15px;
  width: 20px;
  z-index: 4;
`;

export const ArmShadow = styled.div`
  background: #000;
  border-radius: 10px;
  bottom: 66px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.4);
  height: 6px;
  left: 9px;
  top: 67px!important;
  width: 8px;
  z-index: 2;
`;


export const Ring1 = styled.div`
    background: #282828;
    background: linear-gradient(to bottom,#282828 0%,#959595 14%,#d1d1d1 37%,#bababa 49%,#959595 67%,#212121 100%);
    border-radius: 0 2px 2px 0;
    box-shadow: inset 0 2px 3px rgba(0,0,0,0.8);
    height: 92%;
    left: -3px;
    width: 8px;
    top: 50px!important;
    z-index: 2;
`;

export const RingShadow1 = styled.div`
  background: linear-gradient(to bottom,  rgba(149,149,149,0.15) 0%,rgba(13,13,13,0.15) 46%,rgba(1,1,1,0.15) 50%,rgba(10,10,10,0.15) 53%,rgba(78,78,78,0.15) 76%,rgba(56,56,56,0.15) 87%,rgba(27,27,27,0.15) 100%);
  border-radius: 0 2px 2px 0;
  height: 50%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 10px;
  z-index: 1;
`;

export const Ring2 = styled.div`
  background: #282828;
  background: linear-gradient(to bottom,#282828 0%,#959595 14%,#d1d1d1 37%,#bababa 49%,#959595 67%,#212121 100%);
  border-radius: 0 2px 2px 0;
  box-shadow: inset 0 2px 3px rgba(0,0,0,0.8);
  height: 23%;
  right: -25px;
  overflow: hidden;
  top: 37%!important;
  position: fixed!important;
  width: 18px;
  z-index: 1;
`;

export const RingShadow2 = styled.div`
  background: linear-gradient(to bottom,  rgba(149,149,149,0.15) 0%,rgba(13,13,13,0.15) 46%,rgba(1,1,1,0.15) 50%,rgba(10,10,10,0.15) 53%,rgba(78,78,78,0.15) 76%,rgba(56,56,56,0.15) 87%,rgba(27,27,27,0.15) 100%);
  border-radius: 0 2px 2px 0;
  height: 50%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 19px;
  z-index: 1;
`;
