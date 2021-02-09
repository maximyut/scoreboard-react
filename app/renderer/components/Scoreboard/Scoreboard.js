import React, { useState } from 'react';
import Sportsman from './Sportsman';
import Time from './Time';
import styled from 'styled-components';

export default function Scoreboard() {
  const [state, setState] = useState(0);

  const p = (value) => {
    setState((value) => value);
    return value;
  };

  const r = () => {
    console.log(p());
  };

  return (
    <Block>
      <Sportsmen>
        <Sportsman color={'Aka'} p={p} />
        <Time />
        <Sportsman color={'Ao'} p={p} />
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
