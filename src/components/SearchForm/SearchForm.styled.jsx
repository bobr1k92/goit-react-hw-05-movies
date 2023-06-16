import styled from 'styled-components';

export const SearchFormWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormSearch = styled.form`
  display: flex;
  margin: 20px 0;
`;

export const FormInput = styled.input`
  color: #040407;
  background: 0 0;
  border: 0;
  border-bottom: 0.5px solid #753f3f;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 7px;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  &:focus {
    outline: 1px solid #6f6969;
    border-radius: 3px;
  }
`;

export const FormButton = styled.button`
  margin-left: 5px;
  padding: 5px;
  background: 0 0;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: #ff6b01;
  }
`;
