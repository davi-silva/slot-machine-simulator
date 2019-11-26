import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.p`
  color: #333;
  font-size: 14px;
  margin: 15px auto;
  display: table;
  text-transform: uppercase;
`;

export const ProfilePictureShadow = styled.div`
  height: 200px;
  width: 200px;
  display: table;
  margin: 0 auto;
  border-radius: 100px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const ProfilePicture = styled.img`
  height: 200px;
  width: 200px;
  display: table;
  margin: 0 auto;
  border-radius: 100px;
`;

export const Name = styled.b`
  color: #333;
  font-size: 17px;
  display: table;
  margin: 7px auto;
`;

export const SocialMedias = styled.ul`
  display: table;
  margin: 0 auto;
`;

export const Li = styled.li`
  list-style: none;
  display: inline;
  margin: 0 10px;
`;

export const A = styled(Link)`
  color: #9000e4;
  font-size: 22px;
  transition: all .2s ease-in-out;
  &:hover {
    text-decoration: none;
    color: #63009c;
  }
`;
