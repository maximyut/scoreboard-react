import React from 'react';
import styled from 'styled-components';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import Scoreboard from '../../components/Scoreboard/Scoreboard';

export default function ControlPanelPage() {
    return (
      <>
        <Board>
          <Scoreboard />
        </Board>
        <ControlPanel />
      </>
    );
};

const Board = styled.div`
width: 50%;
height: 50%;
`

