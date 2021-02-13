import React, { useState } from 'react';
import Sportsman from './Sportsman';
import Time from './Time';
import styled from 'styled-components';

export default function Scoreboard() {

  return (
    <Block>
      <Sportsmen>
        <Sportsman color={'aka'} />
        <Time />
        <Sportsman color={'ao'} />
      </Sportsmen>
    </Block>
  );
}



const Block = styled.div`
  height: 100%;
  -webkit-user-select: none; // отмена выделения текста
`;

const Sportsmen = styled.div`
  height: 100%;

  display: flex;
  position: relative;
`;
