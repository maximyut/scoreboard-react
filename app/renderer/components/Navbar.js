import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Block>
      <Icon onClick={() => console.log('hi1')}>
      </Icon>
      <Icon onClick={() => console.log('hi2')}>

      </Icon>
      <Icon onClick={() => console.log('hi3')}>

      </Icon>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  height: 10%;
  align-items: center;
  border-bottom: 3px solid gray;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  margin: 10px;
`;

export default Navbar;
