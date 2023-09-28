import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const Main = styled.main`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  max-width: 100%;
`;

export const NameTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

export const Name = styled.p`
  color: white;
`;

export const OverviewTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const GenresTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const Information = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

export const LinkInformation = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

export const LinkBack = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  border: 2px solid #eac645;
  border-radius: 8px;
  padding: 3px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Wrapper = styled.img`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid white;
`;

export const Genres = styled.ul`
  display: flex;
  gap: 12px;
  padding: 0;
`;

export const InformationList = styled.ul`
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
`;
