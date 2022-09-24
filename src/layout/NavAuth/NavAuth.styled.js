import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavButton = styled.button`
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #ffc20b;
  border: none;
  border-radius: 15px;
  box-shadow: 0 7px #999;
  margin-right: 14px;
  &:hover {
    background-color: rgb(247, 90, 90);
  }
  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: gray;
  font-size: 15px;
`;