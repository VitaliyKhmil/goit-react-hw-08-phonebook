import styled from '@emotion/styled';

export const UserMenuText = styled.span`
  font-size: 22px;
  font-weight: medium;
  color: gray;
  margin-right: 20px;
`;

export const Userbutton = styled.button`
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
  &:hover {background-color: rgb(247, 90, 90)}
  &:active {
  background-color: red;
  box-shadow: 0 5px #666;
  transform: translateY(4px)}`;