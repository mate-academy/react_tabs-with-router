import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

const app = (
  <HashRouter basename="/react_tabs-with-router">
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));
