import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setTime, startTime, stopTime, addTime } from '../../redux/actions/actions';

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

const ControlTime = ({ setTime, startTime, stopTime, going, time, addTime }) => {
  const timer = useRef('');

  //Остаётся здесь
  const seconds = useInput(0);
  const minutes = useInput(0);

  const submit = () => {
    setTime(Math.floor((Number(minutes.value) * 60 + Number(seconds.value)) * 10));
  };

  const getZero = (num) => {
    if (num >= -1 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const start = (
    <button
      onClick={() => {
        if (!going && time > 0) {
          timer.current = setInterval(() => {
            startTime();
            time = time - 1;
            console.log(time);
            if (time == 0) {
              clearInterval(timer.current);
              stopTime();
            }
          }, 100);
        }
      }}>
      Start
    </button>
  );

  const stop = (
    <button
      onClick={() => {
        clearInterval(timer.current);
        stopTime();
      }}>
      Stop
    </button>
  );

  const setButton = going ? stop : start;

  return (
    <div>
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
        <button onClick={submit}>Set</button>
        {setButton}
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    time: state.time.time,
    going: state.time.going,
  };
};

const mapDispatchToProps = {
  setTime,
  startTime,
  stopTime,
  addTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlTime);
