import styled from 'styled-components';

export const Background = styled.div`
  height: 140px;
  width: 300px;
  position: fixed;
  border-radius: 5px;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export const Wrapper = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  height: 140px;
  width: 300px;
  border-radius: 5px;
  position: relative;
  display: table;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 12px;
  text-transform: uppercase;
  display: table;
  margin: 27px auto 0 auto;
  cursor: default;
`;

export const Input = styled.input`
  background: #fff;
  padding: 5px;
  border: none;
  color: #333;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: table;
  margin: 15px auto 15px auto;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0 auto 15px auto;
  display: table;
  transition: all .05s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9, 0.9); 
  }
`;

export const Warning = styled.p`
  color: #fff;
  background: linear-gradient(to left, #d13838 0%, #d66d15 100%);
  background-size: 120% auto;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 auto 11px auto;
  display: table;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
  transition: all .15s ease-in-out;
  &:hover {
    transform: scale(1.03, 1.03);
    background-position: right center;
  }
  &:active {
    transform: scale(0.95, 0.95);
  }
`;
