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
              <Li>
                <Line>
                  <div className="container p-0">
                    <div className="row pl-3 pr-3">
                      <div className="col-6 p-0">
                        <Image src={Seven} />
                        <Image src={Cherry} />
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
            </List>
          </PaytableBody>
        </Paytable>
      </>
    );
  }
}
