import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  color: #c07272;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #c07272;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    background-color: #ff6b01;
    border: 1px solid rgba(0, 0, 0, 0);
    color: #fff;
  }
`;
