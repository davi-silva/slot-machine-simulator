import styled from 'styled-components';

export const GameOverShadow = styled.div`
  height: 170px;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: table;
  margin: 0 auto;
  z-index: 9999999;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export const GameOverBody = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  height: 170px;
  width: 300px;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  display: table;
  margin: 0 auto;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 17px;
  letter-spacing: 2px;
  width: 100%;
  font-weight: 900;
  text-align: center;
`;

export const Content = styled.div`
  margin: 15px auto;
  display: table;
`;

export const P = styled.span` 
  margin: 5px auto;
  display: table;
  color: #fff;
`;

export const Name = styled.span`
  background: #fff;
  padding: 5px;
  border: none;
  color: #333;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: table;
  margin: 0 auto;
`;

export const Balance = styled.span`
  background: #fff;
  padding: 5px;
  border: none;
  color: #333;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: table;
  margin: 0 auto;
`;
