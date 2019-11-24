/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Paytable = styled.div`
  height: 500px;
  width: 300px;
  position: relative;
  border-radius: 5px;
  display: table;
  margin: 60px auto 0 auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export const PaytableBody = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  height: 500px;
  width: 300px;
  border-radius: 5px;
  position: relative;
  display: table;
  margin: 0 auto;
`;

export const Line = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
`;
