import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputForm = styled(Field)`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  color: #757575;
  font-family: inherit;
  padding-left: 12px;
`;

export const ButtonForm = styled.button`
  display: flex;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #ffc20b;
  border: none;
  border-radius: 15px;
  justify-content: center;
  box-shadow: 0 7px #999;
  &:hover {
    background-color: rgb(247, 90, 90);
  }
  &:active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #757575;
`;