import React from 'react';

import {
  FaBars,
} from 'react-icons/fa';

import {
  NavBar,
  LinkA,
  Brand,
  ToggleButton,
  // SignUp,
} from '../../../styled-components/navbar.styled-components';

export default function Navbar() {
  return (
    <>
      <NavBar className="navbar navbar-expand-md">
        <div className="container">
          <Brand className="navbar-brand" to="/">
              Slot Machine
          </Brand>
          <ToggleButton
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </ToggleButton>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <LinkA
                  className="nav-link"
                  to="/"
                  onClick={() => {
                    document
                      .querySelector('#navbarResponsive')
                      .classList.remove('show');
                  }}
                >
                    Play
                </LinkA>
              </li>
              <li className="nav-item">
                <LinkA
                  className="nav-link"
                  to="/scoreboard"
                  onClick={() => {
                    document
                      .querySelector('#navbarResponsive')
                      .classList.remove('show');
                  }}
                >
                    Scoreboard
                </LinkA>
              </li>
              <li className="nav-item">
                <LinkA
                  className="nav-link"
                  to="/about"
                  onClick={() => {
                    document
                      .querySelector('#navbarResponsive')
                      .classList.remove('show');
                  }}
                >
                    About
                </LinkA>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    </>
  );
}
