import styled from 'styled-components';

import { rotate } from './animations';

export const Title = styled.h1`
    font-size: 20px;
    display: table;
    margin: 20px auto;
    cursor: default;
    color: #333;
    letter-spacing: 1px;
`;

export const PastMatches = styled.div`
  height: 450px!important;
  width: 600px;
  position: relative;
  border-radius: 5px;
  display: table;
  margin: 0 auto 60px auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.6);
`;

export const PastMatchesBody = styled.div`
  background: linear-gradient(to right, #0058e4 0%, #9000e4 100%);
  height: 450px!important;
  width: 600px;
  border-radius: 5px;
  position: relative;
  padding-bottom: 30px;
  display: table;
  margin: 0 auto;
`;

export const List = styled.ul`
    width: 93%;
    /* background: #333; */
    display: table;
    margin: 0 auto;
    height: 100px!important;

    margin-top: 25px;
    height: 400px!important;
    overflow: hidden;

    div {
        overflow: hidden;
        ::-webkit-scrollbar {
            display: none;
        }

        ::-webkit-scrollbar-track {
            display: none;
        }

        ::-webkit-scrollbar-thumb {
            display: none;
        }

        ::-webkit-scrollbar-thumb:hover {
            display: none;
        }
    }
`;

export const GamesLi = styled.li`
    /* background: #fff; */
    list-style: none;
    border-radius: 3px;
    height: 38px;
    padding: 0px 10px;
`;

export const Cell = styled.div`
    background: #fff;
    display: inline-block;
    width: 100%;
    margin: 5px 4px;
    border-radius: 3px;
    text-align: center;
    padding: 5px 3px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.4);
    font-size: 15px;
`;

export const LoadingAllContent = styled.div`
    margin-top: 20px;
    width: 100%;
    svg {
        animation: ${rotate} 1s infinite;
        color: #333;
        font-size: 18px;
        display: table;
        margin: 25px auto;
    }
`;

export const Info = styled.p`
    color: #333;
    font-size: 15px;
    display: table;
    margin: 0 auto;
    cursor: default; 
`;

export const Label = styled.ul`
    display: table;
    margin: 0 auto;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 900;
`;

export const LabelLi = styled.li`
    display: inline;
    position: absolute;
    cursor: default;
`;
