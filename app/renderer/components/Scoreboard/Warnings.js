import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Warnings = ({ color, warnings }) => {
  const C1C = color == 'aka' ? warnings.akac1c : warnings.aoc1c,
    C1K = color == 'aka' ? warnings.akac1k : warnings.aoc1k,
    C1HC = color == 'aka' ? warnings.akac1hc : warnings.aoc1hc,
    C1H = color == 'aka' ? warnings.akac1h : warnings.aoc1h,
    C2C = color == 'aka' ? warnings.akac2c : warnings.aoc2c,
    C2K = color == 'aka' ? warnings.akac2k : warnings.aoc2k,
    C2HC = color == 'aka' ? warnings.akac2hc : warnings.aoc2hc,
    C2H = color == 'aka' ? warnings.akac2h : warnings.aoc2h;

  return (
    <Block>
      <Table>
        <thead>
          <Tr>
            <Th></Th>
            <Th>C</Th>
            <Th>K</Th>
            <Th>HC</Th>
            <Th>H</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <td>C1</td>
            <td>
              <Circle state={C1C} color={color} />
            </td>
            <td>
              <Circle state={C1K} color={color} />
            </td>
            <td>
              <Circle state={C1HC} color={color} />
            </td>
            <td>
              <Circle state={C1H} color={color} />
            </td>
          </Tr>
        </tbody>
        <tbody>
          <Tr>
            <td>C2</td>
            <td>
              <Circle state={C2C} color={color} />
            </td>
            <td>
              <Circle state={C2K} color={color} />
            </td>
            <td>
              <Circle state={C2HC} color={color} />
            </td>
            <td>
              <Circle state={C2H} color={color} />
            </td>
          </Tr>
        </tbody>
      </Table>
    </Block>
  );
};

const mapStateToProps = (state) => {
  return {
    warnings: state.warnings,
  };
};

export default connect(mapStateToProps)(Warnings);

const Block = styled.div`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  height: 6vh;
`;

const Th = styled.th`
  width: 8vw;
`;

const Circle = styled.div.attrs((props) => ({
  color: props.color === 'aka' ? 'red' : 'blue',
}))`
  width: 4vh;
  height: 4vh;
  border-radius: 50%;
  background-color: ${(props) => (props.state ? props.color : 'white')};
  margin: 0 auto;
`;
