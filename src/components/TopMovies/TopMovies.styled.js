import styled from 'styled-components';

const { Link } = require('react-router-dom');

export const MoviesLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #eac645;
  }
`;

export const MoviesName = styled.li`
  margin-bottom: 10px;
`;
