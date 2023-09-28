import styled from 'styled-components';
const { NavLink } = require('react-router-dom');

export const Header = styled.header`
  display: flex;
  padding: 15px;
  border-bottom: 2px solid black;
  border: 1px solid white;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 50px;
  gap: 30px;
  list-style-type: none;
`;

export const Main = styled.main`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  &.active {
    color: #eac645;
  }
`;
