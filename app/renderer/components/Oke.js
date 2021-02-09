import { ipcRenderer, BrowserWindow } from 'electron';
import React, { useState, useReducer, useEffect } from 'react';

const Oke = ({ root }) => {
  const [number, setNumber] = useState(0);

  ipcRenderer.on('toggle', (e, value) => {
    setNumber(value);
  });

  useEffect(() => {
    console.log(typeof(number));
  });

  return (
    <div>
      <div>Число = {number}</div>
    </div>
  );
};

export default Oke;
