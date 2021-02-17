import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import ControlPoints from './ControlPoints';
import ControlTime from './ControlTime';
import ControlWarnings from './ControlWarnings';

import { resetMatch, setWinner } from '../../redux/actions/winner';
import { setScoreboard, setControlScoreboard } from '../../redux/actions/scoreboard';

const ControlPanel = ({
  setWinner,
  resetMatch,
  setScoreboard,
  setControlScoreboard,
  main,
  out,
}) => {
  const [state, setState] = useState(0);

  const updateData = (value) => {
    setState(value);
  };

  const onMainChange = (event) => {
    setControlScoreboard(event.target.value);
  };

  const onOutChange = (event) => {
    setScoreboard(event.target.value);
  };

  return (
    <div>
      <ControlTime updateData={updateData} />
      <hr />
      <ControlPoints />
      <hr />
      <ControlWarnings />
      <hr />
      <button onClick={() => setWinner('aka')}>Aka Win</button>
      <button onClick={() => setWinner('ao')}>Ao Win</button>
      <button onClick={() => resetMatch(state)}>RESET</button>
      <div>
        For main screen
        <input
          type="radio"
          value="left"
          name="main"
          checked={main === 'left'}
          onChange={onMainChange}
        />
        Left
        <input
          type="radio"
          value="right"
          name="main"
          checked={main === 'right'}
          onChange={onMainChange}
        />
        Right
      </div>
      <div>
        For another screen
        <input
          type="radio"
          value="left"
          name="out"
          checked={out === 'left'}
          onChange={onOutChange}
        />
        Left
        <input
          type="radio"
          value="right"
          name="out"
          checked={out === 'right'}
          onChange={onOutChange}
        />
        Right
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    main: state.scoreboard.main,
    out: state.scoreboard.out,
  };
};

const mapDispatchToProps = {
  setWinner,
  resetMatch,
  setScoreboard,
  setControlScoreboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
