import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './components/Scoreboard/Scoreboard';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron/renderer';


const store = configureStore();

const rootElement = document.querySelector('.scoreboard');

ReactDOM.render(
  <Provider store={store}>
    <Scoreboard main={false}/>
  </Provider>,
  rootElement,
);
