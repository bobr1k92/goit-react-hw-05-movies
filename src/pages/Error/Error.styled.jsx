import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ErrorImg = styled.img`
  display: flex;
  margin: 15px auto;
`;

export const ErrorText = styled.p`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const ErrorLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: blue;
  font-size: 15px;
`;
