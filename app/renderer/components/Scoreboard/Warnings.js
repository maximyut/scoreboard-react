import React, { useState } from 'react';
import styled from 'styled-components';

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

export default function Warnings({ color }) {
  const C1C = useCheckbox(false),
    C1K = useCheckbox(false),
    C1HC = useCheckbox(false),
    C1H = useCheckbox(false),
    C2C = useCheckbox(false),
    C2K = useCheckbox(false),
    C2HC = useCheckbox(false),
    C2H = useCheckbox(false);

  const mainColor = color == 'Aka' ? 'red' : 'blue';

  return (
    <Block>
      {/* <div>
        <label>
          C1
          <input type="checkbox" {...C1C.bind} />
        </label>
        <label>
          C1K
          <input type="checkbox" {...C1K.bind} />
        </label>
        <label>
          C1HC
          <input type="checkbox" {...C1HC.bind} />
        </label>
        <label>
          C1H
          <input type="checkbox" {...C1H.bind} />
        </label>
        <label>
          C2C
          <input type="checkbox" {...C2C.bind} />
        </label>
        <label>
          C2K
          <input type="checkbox" {...C2K.bind} />
        </label>
        <label>
          C2HC
          <input type="checkbox" {...C2HC.bind} />
        </label>
        <label>
          C2H
          <input type="checkbox" {...C2H.bind} />
        </label>
      </div> */}
      <Table>
        <thead>
          <Tr>
            <th></th>
            <th>C</th>
            <th>K</th>
            <th>HC</th>
            <th>H</th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <td>C1</td>
            <td>
              <Circle state={C1C.checked} color={color} />
            </td>
            <td>
              <Circle state={C1K.checked} color={color} />
            </td>
            <td>
              <Circle state={C1HC.checked} color={color} />
            </td>
            <td>
              <Circle state={C1H.checked} color={color} />
            </td>
          </Tr>
        </tbody>
        <tbody>
          <Tr>
            <td>C2</td>
            <td>
              <Circle state={C2C.checked} color={color} />
            </td>
            <td>
              <Circle state={C2K.checked} color={color} />
            </td>
            <td>
              <Circle state={C2HC.checked} color={color} />
            </td>
            <td>
              <Circle state={C2H.checked} color={color} />
            </td>
          </Tr>
        </tbody>
      </Table>
    </Block>
  );
}

const Block = styled.div`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  height: 6vh;
`;

const Circle = styled.div.attrs((props) => ({
  color: props.color === 'Aka' ? 'red' : 'blue',
}))`
  width: 4vh;
  height: 4vh;
  border-radius: 50%;
  background-color: ${(props) => (props.state ? props.color : 'white')};
  margin: 0 auto;
`;


