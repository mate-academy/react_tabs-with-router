import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HashRouter>,
  document.getElementById('root')
);
