import styled from 'styled-components';
import {
  HoldPlayButton,
} from './animations';

export const Background = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  z-index: 9;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  width: 300px; 
  padding: 20px 10px;
  border-radius: 5px;
  z-index: 99999;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #0058e4;
  display: table;
  margin: 0 auto 10px auto;
  font-weight: 900;
`;

export const Input = styled.input`
  color: #0058e4;
  font-size: 16px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #0058e4;
  border-left: none;
  width: 80%;
  display: table;
  margin: 0 auto 15px auto;
  padding: 3px 15px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  background-size: 200% auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 30px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  display: table;
  margin: 20px auto 0 auto;
  transition: all .2s ease-in;
  &:focus {
    outline: none;
  }
  &:active {
    animation: ${HoldPlayButton} forwards;
    background-position: right center;
  }
  &:hover {
    background-position: right center;
  }
`;

export const Warning = styled.p`
  color: #fff;
  background: #d13838;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  transition: all .15s ease-in-out;
  &:hover {
    transform: scale(1.03, 1.03);
  }
  &:active {
    transform: scale(0.95, 0.95);
  }
`;
