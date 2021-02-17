import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes, css } from 'styled-components';

const Points = ({
  color,
  pointsAka,
  pointsAo,
  senshu,
  winner,
  mainPosition,
  outPosition,
  main,
}) => {
  const points = color === 'aka' ? pointsAka : pointsAo;
  const position = main ? mainPosition : outPosition;

  console.log(winner)

  return (
    <Block>
      <div>
        <Senshu c={color} senshu={senshu}>
          S
        </Senshu>

        <Point c={color} winner={winner} position={position}>
          {points}
        </Point>
      </div>
    </Block>
  );
};

const mapStateToProps = (state) => {
  return {
    pointsAka: state.points.pointsAka,
    pointsAo: state.points.pointsAo,
    senshu: state.points.senshu,
    winner: state.winner.winner,
    mainPosition: state.scoreboard.main,
    outPosition: state.scoreboard.out,
  };
};

export default connect(mapStateToProps, null)(Points);

const Block = styled.div`
  font-size: 20vmin;
  font-family: LCD;
  text-align: center;
`;

const rotate = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

const complexMixin = css`
  color: ${(props) => (props.whiteColor ? 'white' : 'black')};
`;

const Point = styled.div.attrs((props) => ({
  color: props.c === 'aka' ? 'red' : 'blue',
  a: props.position === 'right' ? 'right' : 'left',
  o: props.position === 'right' ? 'left' : 'right',
}))`
  font-size: 20vmin;
  font-family: LCD;
  text-align: ${(props) => (props.c === 'aka' ? props.a : props.o)};
  color: ${(props) => (props.color)};

  animation-name: ${(props) => (props.winner !== 'null' && props.c == props.winner ? rotate : 'none')};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Senshu = styled.div.attrs((props) => ({
  color: props.c === 'aka' ? 'red' : 'blue',
}))`
  position: relative;
  left: ${(props) => (props.color === 'red' ? '70%' : '10%')};
  z-index: 999;

  height: 5vh;
  width: 5vh;

  border-radius: 50%;
  background-color: ${(props) =>
    props.senshu !== 'null' && props.c == props.senshu ? props.color : 'black'};

  text-align: center;
  vertical-align: center;
  font-size: 5vmin;
  color: ${(props) => (props.senshu !== 'null' && props.c == props.senshu ? 'white' : 'black')};
  font-family: 'Times New Roman', Times, serif;
`;
