import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  changePointsAka,
  changePointsAo,
  setSenshu,
  resetPoints,
} from '../../redux/actions/points';

import styled from 'styled-components';

const ControlPoints = ({ changePointsAka, changePointsAo, setSenshu, senshu, resetPoints }) => {
  const onValueChange = (event) => {
    setSenshu(event.target.value);
  };

  const main = useSelector((state) => state.scoreboard.main);

  const content =
  main == 'left' ? (
      <Buttons>
        <Sportsman>
          <div>
            <Button color={'aka'} onClick={() => changePointsAka(1)}>
              Yuko
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(2)}>
              Waza-ari
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(3)}>
              Ippon
            </Button>
          </div>
          <div>
            <Button color={'aka'} onClick={() => changePointsAka(-1)}>
              -Yuko
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(-2)}>
              -Waza-ari
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(-3)}>
              -Ippon
            </Button>
          </div>
        </Sportsman>
        <Sportsman>
          <div>
            <Button color={'ao'} onClick={() => changePointsAo(1)}>
              Yuko
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(2)}>
              Waza-ari
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(3)}>
              Ippon
            </Button>
          </div>
          <div>
            <Button color={'ao'} onClick={() => changePointsAo(-1)}>
              -Yuko
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(-2)}>
              -Waza-ari
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(-3)}>
              -Ippon
            </Button>
          </div>
        </Sportsman>
      </Buttons>
    ) : (
      <Buttons>
        <Sportsman>
          <div>
            <Button color={'ao'} onClick={() => changePointsAo(1)}>
              Yuko
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(2)}>
              Waza-ari
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(3)}>
              Ippon
            </Button>
          </div>
          <div>
            <Button color={'ao'} onClick={() => changePointsAo(-1)}>
              -Yuko
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(-2)}>
              -Waza-ari
            </Button>
            <Button color={'ao'} onClick={() => changePointsAo(-3)}>
              -Ippon
            </Button>
          </div>
        </Sportsman>
        <Sportsman>
          <div>
            <Button color={'aka'} onClick={() => changePointsAka(1)}>
              Yuko
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(2)}>
              Waza-ari
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(3)}>
              Ippon
            </Button>
          </div>
          <div>
            <Button color={'aka'} onClick={() => changePointsAka(-1)}>
              -Yuko
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(-2)}>
              -Waza-ari
            </Button>
            <Button color={'aka'} onClick={() => changePointsAka(-3)}>
              -Ippon
            </Button>
          </div>
        </Sportsman>
      </Buttons>
    );

  return (
    <div>
      {content}
      <div>
        Senshu
        <input
          type="radio"
          value="aka"
          name="senshu"
          checked={senshu === 'aka'}
          onChange={onValueChange}
        />
        Aka
        <input
          type="radio"
          value="ao"
          name="senshu"
          checked={senshu === 'ao'}
          onChange={onValueChange}
        />
        Ao
        <input
          type="radio"
          value="no"
          name="senshu"
          checked={senshu === 'no'}
          onChange={onValueChange}
        />
        No
      </div>
      <button onClick={() => resetPoints()}>RESET points</button>
    </div>
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

const mapDispatchToProps = {
  changePointsAka,
  changePointsAo,
  setSenshu,
  resetPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPoints);

const Button = styled.button`
  color: ${(props) => (props.color === 'aka' ? 'red' : 'blue')};
`;

const Buttons = styled.div`
  display: flex;
`;

const Sportsman = styled.div`
  display: flex;
  flex-direction: column;
`;
