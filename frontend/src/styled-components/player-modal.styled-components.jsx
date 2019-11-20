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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 180px;
  padding: 10px;
  z-index: 99999;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #0058e4;
  display: table;
  margin: 20px auto;
  font-weight: 900;
`;

export const Input = styled.input`
  color: #0058e4;
  font-size: 16px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #0058e4;
  border-left: none;
  width: 100%;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #fff;
  color: #0058e4;
  border: 1px solid #0058e4;
  padding: 6px 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  display: table;
  margin: 20px auto 0 auto;
  &:focus {
    outline: none;
  }
  &:active {
    animation: ${HoldPlayButton} forwards;
  }
`;
