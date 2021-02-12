import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue('');

  return {
    bind: { value, onChange },
    onChange,
    value,
    clear,
  };
};

export default function Time() {
  const seconds = useInput(0);
  const minutes = useInput(0);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [dSec, setDSec] = useState(0);
  const [state, setState] = useState(false);

  const time = useRef(0);

  const timer = useRef('');

  const getZero = (num) => {
    if (num >= -1 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const setTime = () => {
    setMin(Math.floor(time.current / 600));
    setSec(Math.floor(time.current / 10 - Math.floor(time.current / 600) * 60));
    setDSec(
      Math.floor(
        time.current - Math.floor(time.current / 10 - Math.floor(time.current / 600) * 60) * 10,
      ),
    );
  };

  const toggleTimer = () => {
    if (!state && time.current > 0) {
      timer.current = setInterval(() => {
        if (time.current <= 0) {
          clearInterval(timer.current);
          setState((prev) => !prev);
        } else {
          time.current--;
          setTime();
        }
      }, 100);
      setState((prev) => !prev);
    } else if (time.current > 0) {
      clearInterval(timer.current);
      setState((prev) => !prev);
    }
  };

  const resetTimer = () => {
    time.current = Math.floor((Number(minutes.value) * 60 + Number(seconds.value)) * 10);
    setTime();
  };

  const addTime = (value) => {
    time.current += Number(value) * 10;
    setTime();
    console.log(time.current);
  };

  const setButton = state ? 'stop' : 'start';

  return (
    <Block>
      <Timer state={state}>
        {getZero(min)}:{getZero(sec)}
        {time.current > 50 ? '' : `.${dSec}`}
      </Timer>
      <div>
        <input
          min="0"
          max="59"
          type="number"
          value={getZero(minutes.value)}
          onChange={minutes.onChange}></input>
        <input
          min="0"
          max="59"
          type="number"
          value={getZero(seconds.value)}
          onChange={seconds.onChange}></input>
        <button onClick={resetTimer}>set</button>
        <button onClick={toggleTimer}>{setButton}</button>
        <button onClick={resetTimer}>reset</button>
        <hr />
        <div>
          <button onClick={() => addTime(1)}>add 1 sec</button>
          <button onClick={() => addTime(5)}>add 5 sec</button>
          <button onClick={() => addTime(10)}>add 10 sec</button>
          <br />
          <button onClick={() => addTime(-1)}>remove 1 sec</button>
          <button onClick={() => addTime(-5)}>remove -5 sec</button>
          <button onClick={() => addTime(-10)}>remove -10 sec</button>
        </div>
      </div>
    </Block>
  );
}

const Timer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding: 5px;
  min-width: 3%;
  width: 18vw;

  background-color: black;
  border: 2px solid white;

  text-align: center;
  font-family: LCD;
  font-size: 8vh;
  color: ${(props) => (props.state ? 'yellow' : 'white')};
`;

const Block = styled.div``;
