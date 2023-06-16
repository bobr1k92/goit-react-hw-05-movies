import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 30px;
`;

export const CastListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;
export const CastListImg = styled.img`
  display: flex;
  justify-content: center;
`;
export const CastListText = styled.p`
  margin: 5px 0;
  display: flex;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
