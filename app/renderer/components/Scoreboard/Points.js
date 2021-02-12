import React, { useState } from 'react';
import styled from 'styled-components';

export default function Points({ color, p }) {
  const [points, setPoints] = useState(0);
  const [state, setState] = useState(false);

  const addPonts = (value) => {
    setPoints(points + value);
    p(points + value + color);
  };

  return (
    <Block>
      <div>
        <Senshu state={state} color={color}>
          S
        </Senshu>
        {points}
      </div>

      {/* <button onClick={() => addPonts(1)}>Yuko</button>
      <button onClick={() => addPonts(2)}>Waza-ari</button>
      <button onClick={() => addPonts(3)}>Ippon </button>
      <input type="checkbox" value={state} onChange={() => setState((prev) => !prev)} /> */}
    </Block>
  );
}

const Block = styled.div`
  font-size: 20vmin;
  font-family: LCD;
  text-align: center;
`;

const Senshu = styled.div.attrs((props) => ({
  color: props.color === 'Aka' ? 'red' : 'blue',
}))`
  position: relative;
  left: ${(props) => (props.color === 'red' ? '70%' : '10%')};

  height: 5vh;
  width: 5vh;

  border-radius: 50%;
  background-color: ${(props) => (props.state ? props.color : 'black')};

  text-align: center;
  vertical-align: center;
  font-size: 5vmin;
  color: ${(props) => (props.state ? 'white' : 'black')};
  font-family: 'Times New Roman', Times, serif;
`;
