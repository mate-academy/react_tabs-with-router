import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="alc499.github.io/tabs-with-router">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
