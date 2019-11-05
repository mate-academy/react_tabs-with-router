import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import './App.css';

import App from './App';

ReactDOM.render((
  <HashRouter>
    <App test={123} />
  </HashRouter>
), document.getElementById('root'));
