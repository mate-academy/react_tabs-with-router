import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HashRouter basename="/path">
    <App />
  </HashRouter>,
  document.getElementById('root')
);
