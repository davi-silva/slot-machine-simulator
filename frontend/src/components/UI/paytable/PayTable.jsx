/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import BAR from '../../../static/img/BAR.png';
import BAR2 from '../../../static/img/2xBAR.png';
import BAR3 from '../../../static/img/3xBAR.png';
import Seven from '../../../static/img/7.png';
import Cherry from '../../../static/img/Cherry.png';

import {
  Paytable,
  PaytableBody,
  List,
  Li,
  LiBlink,
  Line,
  Image,
  Combination,
  Row,
  Points,
  RowPosition,
  PointsNumber,
  Any,
} from '../../../styled-components/paytable.styled-components';

export default class PayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // winningCombination: [

      // ],
      // playerCombination: [],
    };
    this.hideTable = this.hideTable.bind(this);
  }


  hideTable() {
    const { ShowPaytable } = this.props;
    const hideTable = ShowPaytable;
    hideTable();
  }

  render() {
    const {
      CherryTop,
      CherryCenter,
      CherryBottom,
      Sevens,
      SevenCherry,
      CherrySeven,
      Bars3,
      Bars2,
      Bars,
      BarsAny,
    } = this.props;

    let row1;
    let row2;
    let row3;
    let row4;
    let row5;
    let row6;
    let row7;
    let row8;
    let row9;
    let row10;


    if (CherryTop) {
      row1 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Top
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  2000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row1 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Top
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  2000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (CherryCenter) {
      row2 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Center
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  1000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row2 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Center
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  1000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (CherryBottom) {
      row3 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Bottom
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  4000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row3 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Bottom
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  4000
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (Sevens) {
      row4 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Seven} />
                  <Image src={Seven} />
                  <Image src={Seven} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  150
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row4 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Seven} />
                  <Image src={Seven} />
                  <Image src={Seven} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  150
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (SevenCherry) {
      row5 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Seven} />
                  <Image src={Seven} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  75
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row5 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Seven} />
                  <Image src={Seven} />
                  <Image src={Cherry} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  75
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (CherrySeven) {
      row6 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Seven} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  75
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row6 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={Cherry} />
                  <Image src={Cherry} />
                  <Image src={Seven} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  75
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (Bars3) {
      row7 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR3} />
                  <Image src={BAR3} />
                  <Image src={BAR3} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  50
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row7 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR3} />
                  <Image src={BAR3} />
                  <Image src={BAR3} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  50
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (Bars2) {
      row8 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR2} />
                  <Image src={BAR2} />
                  <Image src={BAR2} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  20
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row8 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR2} />
                  <Image src={BAR2} />
                  <Image src={BAR2} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  20
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (Bars) {
      row9 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR} />
                  <Image src={BAR} />
                  <Image src={BAR} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
                    Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                          10
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row9 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR} />
                  <Image src={BAR} />
                  <Image src={BAR} />
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
                  Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                        10
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    if (BarsAny) {
      row10 = (
        <LiBlink>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR} />
                  <span
                    style={{
                      margin: '0px 5px',
                      fontWeight: '100',
                      color: '#333',
                      fontSize: '13px',
                    }}
                  >
                  x
                  </span>
                  <Any>
                  Any
                  </Any>
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  5
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </LiBlink>
      );
    } else {
      row10 = (
        <Li>
          <Line>
            <div className="container p-0">
              <div className="row pl-3 pr-3">
                <div className="col-6 p-0">
                  <Image src={BAR} />
                  <span
                    style={{
                      margin: '0px 5px',
                      fontWeight: '100',
                      color: '#333',
                      fontSize: '13px',
                    }}
                  >
                  x
                  </span>
                  <Any>
                  Any
                  </Any>
                </div>
                <div className="col-3 p-0">
                  <RowPosition>
            Any
                  </RowPosition>
                </div>
                <div className="col-3 p-0">
                  <PointsNumber>
                  5
                  </PointsNumber>
                </div>
              </div>
            </div>
          </Line>
        </Li>
      );
    }

    return (
      <>
        <Paytable
          style={{
            transform: 'scale(0.95, 0.95)',
          }}
        >
          <PaytableBody>
            <FaPlus
              style={{
                transform: 'rotate(45deg)',
                position: 'absolute',
                right: '7px',
                top: '7px',
                fontSize: '17px',
                color: '#fff',
                cursor: 'pointer',
              }}
              onClick={this.hideTable}
            />
            <Combination>
                Combination
            </Combination>
            <Row>
                Row
            </Row>
            <Points>
                Points
            </Points>
            <List>
              {row1}
              {row2}
              {row3}
              {row4}
              {row5}
              {row6}
              {row7}
              {row8}
              {row9}
              {row10}
            </List>
          </PaytableBody>
        </Paytable>
      </>
    );
  }
}
