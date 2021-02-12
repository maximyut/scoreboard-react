import React from 'react';
import styled from 'styled-components';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import Scoreboard from '../components/Scoreboard/Scoreboard';

export default function ControlPanelPage() {
  return (
    <Block>
      <Panel>
        <ControlPanel />
      </Panel>
      <Board>
        <Scoreboard />
      </Board>
      <Console></Console>
    </Block>
  );
}

const Block = styled.div`
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 65% auto;
`;

const Board = styled.div`
  /* height: %; */
  border: 2px solid red;
`;

const Panel = styled.div`
  border: 1px solid black;
`;

const Console = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  background-color: blue;
  border: 1px solid black;
`;
