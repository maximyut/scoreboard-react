import React from 'react';
import styled from 'styled-components';
import Points from './Points';
import Warnings from './Warnings';

export default function Sportsman({ color, main }) {
  return (
    <Block color={color} main={main}>
      <Info>
        <div>{color.toUpperCase()}</div>
        <div>FirstName SecondName</div>
        <div>
          <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEX////MAAD++PjIIjjTAAAAsElEQVR4nO3cAQkAIBDAwNf+oQ0xQZC7CAuwGQAAAAAAAAAAAAAAAAAAAICLNsEsAvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkS+RL5EvkSJ43k9QcFAAAAAAAAAAAAAAAAAAAA+MsBm4BGz5N99MoAAAAASUVORK5CYII=" />
          BLR
        </div>
      </Info>

      <Points color={color} main={main}/>
      <Warnings color={color} />
    </Block>
  );
}

const Block = styled.div`
  width: 50vw;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  padding-bottom: 0;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: black;

  font-size: ${(props) => props.main ? 'min(4vh, 30px)' : '4vh'} ;
  /* text-align: ${(props) => (props.color == 'aka' ? 'left' : 'right')}; */
  text-align: center;
  color: ${(props) => (props.color == 'aka' ? 'red' : 'blue')};
`;

const Img = styled.img`
  height: 5vh;
  border: 1px solid black;
`;

const Info = styled.div``;
