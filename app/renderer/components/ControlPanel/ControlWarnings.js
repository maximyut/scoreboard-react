import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeWarning, resetWarnings } from '../../redux/actions/warnings';

const useCheckbox = (initialValue) => {
  const [checked, setChecked] = useState(initialValue);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  const clear = () => setChecked(false);

  return {
    bind: { checked, onChange },
    onChange,
    checked,
    clear,
  };
};

const ControlWarnings = ({ changeWarning, resetWarnings }) => {
  const AKAC1C = useCheckbox(false),
    AKAC1K = useCheckbox(false),
    AKAC1HC = useCheckbox(false),
    AKAC1H = useCheckbox(false),
    AKAC2C = useCheckbox(false),
    AKAC2K = useCheckbox(false),
    AKAC2HC = useCheckbox(false),
    AKAC2H = useCheckbox(false),
    AOC1C = useCheckbox(false),
    AOC1K = useCheckbox(false),
    AOC1HC = useCheckbox(false),
    AOC1H = useCheckbox(false),
    AOC2C = useCheckbox(false),
    AOC2K = useCheckbox(false),
    AOC2HC = useCheckbox(false),
    AOC2H = useCheckbox(false);

  const aka = useSelector((state) => state.scoreboard.aka);

  const akaWarnings = {
    akac1c: AKAC1C.checked,
    akac1k: AKAC1K.checked,
    akac1hc: AKAC1HC.checked,
    akac1h: AKAC1H.checked,
    akac2c: AKAC2C.checked,
    akac2k: AKAC2K.checked,
    akac2hc: AKAC2HC.checked,
    akac2h: AKAC2H.checked,
    aoc1c: AOC1C.checked,
    aoc1k: AOC1K.checked,
    aoc1hc: AOC1HC.checked,
    aoc1h: AOC1H.checked,
    aoc2c: AOC2C.checked,
    aoc2k: AOC2K.checked,
    aoc2hc: AOC2HC.checked,
    aoc2h: AOC2H.checked,
  };

  useEffect(() => {
    changeWarning(akaWarnings);
  });

  const reset = () => {
    resetWarnings();
    AKAC1C.clear();
    AKAC1K.clear();
    AKAC1HC.clear();
    AKAC1H.clear();
    AKAC2C.clear();
    AKAC2K.clear();
    AKAC2HC.clear();
    AKAC2H.clear();
    AOC1C.clear();
    AOC1K.clear();
    AOC1HC.clear();
    AOC1H.clear();
    AOC2C.clear();
    AOC2K.clear();
    AOC2HC.clear();
    AOC2H.clear();
  };

  const content =
    aka == 'left' ? (
      <Buttons>
        <Sportsman color={'aka'}>
          <div>
            <label>
              C1C
              <input type="checkbox" {...AKAC1C.bind} />
            </label>
            <label>
              C1K
              <input type="checkbox" {...AKAC1K.bind} />
            </label>
            <label>
              C1HC
              <input type="checkbox" {...AKAC1HC.bind} />
            </label>
            <label>
              C1H
              <input type="checkbox" {...AKAC1H.bind} />
            </label>
          </div>
          <div>
            <label>
              C2C
              <input type="checkbox" {...AKAC2C.bind} />
            </label>
            <label>
              C2K
              <input type="checkbox" {...AKAC2K.bind} />
            </label>
            <label>
              C2HC
              <input type="checkbox" {...AKAC2HC.bind} />
            </label>
            <label>
              C2H
              <input type="checkbox" {...AKAC2H.bind} />
            </label>
          </div>
        </Sportsman>
        <Sportsman color={'ao'}>
          <div>
            <label>
              C1C
              <input type="checkbox" {...AOC1C.bind} />
            </label>
            <label>
              C1K
              <input type="checkbox" {...AOC1K.bind} />
            </label>
            <label>
              C1HC
              <input type="checkbox" {...AOC1HC.bind} />
            </label>
            <label>
              C1H
              <input type="checkbox" {...AOC1H.bind} />
            </label>
          </div>

          <div>
            <label>
              C2C
              <input type="checkbox" {...AOC2C.bind} />
            </label>
            <label>
              C2K
              <input type="checkbox" {...AOC2K.bind} />
            </label>
            <label>
              C2HC
              <input type="checkbox" {...AOC2HC.bind} />
            </label>
            <label>
              C2H
              <input type="checkbox" {...AOC2H.bind} />
            </label>
          </div>
        </Sportsman>
      </Buttons>
    ) : (
      <Buttons>
        <Sportsman color={'ao'}>
          <div>
            <label>
              C1C
              <input type="checkbox" {...AOC1C.bind} />
            </label>
            <label>
              C1K
              <input type="checkbox" {...AOC1K.bind} />
            </label>
            <label>
              C1HC
              <input type="checkbox" {...AOC1HC.bind} />
            </label>
            <label>
              C1H
              <input type="checkbox" {...AOC1H.bind} />
            </label>
          </div>

          <div>
            <label>
              C2C
              <input type="checkbox" {...AOC2C.bind} />
            </label>
            <label>
              C2K
              <input type="checkbox" {...AOC2K.bind} />
            </label>
            <label>
              C2HC
              <input type="checkbox" {...AOC2HC.bind} />
            </label>
            <label>
              C2H
              <input type="checkbox" {...AOC2H.bind} />
            </label>
          </div>
        </Sportsman>
        <Sportsman color={'aka'}>
          <div>
            <label>
              C1C
              <input type="checkbox" {...AKAC1C.bind} />
            </label>
            <label>
              C1K
              <input type="checkbox" {...AKAC1K.bind} />
            </label>
            <label>
              C1HC
              <input type="checkbox" {...AKAC1HC.bind} />
            </label>
            <label>
              C1H
              <input type="checkbox" {...AKAC1H.bind} />
            </label>
          </div>
          <div>
            <label>
              C2C
              <input type="checkbox" {...AKAC2C.bind} />
            </label>
            <label>
              C2K
              <input type="checkbox" {...AKAC2K.bind} />
            </label>
            <label>
              C2HC
              <input type="checkbox" {...AKAC2HC.bind} />
            </label>
            <label>
              C2H
              <input type="checkbox" {...AKAC2H.bind} />
            </label>
          </div>
        </Sportsman>
      </Buttons>
    );

  return (
    <Block>
      {content}
      <button onClick={() => reset()}>RESET warnings</button>
    </Block>
  );
};

const mapDispatchToProps = {
  changeWarning,
  resetWarnings,
};

export default connect(null, mapDispatchToProps)(ControlWarnings);

const Block = styled.div`
  text-align: center;
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
`;

const Sportsman = styled.div`
  color: ${(props) => (props.color === 'aka' ? 'red' : 'blue')};
  display: flex;
  flex-direction: column;
`;
