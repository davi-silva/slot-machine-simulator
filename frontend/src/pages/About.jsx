import React, { Component } from 'react';

import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import Profile from '../static/img/Profile.jpg';

import {
  Title,
  ProfilePicture,
  ProfilePictureShadow,
  Name,
  SocialMedias,
  Li,
  A,
} from '../styled-components/about.styled-components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>
                This Website was developed by
              </Title>
              <ProfilePictureShadow>
                <ProfilePicture
                  src={Profile}
                />
              </ProfilePictureShadow>
              <Name>
                Davi Silva
              </Name>
              <SocialMedias>
                <Li>
                  <A to="//github.com/Davi-Silva" target="__blank">
                    <FaGithub />
                  </A>
                </Li>
                <Li>
                  <A to="//linkedin.com/in/davicsilva/" target="__blank">
                    <FaLinkedinIn />
                  </A>
                </Li>
              </SocialMedias>
            </div>
          </div>
        </div>
      </>
    );
  }
}
