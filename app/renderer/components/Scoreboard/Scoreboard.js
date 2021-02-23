import React, { useState } from 'react';
import Sportsman from './Sportsman';
import Time from './Time';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Scoreboard = ({ main }) => {
  const mainPosition = useSelector((state) => state.scoreboard.main);
  const outPosition = useSelector((state) => state.scoreboard.out);

  const position = main ? mainPosition : outPosition;

  const content =
    position == 'left' ? (
      <Sportsmen main={main}>
        <Sportsman color={'aka'} main={main} />
        <Time />
        <Sportsman color={'ao'} main={main} />
      </Sportsmen>
    ) : (
      <Sportsmen main={main}>
        <Sportsman color={'ao'} main={main} />
        <Time />
        <Sportsman color={'aka'} main={main} />
      </Sportsmen>
    );

  return <Block>{content}</Block>;
};

export default Scoreboard;

const Block = styled.div`
  height: 100%;
  -webkit-user-select: none; // отмена выделения текста
`;

const Sportsmen = styled.div`
  height: 100%;

  display: flex;
  position: relative;

  font-family: Roboto;
  font-weight: 700;

`;
