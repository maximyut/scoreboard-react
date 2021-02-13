import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Points = ({ color, pointsAka, pointsAo, senshu, winner }) => {
  const points = color === 'aka' ? pointsAka : pointsAo;

  return (
    <Block>
      <div>
        <Senshu c={color} senshu={senshu}>
          S
        </Senshu>
        <Point c={color} winner={winner}>
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
    winner: state.points.winner,
  };
};

export default connect(mapStateToProps, null)(Points);

const Block = styled.div`
  font-size: 20vmin;
  font-family: LCD;
  text-align: center;
`;

const Point = styled.div.attrs((props) => ({
  color: props.c === 'aka' ? 'red' : 'blue',
}))`
  font-size: 20vmin;
  font-family: LCD;
  text-align: center;
  color: ${(props) => (props.winner !== 'null' && props.c == props.winner ? 'white' : props.color)};
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
