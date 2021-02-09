import { ipcRenderer, BrowserWindow } from 'electron';
import React, { useState, useEffect, useRef } from 'react';

const Ok = ({ root }) => {
  const [number, setNumber] = useState(0);
  const render = useRef(0);

  useEffect(() => {
    console.log(document.hidden);
    render.current++;
    console.log(render.current);
    if (render.current > 1) {
      console.log(`number = ${number}`);
      if (number !== '') {
        ipcRenderer.send('toggle', number);
        console.log(number, 'отправлено');
      } else {
        ipcRenderer.send('toggle', 0);
      }
    }
  });

  const input = (e) => {
    console.log(number, 'До');
    setNumber(Number(e.target.value));
    console.log(number, 'посчитано');
    ipcRenderer.send('toggle', number);
  };

  return (
    <div>
      <div>нужный инпут</div>
      <input type="number" value={number} onChange={input} />
      <div>Число = {number}</div>;<button onClick={() => setNumber((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Ok;
