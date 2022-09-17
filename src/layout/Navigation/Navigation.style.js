import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeLink = styled(NavLink)`
  color: gray;
  font-size: 25px;
  margin-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;