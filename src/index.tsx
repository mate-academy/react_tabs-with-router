// import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Router>
      <App />
    </Router>,
  );
}
