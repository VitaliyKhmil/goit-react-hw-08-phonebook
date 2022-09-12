import styled from 'styled-components';


export const FormButton = styled.button`
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
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: red;
`;
