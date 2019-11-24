/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Paytable = styled.div`
  height: 500px;
  width: 300px;
  position: relative;
  border-radius: 5px;
  display: table;
  margin: 0 auto;
  z-index: 9999999;
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

export const List = styled.ul`
  width: 85%;
  height: 90%;
  display: table;
  margin: 50px auto 10px auto;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Li = styled.li`
  width: 100%;
  height: 50px;
  list-style: none;
  background: #fff;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-bottom: 6px;
`;

export const Line = styled.div`
  display: inline-block;
  width: 100%;
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
  margin: 8px 3px 8px 3px;
`;

export const Combination = styled.b`
  color: #fff;
  font-size: 12px;
  margin-left: 44px;
  margin-top: 61px!important;
  cursor: pointer;
  position: absolute;
  transform: translateY(-33px)!important;
`;

export const Row = styled.b`
  color: #fff;
  font-size: 12px;
  margin-left: 44px;
  margin-top: 61px!important;
  cursor: pointer;
  position: absolute;
  transform: translate(123px, -33px)!important;
`;

export const Points = styled.b`
  color: #fff;
  font-size: 12px;
  margin-left: 44px;
  margin-top: 61px!important;
  cursor: pointer;
  position: absolute;
  transform: translate(179px, -33px)!important;
`;

export const RowPosition = styled.p`
  font-weight: 100;
  color: #333;
  font-size: 11px;
  position: relative;
  display: table;
  margin: 17px auto;
  text-transform: uppercase;
`;

export const PointsNumber = styled.p`
  font-weight: 600;
  color: #333;
  font-size: 14px;
  position: relative;
  display: table;
  margin: 17px auto;
  text-transform: uppercase;
`;

export const Any = styled.p`
  font-weight: 100;
  color: #333;
  font-size: 13px;
  position: absolute;
  display: table;
  top: 15px;
  left: 49%;
  text-transform: uppercase;
`;
