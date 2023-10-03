import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

const root = document.getElementById('root');

if (root !== null) {
  const reactRoot = ReactDOM.createRoot(root);

  reactRoot.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
} else {
  throw new Error('Root element not found');
}
