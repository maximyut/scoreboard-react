import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Time = ({ time, going }) => {

  let minutes = Math.floor(time / 600),
    seconds = Math.floor(time / 10 - minutes * 60),
    dseconds = Math.floor(time - seconds * 10);

  const getZero = (num) => {
    if (num >= -1 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };

  return (
    <Block>
      <Timer state={going}>
        {getZero(minutes)}:{getZero(seconds)}
        {time > 50 ? '' : `.${dseconds}`}
      </Timer>
    </Block>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time.time,
    going: state.time.going,
  };
};

export default connect(mapStateToProps)(Time);

const Timer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  /* padding: 5px; */
  /* min-width: 3%; */
  /* width: 18vw; */

  background-color: black;
  /* border: 2px solid white; */

  text-align: center;
  font-family: LCD;
  font-size: 15vmin;
  color: ${(props) => (props.state ? 'yellow' : 'white')};
`;

const Block = styled.div``;
