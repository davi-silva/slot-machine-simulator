/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import BAR from '../../../static/img/BAR.png';
import BAR2 from '../../../static/img/2xBAR.png';
import BAR3 from '../../../static/img/3xBAR.png';
import Seven from '../../../static/img/7.png';
import Cherry from '../../../static/img/Cherry.png';

import {
  CombinationSelectorShadow,
  CombinationSelectorBody,
  Title,
  Wheel,
  WheelImage,
} from '../../../styled-components/combination-selector.styled-components';

export default class CombinationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheel1Choice: '',
      wheel2Choice: '',
      wheel3Choice: '',
    };
    this.hideCombinationSelector = this.hideCombinationSelector.bind(this);
    this.ChooseWheel1 = this.ChooseWheel1.bind(this);
    this.ChooseWheel2 = this.ChooseWheel2.bind(this);
    this.ChooseWheel3 = this.ChooseWheel3.bind(this);
  }

  hideCombinationSelector() {
    const { ShowCombSelector } = this.props;
    const hideCombSelector = ShowCombSelector;
    hideCombSelector();
  }

  ChooseWheel1(e) {
    const { wheel1 } = this.refs;
    wheel1.childNodes.forEach((img) => {
      console.log(img);
      img.classList.remove('ChosenCombination');
    });
    this.setState({
      wheel1Choice: e.target.classList[2],
    });
    e.target.classList.add('ChosenCombination');
  }

  ChooseWheel2(e) {
    const { wheel2 } = this.refs;
    wheel2.childNodes.forEach((img) => {
      console.log(img);
      img.classList.remove('ChosenCombination');
    });
    this.setState({
      wheel2Choice: e.target.classList[2],
    });
    e.target.classList.add('ChosenCombination');
  }

  ChooseWheel3(e) {
    const { wheel3 } = this.refs;
    wheel3.childNodes.forEach((img) => {
      console.log(img);
      img.classList.remove('ChosenCombination');
    });
    this.setState({
      wheel3Choice: e.target.classList[2],
    });
    e.target.classList.add('ChosenCombination');
  }


  render() {
    return (
      <>
        <CombinationSelectorShadow>
          <CombinationSelectorBody>
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
              onClick={this.hideCombinationSelector}
            />
            <Title>
              Combination Selector
            </Title>
            <Wheel
              style={{
                left: '32px',
              }}
              ref="wheel1"
            >
              <WheelImage
                src={BAR3}
                onClick={this.ChooseWheel1}
                className="bar3"
              />
              <WheelImage
                src={BAR}
                onClick={this.ChooseWheel1}
                className="bar"
              />
              <WheelImage
                src={BAR2}
                onClick={this.ChooseWheel1}
                className="bar2"
              />
              <WheelImage
                src={Seven}
                onClick={this.ChooseWheel1}
                className="seven"
              />
              <WheelImage
                src={Cherry}
                onClick={this.ChooseWheel1}
                className="cherry"
              />
            </Wheel>
            <Wheel
              style={{
                left: '138px',
              }}
              ref="wheel2"
            >
              <WheelImage
                src={BAR3}
                onClick={this.ChooseWheel2}
                className="bar3"
              />
              <WheelImage
                src={BAR}
                onClick={this.ChooseWheel2}
                className="bar"
              />
              <WheelImage
                src={BAR2}
                onClick={this.ChooseWheel2}
                className="bar2"
              />
              <WheelImage
                src={Seven}
                onClick={this.ChooseWheel2}
                className="seven"
              />
              <WheelImage
                src={Cherry}
                onClick={this.ChooseWheel2}
                className="cherry"
              />
            </Wheel>
            <Wheel
              style={{
                left: '245px',
              }}
              ref="wheel3"
            >
              <WheelImage
                src={BAR3}
                onClick={this.ChooseWheel3}
                className="bar3"
              />
              <WheelImage
                src={BAR}
                onClick={this.ChooseWheel3}
                className="bar"
              />
              <WheelImage
                src={BAR2}
                onClick={this.ChooseWheel3}
                className="bar2"
              />
              <WheelImage
                src={Seven}
                onClick={this.ChooseWheel3}
                className="seven"
              />
              <WheelImage
                src={Cherry}
                onClick={this.ChooseWheel3}
                className="cherry"
              />
            </Wheel>
          </CombinationSelectorBody>
        </CombinationSelectorShadow>
      </>
    );
  }
}
