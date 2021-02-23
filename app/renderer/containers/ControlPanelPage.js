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
        <Scoreboard main={true}/>
      </Board>
      {/* <Console></Console> */}
    </Block>
  );
}

const Block = styled.div`
  height: 90%;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: minmax(500px, 65%) auto;

  font-family: Roboto;
  font-weight: 400;
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
