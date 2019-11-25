import styled from 'styled-components';

export const CombinationSelectorShadow = styled.div`
  height: 475px;
  width: 370px;
  position: fixed;
  border-radius: 5px;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export const CombinationSelectorBody = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  height: 475px;
  width: 370px;
  border-radius: 5px;
  position: relative;
  display: table;
  margin: 0 auto;
`;

export const Title = styled.h6`
  color: #fff;
  font-weight: 900;
  font-size: 12px;
  text-transform: uppercase;
  display: table;
  margin: 27px auto 0 auto;
  cursor: default;
`;


export const Wheel = styled.div`
  background: #fff;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.8);
  height: 385px;
  overflow: hidden;
  position: fixed;
  border-radius: 5px;
  top: 51px;
  width: 92px;

`;

export const WheelImage = styled.img`
  height: 60px;
  max-width: 87px;
  display: table;
  margin: 2px auto;
  transform: translateY(40px);
  z-index: 99999999999;
  &:hover {
    cursor: pointer;
  }
`;


export const Choose = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  position: absolute;
  bottom: 9px;
  letter-spacing: 1px;
  left: 45%;
  transition: all .05s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9, 0.9); 
  }
`;
