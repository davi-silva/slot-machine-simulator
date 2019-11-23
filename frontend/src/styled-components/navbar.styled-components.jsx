import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: .05rem 1rem;
  background: #fff;
  z-index: 99;
`;

export const LinkA = styled(Link)`
  color: #999;
  text-decoration: none;
  font-weight: 100;
  font-size: 13px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #6d00e4;
  }
  @media (max-width: 991px) {
    display: table;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  @media (max-width: 240px) {
    font-size: 11px;
  }
`;

export const Brand = styled(Link)`
  color: #6d00e4;
  font-weight: 900;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
  @media (max-width: 240px) {
    font-size: 13px;
  }
`;

export const ToggleButton = styled.button`
  color: #6d00e4;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
  @media (max-width: 240px) {
    font-size: 13px;
  }
`;
