import React from 'react';
import styled from 'styled-components';
import Points from './Points';
import Warnings from './Warnings';

export default function Sportsman({ color, p }) {
  return (
    <Block color={color}>
      <Info>
        <div>{color}</div>
        <div>FirstName SecondName</div>
        <div>
          <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEX////MAAD++PjIIjjTAAAAsElEQVR4nO3cAQkAIBDAwNf+oQ0xQZC7CAuwGQAAAAAAAAAAAAAAAAAAAICLNsEsAvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkSJ43k9QcFAAAAAAAAAAAAAAAAAAAA+MsBm4BGz5N99MoAAAAASUVORK5CYII=" />
          BLR
        </div>
      </Info>

      <Points color={color} p={p} />
      <Warnings color={color} />
    </Block>
  );
}

const Block = styled.div`
  width: 50vw;
  height: 100%;
  padding: 20px;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: black;

  font-size: 4vh;
  text-align: ${(props) => (props.color == 'Aka' ? 'left' : 'right')};
  color: ${(props) => (props.color == 'Aka' ? 'red' : 'blue')};
`;

const Img = styled.img`
  height: 5vh;
  border: 1px solid black;
`;

const Info = styled.div``;
