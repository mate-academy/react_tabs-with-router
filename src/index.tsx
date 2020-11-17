import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter basename={'/react_tabs-with-router'}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
