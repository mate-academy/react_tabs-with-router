import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter  basename="https://github.com/mate-academy/react_tabs-with-router/">
    <App />
  </HashRouter>,
  document.getElementById('root')
);
