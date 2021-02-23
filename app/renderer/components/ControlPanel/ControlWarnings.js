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

  const main = useSelector((state) => state.scoreboard.main);

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
    main == 'left' ? (
      <Buttons>
        <Sportsman color={'aka'}>
          <div>
            <Label>
              C1C
              <Input type="checkbox" {...AKAC1C.bind} />
            </Label>
            <Label>
              C1K
              <Input type="checkbox" {...AKAC1K.bind} />
            </Label>
            <Label>
              C1HC
              <Input type="checkbox" {...AKAC1HC.bind} />
            </Label>
            <Label>
              C1H
              <Input type="checkbox" {...AKAC1H.bind} />
            </Label>
          </div>
          <div>
            <Label>
              C2C
              <Input type="checkbox" {...AKAC2C.bind} />
            </Label>
            <Label>
              C2K
              <Input type="checkbox" {...AKAC2K.bind} />
            </Label>
            <Label>
              C2HC
              <Input type="checkbox" {...AKAC2HC.bind} />
            </Label>
            <Label>
              C2H
              <Input type="checkbox" {...AKAC2H.bind} />
            </Label>
          </div>
        </Sportsman>
        <Sportsman color={'ao'}>
          <div>
            <Label>
              C1C
              <Input type="checkbox" {...AOC1C.bind} />
            </Label>
            <Label>
              C1K
              <Input type="checkbox" {...AOC1K.bind} />
            </Label>
            <Label>
              C1HC
              <Input type="checkbox" {...AOC1HC.bind} />
            </Label>
            <Label>
              C1H
              <Input type="checkbox" {...AOC1H.bind} />
            </Label>
          </div>

          <div>
            <Label>
              C2C
              <Input type="checkbox" {...AOC2C.bind} />
            </Label>
            <Label>
              C2K
              <Input type="checkbox" {...AOC2K.bind} />
            </Label>
            <Label>
              C2HC
              <Input type="checkbox" {...AOC2HC.bind} />
            </Label>
            <Label>
              C2H
              <Input type="checkbox" {...AOC2H.bind} />
            </Label>
          </div>
        </Sportsman>
      </Buttons>
    ) : (
      <Buttons>
        <Sportsman color={'ao'}>
          <Div>
            <Label state={AOC1C.checked}>
              <Span>C1C</Span>
              <Input state={AOC1C.checked} type="checkbox" {...AOC1C.bind} />
            </Label>
            <Label state={AOC1K.checked}>
              <Span>C1K</Span>
              <Input type="checkbox" {...AOC1K.bind} />
            </Label>
            <Label>
              <Span>C1HC</Span>
              <Input type="checkbox" {...AOC1HC.bind} />
            </Label>
            <Label>
              <Span>C1H</Span>
              <Input type="checkbox" {...AOC1H.bind} />
            </Label>
          </Div>

          <Div>
            <Label>
              <Span>C2C</Span>
              <Input type="checkbox" {...AOC2C.bind} />
            </Label>
            <Label>
              <Span>C2K</Span>
              <Input type="checkbox" {...AOC2K.bind} />
            </Label>
            <Label>
              <Span>C2HC</Span>
              <Input type="checkbox" {...AOC2HC.bind} />
            </Label>
            <Label>
              <Span>C2H</Span>
              <Input type="checkbox" {...AOC2H.bind} />
            </Label>
          </Div>
        </Sportsman>
        <Sportsman color={'aka'}>
          <Div>
            <Label>
              <Span>C1C</Span>
              <Input type="checkbox" {...AKAC1C.bind} />
            </Label>
            <Label>
              <Span>C1K</Span>
              <Input type="checkbox" {...AKAC1K.bind} />
            </Label>
            <Label>
              <Span>C1HC</Span>
              <Input type="checkbox" {...AKAC1HC.bind} />
            </Label>
            <Label>
              <Span>C1H</Span>
              <Input type="checkbox" {...AKAC1H.bind} />
            </Label>
          </Div>
          <Div>
            <Label>
              <Span>C2C</Span>
              <Input type="checkbox" {...AKAC2C.bind} />
            </Label>
            <Label>
              <Span>C2K</Span>
              <Input type="checkbox" {...AKAC2K.bind} />
            </Label>
            <Label>
              <Span>C2HC</Span>
              <Input type="checkbox" {...AKAC2HC.bind} />
            </Label>
            <Label>
              <Span>C2H</Span>
              <Input type="checkbox" {...AKAC2H.bind} />
            </Label>
          </Div>
        </Sportsman>
      </Buttons>
    );

  return (
    <Block>
      {content}

      <Button onClick={() => reset()}>RESET warnings</Button>
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
  flex-direction: column;
`;

const Div = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 5px;
  margin: 5px auto;
`;


const Sportsman = styled.div`
  color: ${(props) => (props.color === 'aka' ? 'red' : 'blue')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: min(40vh, 100px);
  border: 1px solid black;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  height: 30px;
  border: 1px solid black;
  padding: 5px;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  background-color: ${(props) => (props.state ? 'blue' : 'red')};
`;
const Span = styled.span`
  position: relative;
  padding: 0 0 0 30px;
  cursor: pointer;
  &::before {
  }

  &::after {
  }
`;
