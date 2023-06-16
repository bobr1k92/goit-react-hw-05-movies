import styled from 'styled-components';

export const MovieCardWrap = styled.div`
  display: flex;
`;
export const MovieCardInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: red;
`;

export const MovieTitle = styled.h2`
  display: flex;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const MovieTitleOverview = styled.h2`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const MovieText = styled.p`
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
export const MovieTextInfo = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
