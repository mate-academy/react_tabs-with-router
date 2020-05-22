import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HashRouter basename="https://github.com/mate-academy/react_tabs-with-router/">
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
