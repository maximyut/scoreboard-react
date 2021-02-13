import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changePointsAka, changePointsAo, setSenshu, setWinner } from '../../redux/actions/points';

import styled from 'styled-components';

const ControlPoints = ({
  changePointsAka,
  pointsAka,
  changePointsAo,
  pointsAo,
  setSenshu,
  senshu,
  setWinner,
  winner,
}) => {

  const onValueChange = (event) => {
    setSenshu(event.target.value);
  };

  return (
    <div>
      <div>
        <Button color={'aka'} onClick={() => changePointsAka(1)}>
          Yuko
        </Button>
        <Button color={'aka'} onClick={() => changePointsAka(2)}>
          Waza-ari
        </Button>
        <Button color={'aka'} onClick={() => changePointsAka(3)}>
          Ippon{' '}
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(1)}>
          Yuko
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(2)}>
          Waza-ari
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(3)}>
          Ippon{' '}
        </Button>
        <br />
        <Button color={'aka'} onClick={() => changePointsAka(-1)}>
          -Yuko
        </Button>
        <Button color={'aka'} onClick={() => changePointsAka(-2)}>
          -Waza-ari
        </Button>
        <Button color={'aka'} onClick={() => changePointsAka(-3)}>
          -Ippon{' '}
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(-1)}>
          -Yuko
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(-2)}>
          -Waza-ari
        </Button>
        <Button color={'ao'} onClick={() => changePointsAo(-3)}>
          -Ippon{' '}
        </Button>
      </div>
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
          value="null"
          name="senshu"
          checked={senshu === 'null'}
          onChange={onValueChange}
        />
        Null
      </div>
      <button onClick={() => setWinner()}>Win: </button>
      {winner}
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
  setWinner,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPoints);

const Button = styled.button`
  color: ${(props) => (props.color === 'aka' ? 'red' : 'blue')};
`;
