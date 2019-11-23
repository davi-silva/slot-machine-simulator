/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  HoldPlayButton,
} from './animations';


export const ShowPaytable = styled.div`
  background-image: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  background-size: 200% auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  display: table;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 227%);
  padding: 8px 30px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all .2s ease-in;
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-position: right center;
  }
`;
