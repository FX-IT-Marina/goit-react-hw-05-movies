import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const FormMovie = styled.form`
  display: flex;
  gap: 15px;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: 2px solid #eac645;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 2px solid #eac645;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const LinkMovie = styled(Link)`
  
  text-decoration: none;
  color: white;
  &:hover {
    color: #eac645;
`;

export const ListMovie = styled.li`
  margin-bottom: 8px;
  color: white;
  &:hover {
    color: #eac645;
  }
`;
