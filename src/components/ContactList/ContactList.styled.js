import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactsListItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
`;

export const ContactsListText = styled.p`
  margin: 0 15px;
  font-size: large;
`;

export const ButtonDelete = styled.button`
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
   &:hover {background-color: rgb(247, 90, 90)};
   &:active {
  background-color: red;
  box-shadow: 0 5px #666;
  transform: translateY(4px)}`;