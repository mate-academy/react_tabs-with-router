import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render(
  <HashRouter basename={'/path'}>
    <App />
  </HashRouter>,
  document.getElementById('root'));
